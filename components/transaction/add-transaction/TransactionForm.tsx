import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TransactionTypeDropdown from './TransactionTypeDropdown';
import QuantityInput from './QuantityInput';
import SubmitButton from './SubmitButton';

export const TransactionForm: React.FC = () => {
    const [transactionType, setTransactionType] = React.useState('Sale');
    const [quantity, setQuantity] = React.useState('');

    const handleTransactionTypePress = () => {
        // In a real app, this would open a dropdown or modal
        console.log('Transaction type dropdown pressed');
    };

    const handleSubmit = () => {
        console.log('Transaction submitted', { transactionType, quantity });
    };

    return (
        <View style={styles.container}>
            <View style={styles.formGroup}>
                <View style={styles.labelContainer}>
                    <Text style={styles.label}>Transaction Type</Text>
                </View>
                <TransactionTypeDropdown
                    value={transactionType}
                    onPress={handleTransactionTypePress}
                />
            </View>

            <QuantityInput
                value={quantity}
                onChangeText={setQuantity}
            />

            <SubmitButton
                title="Submit Transaction"
                onPress={handleSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    formGroup: {
        marginBottom: 16,
    },
    labelContainer: {
        marginBottom: 8,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        color: '#374151',
    },
});

export default TransactionForm;
