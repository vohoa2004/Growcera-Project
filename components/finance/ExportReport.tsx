import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { GoogleIcon, PDFIcon } from './Icons';

const ExportButton = ({ icon, label, onPress }: { icon: React.ReactNode, label: string, onPress: () => void }) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress} activeOpacity={0.8}>
            <View style={styles.buttonContent}>
                <View style={styles.iconContainer}>{icon}</View>
                <View style={styles.labelContainer}>
                    <Text style={styles.buttonLabel}>{label}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const ExportReport = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Export Report</Text>
                </View>
                <View style={styles.dateContainer}>
                    <Text style={styles.date}>Last Export: May 2, 2025</Text>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <ExportButton
                    icon={<GoogleIcon />}
                    label="Export Sheet"
                    onPress={() => { }}
                />
                <ExportButton
                    icon={<PDFIcon />}
                    label="Download PDF"
                    onPress={() => { }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    header: {
        marginBottom: 16,
    },
    titleContainer: {
        marginBottom: 4,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#111827',
    },
    dateContainer: {},
    date: {
        fontSize: 14,
        color: '#6B7280',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 12,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: '#38B000',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    iconContainer: {},
    labelContainer: {},
    buttonLabel: {
        color: 'white',
        fontWeight: '500',
        fontSize: 14,
    },
});

export default ExportReport;
