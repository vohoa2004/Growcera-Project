import React from 'react';
import { View, StyleSheet } from 'react-native';
import ManagementCard from './ManagmentCard';

interface ManagementSectionProps {
    onCardPress?: (cardType: string) => void;
}

const ManagementSection: React.FC<ManagementSectionProps> = ({ onCardPress }) => {
    const managementCards = [
        {
            id: 'inventory',
            title: 'Product Management',
            description: 'Manage inventory',
            iconUrl: 'https://cdn.builder.io/api/v1/image/assets/176e2b6a03e94e0cbe0c477511c3678d/e35eafc4f6bd1bcafded76d2c063ab943852ce41?placeholderIfAbsent=true',
        },
        {
            id: 'finance',
            title: 'Financial',
            description: 'Track finances',
            iconUrl: 'https://cdn.builder.io/api/v1/image/assets/176e2b6a03e94e0cbe0c477511c3678d/1394d62c685746ac319a889e29e819e9250ed994?placeholderIfAbsent=true',
        },
        {
            id: 'supplier',
            title: 'Supply Chain',
            description: 'Manage suppliers',
            iconUrl: 'https://cdn.builder.io/api/v1/image/assets/176e2b6a03e94e0cbe0c477511c3678d/d3a0d557d3c08ee7cafb52a9f8e83e0ccd4efede?placeholderIfAbsent=true',
        },
        {
            id: 'messages',
            title: 'Ask AI',
            description: 'Get assistance',
            iconUrl: 'https://cdn.builder.io/api/v1/image/assets/176e2b6a03e94e0cbe0c477511c3678d/78ce2521b2d8c5ee30d35f3330363da3c1f80d4a?placeholderIfAbsent=true',
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <ManagementCard
                    title={managementCards[0].title}
                    description={managementCards[0].description}
                    iconUrl={managementCards[0].iconUrl}
                    onPress={() => onCardPress && onCardPress(managementCards[0].id)}
                />
                <ManagementCard
                    title={managementCards[1].title}
                    description={managementCards[1].description}
                    iconUrl={managementCards[1].iconUrl}
                    onPress={() => onCardPress && onCardPress(managementCards[1].id)}
                />
            </View>
            <View style={styles.row}>
                <ManagementCard
                    title={managementCards[2].title}
                    description={managementCards[2].description}
                    iconUrl={managementCards[2].iconUrl}
                    onPress={() => onCardPress && onCardPress(managementCards[2].id)}
                />
                <ManagementCard
                    title={managementCards[3].title}
                    description={managementCards[3].description}
                    iconUrl={managementCards[3].iconUrl}
                    onPress={() => onCardPress && onCardPress(managementCards[3].id)}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 8,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
});

export default ManagementSection;
