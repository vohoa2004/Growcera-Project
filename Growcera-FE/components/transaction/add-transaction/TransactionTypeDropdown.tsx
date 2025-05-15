import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ChevronDownIcon } from './Icons';

interface TransactionTypeDropdownProps {
    value: string;
    onPress: () => void;
}

export const TransactionTypeDropdown: React.FC<TransactionTypeDropdownProps> = ({
    value,
    onPress
}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.valueContainer}>
                <Text style={styles.value}>{value}</Text>
            </View>
            <View style={styles.iconContainer}>
                <ChevronDownIcon />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 10,
        backgroundColor: 'white',
    },
    valueContainer: {
        flex: 1,
    },
    value: {
        fontSize: 14,
        color: '#111827',
    },
    iconContainer: {
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default TransactionTypeDropdown;
