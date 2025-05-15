import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ArrowRightIcon } from './Icons';

interface SectionHeaderProps {
    title: string;
    onPress?: () => void;
}

const SectionHeader = ({ title, onPress }: SectionHeaderProps) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.iconContainer}>
                <ArrowRightIcon />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        backgroundColor: 'white',
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#111827',
    },
    iconContainer: {
        padding: 4,
    },
});

export default SectionHeader;
