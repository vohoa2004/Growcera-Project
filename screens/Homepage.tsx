import ActivitySection from 'components/home/ActivitySection';
import HeaderSection from 'components/home/HeaderSetion';
import ManagementSection from 'components/home/ManagementSection';
import OverviewSection from 'components/home/OverviewSection';
import BottomNavigation from 'components/home/BottomNavigation';
import React, { useCallback } from 'react';
import { View, ScrollView, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';

// Import components

const Homepage: React.FC = () => {
    const router = useRouter();

    const handleCardPress = useCallback((cardType: string) => {
        try {
            if (cardType === 'messages') {
                router.push(`/${cardType.toLowerCase()}`);
            }
            else {
                router.push(`/management/${cardType.toLowerCase()}`);
            }
        } catch (error) {
            console.error('Navigation error:', error);
        }
    }, [router]);

    // Handler for navigation item press
    const handleNavPress = useCallback((itemId: string) => {
        try {
            router.push(`/${itemId}`);
        } catch (error) {
            console.error('Navigation error:', error);
        }
    }, [router]);

    // Navigation items
    const navItems = [
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
    ];

    // Recent activities data
    const activities = [
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
    ];

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
            <View style={styles.container}>
                <HeaderSection
                    userName="John"
                    storeName="John's Store"
                    profileImageUrl="https://cdn.builder.io/api/v1/image/assets/176e2b6a03e94e0cbe0c477511c3678d/5cf9d3492ab7e9b35fe7d1a9526639dd291a3977?placeholderIfAbsent=true"
                    notificationImageUrl="https://cdn.builder.io/api/v1/image/assets/176e2b6a03e94e0cbe0c477511c3678d/dc53074dea9882b80ffbe2628c5bdf25d93cef97?placeholderIfAbsent=true"
                />
                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                    <View style={styles.content}>
                        <OverviewSection onPress={() => router.push('/management/inventory')} />
                        <ManagementSection onCardPress={handleCardPress} />
                        <ActivitySection activities={activities} />
                        <View style={styles.bottomSpacer} />
                    </View>
                </ScrollView>
                <BottomNavigation
                    items={navItems}
                    onItemPress={handleNavPress}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F9FAFB',
    },
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
    },
    scrollView: {
        flex: 1,
    },
    content: {
        paddingVertical: 8,
    },
    bottomSpacer: {
        height: 20, // Extra space at the bottom of the scroll view
    },
});

export default Homepage;
