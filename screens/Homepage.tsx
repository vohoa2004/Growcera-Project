import ActivitySection from 'components/home/ActivitySection';
import HeaderSection from 'components/home/HeaderSetion';
import ManagementSection from 'components/home/ManagementSection';
import OverviewSection from 'components/home/OverviewSection';
import BottomNavigation from 'components/BottomNavigation';
import React, { useCallback } from 'react';
import { View, ScrollView, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { navItems } from 'constants/navItems';
import { activities } from 'constants/activities';

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

    // Recent activities data

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
            <View style={styles.container}>
                <HeaderSection
                    userName="Growcera"
                    storeName="Growcera's Store"
                    profileImageUrl=""
                    notificationImageUrl="https://img.icons8.com/material-rounded/24/40C057/appointment-reminders.png"
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
