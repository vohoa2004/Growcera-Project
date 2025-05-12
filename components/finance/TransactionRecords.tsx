import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SectionHeader from './SectionHeader';

interface TransactionItemProps {
    type: string;
    amount: string;
    date: string;
}

const TransactionItem = ({ type, amount, date }: TransactionItemProps) => {
    const isPositive = amount.startsWith('+');

    return (
        <View style={styles.itemContainer}>
            <View style={styles.itemContent}>
                <View style={styles.itemHeader}>
                    <Text style={styles.itemType}>{type}</Text>
                    <Text style={[styles.itemAmount, isPositive ? styles.positive : styles.negative]}>
                        {amount}
                    </Text>
                </View>
                <Text style={styles.itemDate}>{date}</Text>
            </View>
        </View>
    );
};

const TransactionRecords = () => {
    const transactions = [
        { type: 'Sale', amount: '+₫1,200,000', date: 'Apr 29' },
        { type: 'Purchase', amount: '-₫800,000', date: 'Apr 28' },
        { type: 'Sale', amount: '+₫950,000', date: 'Apr 28' },
    ];

    return (
        <View style={styles.container}>
            <SectionHeader title="Transaction Records" onPress={() => { }} />
            <View style={styles.content}>
                {transactions.map((transaction, index) => (
                    <TransactionItem
                        key={index}
                        type={transaction.type}
                        amount={transaction.amount}
                        date={transaction.date}
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
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    itemContent: {
        gap: 4,
    },
    itemHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemType: {
        fontSize: 15,
        fontWeight: '500',
        color: '#111827',
    },
    itemAmount: {
        fontSize: 15,
        fontWeight: '600',
    },
    positive: {
        color: '#10B981',
    },
    negative: {
        color: '#EF4444',
    },
    itemDate: {
        fontSize: 14,
        color: '#6B7280',
    },
});

export default TransactionRecords;
