import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ActivityItem from './ActivityItem';

interface ActivitySectionProps {
    activities?: Array<{
        id: string;
        title: string;
        timeAgo: string;
        iconUrl: string;
    }>;
}

const ActivitySection: React.FC<ActivitySectionProps> = ({
    activities = [
        {
            id: '1',
            title: 'New Order #2458',
            timeAgo: '2 minutes ago',
            iconUrl: 'https://cdn.builder.io/api/v1/image/assets/176e2b6a03e94e0cbe0c477511c3678d/cd7113eec7800e64887247a0f6aacf0247e429ac?placeholderIfAbsent=true',
        },
        {
            id: '2',
            title: 'Inventory Update',
            timeAgo: '15 minutes ago',
            iconUrl: 'https://cdn.builder.io/api/v1/image/assets/176e2b6a03e94e0cbe0c477511c3678d/8b6172ebcea61aed47c9599b01b3a5da487c25b2?placeholderIfAbsent=true',
        },
    ]
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Recent Activities</Text>
            <View style={styles.activitiesContainer}>
                {activities.map((activity) => (
                    <ActivityItem
                        key={activity.id}
                        title={activity.title}
                        timeAgo={activity.timeAgo}
                        iconUrl={activity.iconUrl}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1F2937',
        marginBottom: 12,
    },
    activitiesContainer: {
        marginTop: 4,
    },
});

export default ActivitySection;
