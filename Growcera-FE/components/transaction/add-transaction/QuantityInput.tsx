import * as React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface QuantityInputProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
}

export const QuantityInput: React.FC<QuantityInputProps> = ({
    value,
    onChangeText,
    placeholder = 'Enter quantity'
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>Quantity</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    keyboardType="numeric"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
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
    inputContainer: {
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 6,
        backgroundColor: 'white',
    },
    input: {
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 14,
        color: '#111827',
    },
});

export default QuantityInput;
