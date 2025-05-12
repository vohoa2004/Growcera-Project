import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ActivityItemProps {
    title: string;
    timeAgo: string;
    iconUrl: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({
    title,
    timeAgo,
    iconUrl,
}) => {
    return (
        <View style={styles.activityItem}>
            <View style={styles.contentContainer}>
                <Image
                    source={{ uri: iconUrl }}
                    style={styles.activityIcon}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.activityTitle}>{title}</Text>
                    <Text style={styles.activityTime}>{timeAgo}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    activityItem: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB',
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    activityIcon: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 12,
    },
    textContainer: {
        flex: 1,
    },
    activityTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1F2937',
        marginBottom: 2,
    },
    activityTime: {
        fontSize: 12,
        color: '#6B7280',
    },
});

export default ActivityItem;
