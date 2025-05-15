import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NotificationIcon } from './Icons';

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Finance Management</Text>
            </View>
            <View style={styles.iconContainer}>
                <NotificationIcon />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    content: {
        flex: 1,
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
