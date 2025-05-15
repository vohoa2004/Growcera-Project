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
import { useRouter, useLocalSearchParams } from 'expo-router';
import { getProductById } from 'services/product';
import { Batch, ProductDetails } from 'models/Product';
import { formatDate, formatMoney } from 'utils/formatter';

const ProductDetailsScreen = () => {
    const router = useRouter();
    const { id } = useLocalSearchParams<{ id: string }>();
    const [data, setData] = useState<ProductDetails | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            loadProductData(id);
        }
    }, [id]);

    const loadProductData = async (productId: string) => {
        try {
            setLoading(true);
            const data = await getProductById(productId);
            console.log("API response data:", data); // Debug data from API
            setData(data);
            setError(null);
        } catch (err) {
            console.error('Error fetching product:', err); // Log detailed error
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

    const handleBackPress = () => {
        router.back();
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#22c55e" />
                <Text style={styles.loadingText}>Loading product details...</Text>
            </View>
        );
    }

    if (error || !data) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error || 'Something went wrong'}</Text>
                <TouchableOpacity style={styles.retryButton} onPress={() => id && loadProductData(id)}>
                    <Text style={styles.retryButtonText}>Retry</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.pageContainer}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View style={styles.card}>
                    {/* Header with back button */}
                    <View style={styles.header}>
                        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
                            <Feather name="arrow-left" size={20} color="#000" />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>Product Details</Text>
                        <TouchableOpacity onPress={handleMoreOptions}>
                            <Feather name="more-vertical" size={20} color="#000" />
                        </TouchableOpacity>
                    </View>

                    {/* Product Image */}
                    <View style={styles.imageContainer}>
                        {data.product.imageUrl ? (
                            <Image
                                source={{ uri: data.product.imageUrl }}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        ) : (
                            <View style={[styles.image, styles.placeholderImage]}>
                                <Feather name="image" size={40} color="#d1d5db" />
                            </View>
                        )}
                    </View>

                    {/* Product Info */}
                    <View style={styles.infoContainer}>
                        <View style={styles.infoSection}>
                            <Text style={styles.infoSectionLabel}>Product Code</Text>
                            <Text style={styles.infoSectionValue}>{data.product.code || 'N/A'}</Text>
                        </View>

                        <View style={styles.infoSection}>
                            <Text style={styles.infoSectionLabel}>Product Name</Text>
                            <Text style={styles.infoSectionValue}>{data.product.name || 'N/A'}</Text>
                        </View>

                        <View style={styles.quantityPriceRow}>
                            <View style={styles.infoColumn}>
                                <Text style={styles.infoLabel}>Quantity</Text>
                                <Text style={styles.infoValue}>{data.product.quantity || 0}</Text>
                            </View>
                            <View style={styles.infoColumn}>
                                <Text style={styles.infoLabel}>Current Selling Price</Text>
                                <Text style={styles.infoValue}>{formatMoney(data.product.unit_price) || "0"} đ / {data.product.unit}</Text>
                            </View>
                        </View>

                        {data.product.description && (
                            <View style={styles.infoSection}>
                                <Text style={styles.infoSectionLabel}>Description</Text>
                                <Text style={styles.descriptionText}>{data.product.description}</Text>
                            </View>
                        )}
                    </View>

                    {/* Batches Header */}
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionHeaderText}>Batches</Text>
                        <Text style={styles.batchCount}>{data.batches?.length || 0} batches</Text>
                    </View>

                    {/* Batches */}
                    {Array.isArray(data.batches) && data.batches.length > 0 ? (
                        data.batches.map((batch: Batch) => (
                            <View key={batch.batch_id} style={styles.batchContainer}>
                                <View style={styles.batchHeader}>
                                    <Text style={styles.batchTitle}>Batch: {batch.batch_code}</Text>
                                    <TouchableOpacity onPress={() => handleEditBatch(batch.batch_code)}>
                                        <Feather name="edit-2" size={16} color="#000" />
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.batchStock}>Stock: {batch.quantity} units</Text>
                                <View style={styles.batchRow}>
                                    <MaterialIcons name="event-available" size={16} color="#22c55e" />
                                    <Text style={styles.batchText}>Expires: {formatDate(batch.expiration_date)}</Text>
                                </View>
                            </View>
                        ))
                    ) : (
                        <View style={styles.noBatchesContainer}>
                            <Text style={styles.noBatchesText}>No batches available</Text>
                        </View>
                    )}
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
    backButton: {
        padding: 4,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111827',
        flex: 1,
        textAlign: 'center',
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
    placeholderImage: {
        backgroundColor: '#f3f4f6',
        justifyContent: 'center',
        alignItems: 'center',
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
    descriptionText: {
        fontSize: 15,
        color: '#4b5563',
        lineHeight: 22,
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
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 18,
        paddingVertical: 14,
        borderTopWidth: 1,
        borderTopColor: '#f3f4f6',
        backgroundColor: '#f9fafb',
    },
    sectionHeaderText: {
        fontWeight: '600',
        fontSize: 16,
        color: '#111827',
    },
    batchCount: {
        fontSize: 14,
        color: '#6b7280',
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
    noBatchesContainer: {
        padding: 18,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    noBatchesText: {
        color: '#9ca3af',
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

export default ProductDetailsScreen;