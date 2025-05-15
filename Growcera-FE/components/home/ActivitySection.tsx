import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ActivityItem from './ActivityItem';
import { activities } from 'constants/activities';

interface ActivitySectionProps {
    activities?: Array<{
        id: string;
        title: string;
        timeAgo: string;
        iconUrl: string;
    }>;
}

const ActivitySection: React.FC<ActivitySectionProps> = ({
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
