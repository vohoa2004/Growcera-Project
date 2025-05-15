import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import ProductGrid from '../components/supplier/details/ProductGrid';
import ProfileInfo from '../components/supplier/details/ProfileInfo';
import ContactInformation from '../components/supplier/details/ContactInformation';
import HeaderBar from '../components/HeaderBar';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { SupplierDetails } from 'models/Supplier';
import { getById } from 'services/supplier';

const SupplierProfile = () => {
    const router = useRouter();
    const { id } = useLocalSearchParams<{ id: string }>();

    // State for supplier data, loading and error
    const [supplier, setSupplier] = useState<SupplierDetails | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch supplier data when component mounts
    useEffect(() => {
        fetchSupplierDetails();
    }, [id]);

    // Function to fetch supplier details
    const fetchSupplierDetails = async () => {
        if (!id) {
            setError('Supplier ID is missing');
            setIsLoading(false);
            return;
        }

        try {
            setIsLoading(true);
            setError(null);

            const data = await getById(id);
            console.log(data)
            setSupplier(data);
        } catch (error: any) {
            console.error('Error fetching supplier details:', error);
            setError(error.message || 'Failed to load supplier details');
        } finally {
            setIsLoading(false);
        }
    };

    // Handle retry when fetch fails
    const handleRetry = () => {
        fetchSupplierDetails();
    };

    // Handle start order
    const handleStartOrder = () => {
        if (!supplier) return;

        // Navigate to order screen with supplier data
        router.push({
            pathname: '/order/new',
            params: { supplierId: supplier.id }
        });
    };

    // Show loading state
    if (isLoading) {
        return (
            <View className="flex-1 bg-white justify-center items-center">
                <ActivityIndicator size="large" color="#38B000" />
                <Text className="mt-4 text-gray-600">Loading supplier details...</Text>
            </View>
        );
    }

    // Show error state
    if (error || !supplier) {
        return (
            <View className="flex-1 bg-white justify-center items-center p-4">
                <Text className="text-red-500 text-lg mb-4">
                    {error || 'Failed to load supplier details'}
                </Text>
                <TouchableOpacity
                    onPress={handleRetry}
                    className="bg-[#38B000] py-3 px-6 rounded-lg"
                >
                    <Text className="text-white font-medium">Retry</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <ScrollView className="flex-1 bg-white">
            <HeaderBar
                title="Supplier Profile"
                onBackPress={() => router.back()}
                onSearchPress={() => console.log('Search pressed')}
                onNotificationPress={() => console.log('Notification pressed')}
            />
            <ProfileInfo
                logoUrl={supplier.imageUrl}
                companyName={supplier.name}
                rating={supplier.rating}
            />
            <ContactInformation
                phone={supplier.phone}
                email={supplier.email}
                address={supplier.address}
            />
            <ProductGrid products={supplier.products.map(product => ({
                id: product.id.toString(),
                image: product.image_url,
                name: product.name,
                price: `$${product.unit_price}/${product.unit}`,
            }))} />

            <View className="px-4 py-6">
                <TouchableOpacity
                    onPress={handleStartOrder}
                    className="bg-[#38B000] py-4 rounded-lg items-center"
                >
                    <Text className="text-white font-bold text-lg">Start Order</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default SupplierProfile;