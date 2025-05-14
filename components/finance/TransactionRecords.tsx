import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import SectionHeader from './SectionHeader';
import { getLatestSales } from 'services/sale';
import { Sale } from 'models/Transaction';
import { formatDateTime, formatMoney } from "utils/formatter";

const TransactionItem = ({ type, total_amount, created_at }: Sale) => {
    const isPositive = total_amount.startsWith('+');

    return (
        <View style={styles.itemContainer}>
            <View style={styles.itemContent}>
                <View style={styles.itemHeader}>
                    <Text style={styles.itemType}>{type}</Text>
                    <Text style={[styles.itemAmount, isPositive ? styles.positive : styles.negative]}>
                        {total_amount}
                    </Text>
                </View>
                <Text style={styles.itemDate}>{created_at}</Text>
            </View>
        </View>
    );
};

const TransactionRecords = () => {
    const [transactions, setTransactions] = useState<Sale[]>([])

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await getLatestSales();
                setTransactions(response)
            } catch (error) {
                console.error("Lỗi khi lấy danh sách sales:", error)
            }
        }
        fetchTransactions()
    }, [])

    return (
        <View style={styles.container}>
            <SectionHeader title="Transaction Records" onPress={() => { }} />
            <View style={styles.content}>
                {transactions.map((transaction, index) => (
                    <TransactionItem
                        key={index}
                        type={"Sales"}
                        total_amount={formatMoney(transaction.total_amount)}
                        created_at={formatDateTime(transaction.created_at)}
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
