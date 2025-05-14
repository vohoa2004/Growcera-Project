import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MenuIcon } from './Icons';

interface FormHeaderProps {
    title: string;
}

export const FormHeader: React.FC<FormHeaderProps> = ({ title }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContent}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <MenuIcon />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleContainer: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#111827',
    },
    iconContainer: {
        padding: 8,
    },
});
