import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface NavItem {
    id: string;
    label: string;
    iconUrl: string;
    isActive?: boolean;
}

interface BottomNavigationProps {
    items: NavItem[];
    onItemPress?: (itemId: string) => void;
}

const NavButton: React.FC<{
    label: string;
    iconUrl: string;
    isActive?: boolean;
    onPress?: () => void;
}> = ({ label, iconUrl, isActive = false, onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.navButton, isActive && styles.activeNavButton]}
            onPress={onPress}
        >
            <View style={styles.iconContainer}>
                <Image
                    source={{ uri: iconUrl }}
                    style={styles.navIcon}
                />
            </View>
            <Text style={[styles.navLabel, isActive && styles.activeNavLabel]}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

const BottomNavigation: React.FC<BottomNavigationProps> = ({
    items = [
        {
            id: 'home',
            label: 'Home',
            iconUrl: 'https://img.icons8.com/ios-filled/50/40C057/home.png',
            isActive: true,
        },
        {
            id: 'analytics',
            label: 'Analytics',
            iconUrl: 'https://img.icons8.com/ios/50/40C057/combo-chart--v1.png',
        },
        {
            id: 'messages',
            label: 'Messages',
            iconUrl: 'https://img.icons8.com/ios-filled/50/40C057/messages-mac.png',
        },
        {
            id: 'settings',
            label: 'Settings',
            iconUrl: 'https://img.icons8.com/ios-filled/50/40C057/settings.png',
        },
    ],
    onItemPress
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.navContainer}>
                {items.map((item) => (
                    <NavButton
                        key={item.id}
                        label={item.label}
                        iconUrl={item.iconUrl}
                        isActive={item.isActive}
                        onPress={() => onItemPress && onItemPress(item.id)}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        paddingTop: 12,
        paddingBottom: 24, // Extra padding for bottom safe area
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
    },
    navContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    navButton: {
        alignItems: 'center',
        paddingHorizontal: 12,
    },
    activeNavButton: {
        // Active state styling
    },
    iconContainer: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4,
    },
    navIcon: {
        width: 20,
        height: 20,
    },
    navLabel: {
        fontSize: 12,
        color: '#6B7280',
    },
    activeNavLabel: {
        color: '#4F46E5',
        fontWeight: '500',
    },
});

export default BottomNavigation;
