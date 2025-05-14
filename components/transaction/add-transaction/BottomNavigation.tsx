import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { HomeIcon, AnalyticsIcon, InventoryIcon, SettingsIcon } from './Icons';

interface NavItemProps {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
    onPress: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active = false, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.navItem}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <View style={styles.iconContainer}>
                {icon}
            </View>
            <View style={styles.labelContainer}>
                <Text style={[
                    styles.label,
                    active && styles.activeLabel
                ]}>
                    {label}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export const BottomNavigation: React.FC = () => {
    const handleNavPress = (screen: string) => {
        console.log(`Navigate to ${screen}`);
    };

    return (
        <View style={styles.container}>
            <View style={styles.navContainer}>
                <NavItem
                    icon={<HomeIcon active={true} />}
                    label="Home"
                    active={true}
                    onPress={() => handleNavPress('Home')}
                />
                <NavItem
                    icon={<AnalyticsIcon />}
                    label="Analytics"
                    onPress={() => handleNavPress('Analytics')}
                />
                <NavItem
                    icon={<InventoryIcon />}
                    label="Inventory"
                    onPress={() => handleNavPress('Inventory')}
                />
                <NavItem
                    icon={<SettingsIcon />}
                    label="Settings"
                    onPress={() => handleNavPress('Settings')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
        backgroundColor: 'white',
    },
    navContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 8,
    },
    navItem: {
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    iconContainer: {
        marginBottom: 4,
        alignItems: 'center',
        justifyContent: 'center',
        height: 24,
    },
    labelContainer: {},
    label: {
        fontSize: 12,
        color: '#9CA3AF',
        textAlign: 'center',
    },
    activeLabel: {
        color: '#38B000',
        fontWeight: '500',
    },
});

export default BottomNavigation;
