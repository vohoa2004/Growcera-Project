import * as React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FormHeader } from '../components/batch/FormHeader';
import { FormField } from '../components/batch/FormField';
import { DatePickerField } from '../components/batch/DatePickerField';
import { ActionButtons } from '../components/batch/ActionButtons';
import { CameraIcon } from '../components/batch/Icons';
import BottomNavigation from 'components/BottomNavigation';
import { navItems } from 'constants/navItems';
import { useRouter } from 'expo-router';
import { useCallback } from 'react';

const AddProductBatch: React.FC = () => {
    const [batchCode, setBatchCode] = React.useState('');
    const [productName, setProductName] = React.useState('');
    const [quantity, setQuantity] = React.useState('0');
    const [price, setPrice] = React.useState('$0.00');
    const [importDate, setImportDate] = React.useState('');
    const [expiryDate, setExpiryDate] = React.useState('');

    const handleCameraPress = () => {
        // Handle camera functionality
        console.log('Camera button pressed');
    };

    const handleImportDatePress = () => {
        // Handle date picker
        console.log('Import date picker pressed');
    };

    const handleExpiryDatePress = () => {
        // Handle date picker
        console.log('Expiry date picker pressed');
    };

    const handleCancel = () => {
        // Handle cancel action
        console.log('Cancel pressed');
    };

    const handleSave = () => {
        // Handle save action
        console.log('Save pressed', {
            batchCode,
            productName,
            quantity,
            price,
            importDate,
            expiryDate,
        });
    };

    const router = useRouter();
    const handleNavPress = useCallback((itemId: string) => {
        try {
            router.push(`/${itemId}`);
        } catch (error) {
            console.error('Navigation error:', error);
        }
    }, [router]);

    return (
        <View style={styles.container}>
            <FormHeader title="Add New Product Batch" />
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: '' }}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.formContainer}>
                    <FormField
                        label="Batch Code"
                        placeholder="Enter batch code"
                        value={batchCode}
                        onChangeText={setBatchCode}
                        rightElement={
                            <TouchableOpacity onPress={handleCameraPress}>
                                <CameraIcon />
                            </TouchableOpacity>
                        }
                    />
                    <FormField
                        label="Product Name"
                        placeholder="Enter product name"
                        value={productName}
                        onChangeText={setProductName}
                    />
                    <View style={styles.rowContainer}>
                        <FormField
                            label="Quantity"
                            value={quantity}
                            onChangeText={setQuantity}
                            keyboardType="numeric"
                            containerStyle={styles.halfField}
                        />
                        <FormField
                            label="Price"
                            value={price}
                            onChangeText={setPrice}
                            keyboardType="decimal-pad"
                            containerStyle={styles.halfField}
                        />
                    </View>
                    <View style={styles.rowContainer}>
                        <DatePickerField
                            label="Import Date"
                            value={importDate}
                            onPress={handleImportDatePress}
                            containerStyle={styles.halfField}
                        />
                        <DatePickerField
                            label="Expiry Date"
                            value={expiryDate}
                            onPress={handleExpiryDatePress}
                            containerStyle={styles.halfField}
                        />
                    </View>
                </View>
            </ScrollView>
            <ActionButtons onCancel={handleCancel} onSave={handleSave} />
            <BottomNavigation
                items={navItems}
                onItemPress={handleNavPress}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
    },
    scrollContainer: {
        flex: 1,
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 29,
        marginBottom: 42,
    },
    image: {
        width: 227,
        height: 156,
    },
    formContainer: {
        paddingHorizontal: 16,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfField: {
        width: '48%',
    },
});

export default AddProductBatch;
