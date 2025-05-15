import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface ManagementCardProps {
    title: string;
    description: string;
    iconUrl: string;
    onPress?: () => void;
}

const ManagementCard: React.FC<ManagementCardProps> = ({
    title,
    description,
    iconUrl,
    onPress
}) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image
                source={{ uri: iconUrl }}
                style={styles.icon}
            />
            <View style={styles.titleContainer}>
                {title.includes(' ') ? (
                    // If title has space, split it into multiple lines
                    title.split(' ').map((word, index) => (
                        <Text key={index} style={styles.title}>{word}</Text>
                    ))
                ) : (
                    <Text style={styles.title}>{title}</Text>
                )}
            </View>
            <Text style={styles.description}>{description}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 16,
        flex: 1,
        margin: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        minHeight: 120,
    },
    icon: {
        width: 32,
        height: 32,
        marginBottom: 12,
    },
    titleContainer: {
        marginBottom: 4,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1F2937',
        lineHeight: 22,
    },
    description: {
        fontSize: 14,
        color: '#6B7280',
    },
});

export default ManagementCard;
