import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SectionHeader from './SectionHeader';
import { ArrowUpIcon } from './Icons';

interface CashFlowItemProps {
    label: string;
    amount: string;
    percentage: string;
}

const CashFlowItem = ({ label, amount, percentage }: CashFlowItemProps) => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>{label}</Text>
            </View>
            <View style={styles.valueContainer}>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{amount}</Text>
                </View>
                <View style={styles.percentageContainer}>
                    <View style={styles.iconContainer}>
                        <ArrowUpIcon />
                    </View>
                    <View>
                        <Text style={styles.percentage}>{percentage}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const CashFlowSummary = () => {
    return (
        <View style={styles.container}>
            <SectionHeader title="Cash Flow Summary" onPress={() => { }} />
            <View style={styles.content}>
                <CashFlowItem
                    label="Total Revenue"
                    amount="₫12,000,000"
                    percentage="5% from last month"
                />
                <CashFlowItem
                    label="Profit"
                    amount="₫3,500,000"
                    percentage="3% from last month"
                />
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
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    labelContainer: {
        marginBottom: 4,
    },
    label: {
        fontSize: 15,
        color: '#6B7280',
    },
    valueContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    amountContainer: {},
    amount: {
        fontSize: 18,
        fontWeight: '600',
        color: '#111827',
    },
    percentageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    percentage: {
        fontSize: 14,
        color: '#10B981',
    },
});

export default CashFlowSummary;
