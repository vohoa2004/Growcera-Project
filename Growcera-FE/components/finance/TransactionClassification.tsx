import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SectionHeader from './SectionHeader';

interface ClassificationItemProps {
    count: string;
    label: string;
}

const ClassificationItem = ({ count, label }: ClassificationItemProps) => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.countContainer}>
                <Text style={styles.count}>{count}</Text>
            </View>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>{label}</Text>
            </View>
        </View>
    );
};

const TransactionClassification = () => {
    return (
        <View style={styles.container}>
            <SectionHeader title="Transaction Classification" onPress={() => { }} />
            <View style={styles.content}>
                <View style={styles.row}>
                    <ClassificationItem count="65" label="Sales" />
                    <View style={styles.divider} />
                    <ClassificationItem count="42" label="Purchases" />
                </View>
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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 8,
    },
    itemContainer: {
        alignItems: 'center',
        padding: 8,
    },
    countContainer: {
        marginBottom: 4,
    },
    count: {
        fontSize: 24,
        fontWeight: '700',
        color: '#111827',
    },
    labelContainer: {},
    label: {
        fontSize: 14,
        color: '#6B7280',
    },
    divider: {
        width: 1,
        backgroundColor: '#E5E7EB',
    },
});

export default TransactionClassification;
