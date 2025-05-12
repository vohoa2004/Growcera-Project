import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SectionHeader from './SectionHeader';

interface DebtItemProps {
    name: string;
    amount: string;
    dueDate: string;
}

const DebtItem = ({ name, amount, dueDate }: DebtItemProps) => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{name}</Text>
            </View>
            <View style={styles.amountContainer}>
                <Text style={styles.amount}>{amount}</Text>
            </View>
            <View style={styles.dueDateContainer}>
                <Text style={styles.dueDate}>{dueDate}</Text>
            </View>
        </View>
    );
};

const BuyerDebtTracking = () => {
    const debtItems = [
        { name: 'Nguyen Van A', amount: '₫2,500,000', dueDate: 'Due: May 5' },
        { name: 'Tran Thi B', amount: '₫1,800,000', dueDate: 'Due: May 7' },
        { name: 'Le Van C', amount: '₫1,200,000', dueDate: 'Due: May 10' },
    ];

    return (
        <View style={styles.container}>
            <SectionHeader title="Buyer Debt Tracking" onPress={() => { }} />
            <View style={styles.content}>
                {debtItems.map((item, index) => (
                    <DebtItem
                        key={index}
                        name={item.name}
                        amount={item.amount}
                        dueDate={item.dueDate}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 16,
        marginBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    content: {
        paddingBottom: 8,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    nameContainer: {
        flex: 2,
    },
    name: {
        fontSize: 15,
        fontWeight: '500',
        color: '#111827',
    },
    amountContainer: {
        flex: 1,
    },
    amount: {
        fontSize: 15,
        fontWeight: '600',
        color: '#111827',
    },
    dueDateContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    dueDate: {
        fontSize: 14,
        color: '#6B7280',
    },
});

export default BuyerDebtTracking;
