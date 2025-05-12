import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SectionHeader from './SectionHeader';
import { WarningIcon } from './Icons';

interface AlertItemProps {
    category: string;
    amount: string;
}

const AlertItem = ({ category, amount }: AlertItemProps) => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.categoryContainer}>
                <Text style={styles.category}>{category}</Text>
            </View>
            <View style={styles.amountContainer}>
                <Text style={styles.amount}>{amount}</Text>
            </View>
            <View style={styles.iconContainer}>
                <WarningIcon />
            </View>
        </View>
    );
};

const OverspendingAlerts = () => {
    const alerts = [
        { category: 'Marketing', amount: '+₫500,000' },
        { category: 'Utilities', amount: '+₫300,000' },
        { category: 'Supplies', amount: '+₫200,000' },
    ];

    return (
        <View style={styles.container}>
            <SectionHeader title="Overspending Alerts" onPress={() => { }} />
            <View style={styles.content}>
                {alerts.map((alert, index) => (
                    <AlertItem key={index} category={alert.category} amount={alert.amount} />
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
        paddingBottom: 16,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    categoryContainer: {
        flex: 1,
    },
    category: {
        fontSize: 15,
        fontWeight: '500',
        color: '#111827',
    },
    amountContainer: {
        flex: 1,
        alignItems: 'center',
    },
    amount: {
        fontSize: 15,
        fontWeight: '500',
        color: '#EF4444',
    },
    iconContainer: {
        flex: 0.5,
        alignItems: 'flex-end',
    },
});

export default OverspendingAlerts;
