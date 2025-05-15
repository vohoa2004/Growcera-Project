import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CameraIcon } from './Icons';

interface ScannedProductProps {
    productName: string;
    sku: string;
}

export const ScannedProduct: React.FC<ScannedProductProps> = ({ productName, sku }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <CameraIcon />
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Scanned Product</Text>
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.productName}>{productName}</Text>
                    </View>
                    <View style={styles.skuContainer}>
                        <Text style={styles.sku}>SKU: {sku}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        backgroundColor: 'white',
        borderRadius: 8,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    imageContainer: {
        marginRight: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailsContainer: {
        flex: 1,
    },
    titleContainer: {
        marginBottom: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#111827',
    },
    infoContainer: {
        gap: 4,
    },
    nameContainer: {
        marginBottom: 4,
    },
    productName: {
        fontSize: 14,
        fontWeight: '500',
        color: '#374151',
    },
    skuContainer: {},
    sku: {
        fontSize: 12,
        color: '#6B7280',
    },
});

export default ScannedProduct;
