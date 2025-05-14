import * as React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

interface FormFieldProps {
    label: string;
    placeholder?: string;
    value: string;
    onChangeText: (text: string) => void;
    rightElement?: React.ReactNode;
    keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad';
    containerStyle?: object;
}

export const FormField: React.FC<FormFieldProps> = ({
    label,
    placeholder,
    value,
    onChangeText,
    rightElement,
    keyboardType = 'default',
    containerStyle,
}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>{label}</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, rightElement ? styles.inputWithIcon : null]}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                />
                {rightElement && <View style={styles.rightElement}>{rightElement}</View>}
            </View>
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
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 6,
        backgroundColor: '#FFFFFF',
    },
    input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 12,
        fontSize: 14,
        color: '#111827',
    },
    inputWithIcon: {
        paddingRight: 40,
    },
    rightElement: {
        position: 'absolute',
        right: 8,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
