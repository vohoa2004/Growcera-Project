import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NotificationIcon } from './Icons';

const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.headerContent}>
                <Text style={styles.title}>Transaction Logging</Text>
                <View style={styles.iconContainer}>
                    <NotificationIcon />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB',
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#111827',
    },
    iconContainer: {
        padding: 4,
    },
});

export default Header;
