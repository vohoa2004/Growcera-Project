import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    Alert
} from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
// Define interfaces for our data types
interface Batch {
    id: string;
    code: string;
    stock: number;
    expiryDate: string;
}

interface Product {
    id: string;
    code: string;
    name: string;
    quantity: number;
    price: number;
    image: string;
    batches: Batch[];
}

// Mock API function
const fetchProductDetails = (): Promise<Product> => {
    return new Promise((resolve) => {
        // Simulate network delay
        setTimeout(() => {
            resolve({
                id: '1',
                code: '123ABC456DEF',
                name: 'Organic Apples',
                quantity: 48,
                price: 25000,
                image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ve8G7lxw2tV5HFGLKYAfMnpmmncinN.png',
                batches: [
                    {
                        id: 'b1',
                        code: 'ABCDEF123456',
                        stock: 36,
                        expiryDate: 'May 03, 2025'
                    },
                    {
                        id: 'b2',
                        code: 'ABCDEF123455',
                        stock: 36,
                        expiryDate: 'May 5, 2025'
                    }
                ]
            });
        }, 1000);
    });
};

const ProductDetails = () => {
    const router = useRouter();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        loadProductData();
    }, []);

    const loadProductData = async () => {
        try {
            setLoading(true);
            const data = await fetchProductDetails();
            setProduct(data);
            setError(null);
        } catch (err) {
            setError('Failed to load product details');
            Alert.alert('Error', 'Failed to load product details');
        } finally {
            setLoading(false);
        }
    };

    const handleEditBatch = (batchId: string) => {
        // navigate to a batch edit screen
        Alert.alert('Edit Batch', `Editing batch ${batchId}`);
    };

    const handleAddBatch = () => {
        // navigate to a batch creation screen
        router.push('/management/add-batch');
    };

    const handleMoreOptions = () => {
        // show a menu with options
        Alert.alert('Options', 'Product options menu');
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#22c55e" />
                <Text style={styles.loadingText}>Loading product details...</Text>
            </View>
        );
    }

    if (error || !product) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error || 'Something went wrong'}</Text>
                <TouchableOpacity style={styles.retryButton} onPress={loadProductData}>
                    <Text style={styles.retryButtonText}>Retry</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.pageContainer}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View style={styles.card}>
                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Product Details</Text>
                        <TouchableOpacity onPress={handleMoreOptions}>
                            <Feather name="more-vertical" size={20} color="#000" />
                        </TouchableOpacity>
                    </View>

                    {/* Product Image */}
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: product.image }}
                            style={styles.image}
                            resizeMode="cover"
                        />
                    </View>

                    {/* Product Info */}
                    <View style={styles.infoContainer}>
                        <View style={styles.infoSection}>
                            <Text style={styles.infoSectionLabel}>Product Code</Text>
                            <Text style={styles.infoSectionValue}>{product.code}</Text>
                        </View>

                        <View style={styles.infoSection}>
                            <Text style={styles.infoSectionLabel}>Product Name</Text>
                            <Text style={styles.infoSectionValue}>{product.name}</Text>
                        </View>

                        <View style={styles.quantityPriceRow}>
                            <View style={styles.infoColumn}>
                                <Text style={styles.infoLabel}>Quantity</Text>
                                <Text style={styles.infoValue}>{product.quantity}</Text>
                            </View>
                            <View style={styles.infoColumn}>
                                <Text style={styles.infoLabel}>Current Selling Price</Text>
                                <Text style={styles.infoValue}>{product.price}</Text>
                            </View>
                        </View>
                    </View>

                    {/* Batches */}
                    {product.batches.map((batch: Batch) => (
                        <View key={batch.id} style={styles.batchContainer}>
                            <View style={styles.batchHeader}>
                                <Text style={styles.batchTitle}>Batch: {batch.code}</Text>
                                <TouchableOpacity onPress={() => handleEditBatch(batch.id)}>
                                    <Feather name="edit-2" size={16} color="#000" />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.batchStock}>Stock: {batch.stock} units</Text>
                            <View style={styles.batchRow}>
                                <MaterialIcons name="event-available" size={16} color="#22c55e" />
                                <Text style={styles.batchText}>Expires: {batch.expiryDate}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>

            {/* Floating Action Button */}
            <TouchableOpacity style={styles.fab} onPress={handleAddBatch}>
                <Feather name="plus" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: '#f9fafb',
        position: 'relative',
    },
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingBottom: 80, // Add padding to avoid FAB overlap
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9fafb',
    },
    loadingText: {
        marginTop: 16,
        fontSize: 16,
        color: '#4b5563',
        fontWeight: '500',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9fafb',
        padding: 24,
    },
    errorText: {
        fontSize: 16,
        color: '#ef4444',
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: '500',
    },
    retryButton: {
        backgroundColor: '#22c55e',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    retryButtonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 15,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        margin: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
        overflow: 'hidden',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#f3f4f6',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111827',
    },
    imageContainer: {
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#f9fafb',
    },
    image: {
        width: 160,
        height: 160,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    infoContainer: {
        paddingHorizontal: 18,
        paddingVertical: 16,
        backgroundColor: '#fff',
    },
    infoSection: {
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#f3f4f6',
        marginBottom: 2,
    },
    infoSectionLabel: {
        color: '#6b7280',
        fontSize: 14,
        marginBottom: 6,
    },
    infoSectionValue: {
        fontWeight: '600',
        fontSize: 17,
        color: '#111827',
        letterSpacing: 0.3,
    },
    infoRow: {
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#f3f4f6',
    },
    quantityPriceRow: {
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f3f4f6',
    },
    infoColumn: {
        width: '50%',
    },
    infoLabel: {
        color: '#6b7280',
        fontSize: 14,
        marginBottom: 4,
    },
    infoValue: {
        fontWeight: '600',
        fontSize: 16,
        color: '#111827',
    },
    batchContainer: {
        paddingHorizontal: 18,
        paddingVertical: 14,
        borderTopWidth: 1,
        borderTopColor: '#f3f4f6',
        backgroundColor: '#fff',
    },
    batchHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6,
    },
    batchTitle: {
        fontWeight: '600',
        fontSize: 15,
        color: '#111827',
    },
    batchStock: {
        color: '#6b7280',
        marginTop: 6,
        fontSize: 14,
        fontWeight: '500',
    },
    batchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    batchText: {
        color: '#6b7280',
        marginLeft: 8,
        fontSize: 14,
    },
    fab: {
        position: 'absolute',
        bottom: 28,
        right: 28,
        width: 60,
        height: 60,
        backgroundColor: '#22c55e',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 8,
    },
});

export default ProductDetails;