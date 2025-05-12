import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { HomeIcon, ChartIcon, WalletIcon, ProfileIcon } from './Icons';

interface BottomNavigationProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

const BottomNavigation = ({ activeTab, onTabChange }: BottomNavigationProps) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.tabItem}
                onPress={() => onTabChange('home')}
                activeOpacity={0.7}
            >
                <View style={[styles.iconContainer, activeTab === 'home' && styles.activeIcon]}>
                    <HomeIcon />
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.tabItem}
                onPress={() => onTabChange('chart')}
                activeOpacity={0.7}
            >
                <View style={styles.iconContainer}>
                    <ChartIcon />
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.tabItem}
                onPress={() => onTabChange('wallet')}
                activeOpacity={0.7}
            >
                <View style={styles.iconContainer}>
                    <WalletIcon />
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.tabItem}
                onPress={() => onTabChange('profile')}
                activeOpacity={0.7}
            >
                <View style={styles.iconContainer}>
                    <ProfileIcon />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#F3F4F6',
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainer: {
        padding: 8,
    },
    activeIcon: {
        // This would typically change the color of the icon
        // Since we're using SVG components directly, we'd need to modify the SVG fill in the component
    },
});

export default BottomNavigation;
