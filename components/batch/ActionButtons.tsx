import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface ActionButtonsProps {
    onCancel: () => void;
    onSave: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ onCancel, onSave }) => {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.saveButton} onPress={onSave}>
                    <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 12,
    },
    cancelButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#D1D5DB',
        backgroundColor: '#FFFFFF',
    },
    cancelButtonText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#374151',
    },
    saveButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 6,
        backgroundColor: '#059669',
    },
    saveButtonText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#FFFFFF',
    },
});
