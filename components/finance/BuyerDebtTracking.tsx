import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SectionHeader from './SectionHeader';
import { CustomerDebt } from 'models/CustomerDebt';
import { getAll } from 'services/customer-debt';
import { formatDateTime } from 'utils/formatter';

const DebtItem = ({ customer_name, amount, created_at }: CustomerDebt) => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{customer_name}</Text>
            </View>
            <View style={styles.amountContainer}>
                <Text style={styles.amount}>{amount}</Text>
            </View>
            <View style={styles.dateContainer}>
                <Text style={styles.date}>{created_at}</Text>
            </View>
        </View>
    );
};

const BuyerDebtTracking = () => {

    const [debtItems, setDebtItems] = React.useState<CustomerDebt[]>([]);

    useEffect(() => {
        const fetchBuyerDebt = async () => {
            try {
                const response = await getAll();
                setDebtItems(response)
            } catch (error) {
                console.error("Lỗi khi lấy danh sách sales:", error)
            }
        }
        fetchBuyerDebt()
    }, [])
    return (
        <View style={styles.container}>
            <SectionHeader title="Buyer Debt Tracking" onPress={() => { }} />
            <View style={styles.content}>
                {debtItems.map((item, index) => (
                    <DebtItem
                        key={index}
                        customer_name={item.customer_name}
                        amount={item.amount}
                        created_at={formatDateTime(item.created_at)}
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
    dateContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    date: {
        fontSize: 14,
        color: '#6B7280',
    },
});

export default BuyerDebtTracking;
