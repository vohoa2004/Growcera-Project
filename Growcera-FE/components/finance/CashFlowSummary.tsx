import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SectionHeader from './SectionHeader';
import { ArrowUpIcon } from './Icons';
import { CashFlow, MonthProfit, MonthRevenue, RatioProfit, RatioRevenue } from 'models/Transaction';
import { getMonthProfit, getMonthRevenue, getProfitRatio, getRevenueRatio } from 'services/sale';
import { formatMoney } from 'utils/formatter';

const CashFlowItem = ({ label, amount, percentage }: CashFlow) => {
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
    const [monthRevenue, setMonthRevenue] = useState<MonthRevenue>()
    const [monthProfit, setMonthProfit] = useState<MonthProfit>()
    const [ratioProfit, setRatioProfit] = useState<RatioProfit>()
    const [ratioRevenue, setRatioRevenue] = useState<RatioRevenue>()

    useEffect(() => {
        const fetchCashFlow = async () => {
            try {
                const monthRevenueResponse = await getMonthRevenue();
                setMonthRevenue(monthRevenueResponse);
                console.log(monthRevenue)

                const monthProfitResponse = await getMonthProfit();
                setMonthProfit(monthProfitResponse);
                console.log(monthProfit)

                const ratioProfitResponse = await getProfitRatio();
                setRatioProfit(ratioProfitResponse);
                console.log(ratioProfit)

                const ratioRevenueResponse = await getRevenueRatio();
                setRatioRevenue(ratioRevenueResponse);
                console.log(ratioRevenue)

            } catch (error) {
                console.error("Lỗi khi lấy thông tin dòng tiền:", error)
            }
        }
        fetchCashFlow()
    }, [])
    return (
        <View style={styles.container}>
            <SectionHeader title="Cash Flow Summary" onPress={() => { }} />
            <View style={styles.content}>
                <CashFlowItem
                    label="Total Revenue"
                    amount={formatMoney(monthRevenue?.revenue || "0")}
                    percentage={`${ratioRevenue?.ratio.toFixed(2) || 0}% from last month`}
                />
                <CashFlowItem
                    label="Profit"
                    amount={formatMoney(monthProfit?.profit || "0")}
                    percentage={`${ratioProfit?.ratio.toFixed(2) || 0}% from last month`}
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
