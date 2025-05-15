import React from 'react';
import { View, StyleSheet } from 'react-native';
import ManagementCard from './ManagmentCard';

interface ManagementSectionProps {
    onCardPress?: (cardType: string) => void;
}

const ManagementSection: React.FC<ManagementSectionProps> = ({ onCardPress }) => {
    const managementCards = [
        {
            id: 'product',
            title: 'Product Management',
            description: 'Manage inventory',
            iconUrl: 'https://img.icons8.com/material-rounded/24/40C057/cardboard-box.png',
        },
        {
            id: 'finance',
            title: 'Financial',
            description: 'Track finances',
            iconUrl: 'https://img.icons8.com/material-sharp/24/40C057/wallet.png',
        },
        {
            id: 'supplier',
            title: 'Supply Chain',
            description: 'Manage suppliers',
            iconUrl: 'https://img.icons8.com/material/24/40C057/van--v1.png',
        },
        {
            id: 'messages',
            title: 'Ask AI',
            description: 'Get assistance',
            iconUrl: 'https://img.icons8.com/ios-glyphs/30/40C057/message-bot.png',
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
