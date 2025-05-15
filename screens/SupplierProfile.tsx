import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import ProductGrid from '../components/supplier/details/ProductGrid';
import ProfileInfo from '../components/supplier/details/ProfileInfo';
import ContactInformation from '../components/supplier/details/ContactInformation';
import HeaderBar from 'components/HeaderBar';
import { useRouter } from 'expo-router';

const SupplierProfile = () => {
    const router = useRouter();
    // Sample product data
    const products = [
        {
            id: '1',
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bba29531f2b917c0e3de3fd7827081a5976b76d6',
            name: 'Fresh Vegetables',
            price: '$4.99/kg',
        },
        {
            id: '2',
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/811ae97ee8150382aac4d9470863cd8a80353dee',
            name: 'Seasonal Fruits',
            price: '$6.99/kg',
        },
        {
            id: '3',
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/63b991b0c698d8de6ec03a7751e5ea94caabbea6',
            name: 'Fresh Herbs',
            price: '$2.99/bunch',
        },
        {
            id: '4',
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/621d8a414e88ed2b0c77e54cd9bd14be78e631c5',
            name: 'Dairy Products',
            price: '$3.99/unit',
        },
    ];

    const handleStartOrder = () => {
        // Handle order start logic
        console.log('Starting order');
    };

    return (
        <ScrollView className="flex-1 bg-white">
            <HeaderBar
                title="Supplier Profile"
                onBackPress={() => router.back()}
                onSearchPress={() => console.log('Search pressed')}
                onNotificationPress={() => console.log('Notification pressed')}
            />
            <ProfileInfo
                logoUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/ab048b266b9501bce8275ea95824ffef1d3cfebb"
                companyName="Green Valley Supplies"
                rating={4.8}
                reviewCount={234}
            />
            <ContactInformation
                phone="+1 (234) 567-890"
                email="contact@greenvalley.com"
                address="123 Green Street, Nature Valley, CA 90210"
            />
            <ProductGrid products={products} />

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
