import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { getTodayOrderCount, getTodayRevenue } from 'services/sale';
import { formatMoney } from 'utils/formatter';

// interface OverviewSectionProps {
//     salesAmount: string;
//     ordersCount: string;
//     chartImageUrl: string;
// }

const OverviewSection: React.FC = () => {
    const [todayRevenue, setTodayRevenue] = useState(0);
    const [todayOrders, setTodayOrders] = useState(0);
    const router = useRouter();
    useEffect(() => {
        const fetchTodayData = async () => {
            try {
                const revenueResponse = await getTodayRevenue();
                setTodayRevenue(revenueResponse.revenue)

                const orderResponse = await getTodayOrderCount();
                setTodayOrders(orderResponse.total_orders)
            } catch (error) {
                console.error("Lỗi khi lấy danh sách sales:", error)
            }
        }
        fetchTodayData()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View>
                    <Text style={styles.sectionTitle}>Today's Overview</Text>
                </View>
                {/* <View style={styles.chartIconContainer}>
                    <Image
                        source={{ uri: chartImageUrl }}
                        style={styles.chartIcon}
                    />
                </View> */}
            </View>
            <View style={styles.metricsContainer}>
                <View style={styles.metricBox}>
                    <Text style={styles.metricLabel}>Sales</Text>
                    <Text style={styles.metricValue}>{formatMoney(todayRevenue)}</Text>
                </View>
                <View style={styles.metricBox}>
                    <Text style={styles.metricLabel}>Orders</Text>
                    <Text style={styles.metricValue}>{todayOrders}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1F2937',
    },
    chartIconContainer: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    chartIcon: {
        width: 20,
        height: 20,
    },
    metricsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    metricBox: {
        flex: 1,
        backgroundColor: '#F3F4F6',
        borderRadius: 8,
        padding: 12,
        marginHorizontal: 4,
    },
    metricLabel: {
        fontSize: 14,
        color: '#6B7280',
        marginBottom: 4,
    },
    metricValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1F2937',
    },
});

export default OverviewSection;
