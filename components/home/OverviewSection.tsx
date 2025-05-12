import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface OverviewSectionProps {
    salesAmount: string;
    ordersCount: string;
    chartImageUrl: string;
}

const OverviewSection: React.FC<OverviewSectionProps> = ({
    salesAmount = "$1,234",
    ordersCount = "28",
    chartImageUrl = "https://cdn.builder.io/api/v1/image/assets/176e2b6a03e94e0cbe0c477511c3678d/129d627bd2e7d896d12ffe0269bd125baa1cd6d6?placeholderIfAbsent=true"
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View>
                    <Text style={styles.sectionTitle}>Today's Overview</Text>
                </View>
                <View style={styles.chartIconContainer}>
                    <Image
                        source={{ uri: chartImageUrl }}
                        style={styles.chartIcon}
                    />
                </View>
            </View>
            <View style={styles.metricsContainer}>
                <View style={styles.metricBox}>
                    <Text style={styles.metricLabel}>Sales</Text>
                    <Text style={styles.metricValue}>{salesAmount}</Text>
                </View>
                <View style={styles.metricBox}>
                    <Text style={styles.metricLabel}>Orders</Text>
                    <Text style={styles.metricValue}>{ordersCount}</Text>
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
