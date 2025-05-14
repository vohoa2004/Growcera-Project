import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CalendarIcon } from './Icons';

interface DatePickerFieldProps {
    label: string;
    value: string;
    onPress: () => void;
    containerStyle?: object;
}

export const DatePickerField: React.FC<DatePickerFieldProps> = ({
    label,
    value,
    onPress,
    containerStyle,
}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>{label}</Text>
            </View>
            <TouchableOpacity style={styles.dateContainer} onPress={onPress}>
                <View style={styles.iconContainer}>
                    <CalendarIcon />
                </View>
                <View style={styles.dateTextContainer}>
                    <Text style={styles.dateText}>{value || 'mm/dd/yyyy'}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    labelContainer: {
        marginBottom: 6,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        color: '#374151',
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 6,
        backgroundColor: '#FFFFFF',
        height: 40,
        paddingHorizontal: 12,
    },
    iconContainer: {
        marginRight: 8,
    },
    dateTextContainer: {
        flex: 1,
    },
    dateText: {
        fontSize: 14,
        color: '#9CA3AF',
    },
});
