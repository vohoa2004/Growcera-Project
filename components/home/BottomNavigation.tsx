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
            iconUrl: 'https://cdn.builder.io/api/v1/image/assets/176e2b6a03e94e0cbe0c477511c3678d/012cbd553fe487da83cb08acafe8f9bc449f9319?placeholderIfAbsent=true',
            isActive: true,
        },
        {
            id: 'analytics',
            label: 'Analytics',
            iconUrl: 'https://cdn.builder.io/api/v1/image/assets/176e2b6a03e94e0cbe0c477511c3678d/c2c53007025576739256c4e5b5b91a75e4355261?placeholderIfAbsent=true',
        },
        {
            id: 'messages',
            label: 'Messages',
            iconUrl: 'https://cdn.builder.io/api/v1/image/assets/176e2b6a03e94e0cbe0c477511c3678d/1845409c484a658f6a679514b479c14423ed39e8?placeholderIfAbsent=true',
        },
        {
            id: 'settings',
            label: 'Settings',
            iconUrl: 'https://cdn.builder.io/api/v1/image/assets/176e2b6a03e94e0cbe0c477511c3678d/e04c5993a175133055c329d2968d7d257b5e3d27?placeholderIfAbsent=true',
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
