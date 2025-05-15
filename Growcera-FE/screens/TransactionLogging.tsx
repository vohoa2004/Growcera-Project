import BottomNavigation from 'components/BottomNavigation';
import Header from 'components/transaction/add-transaction/Header';
import ScannedProduct from 'components/transaction/add-transaction/ScannedProduct';
import TransactionForm from 'components/transaction/add-transaction/TransactionForm';
import { navItems } from 'constants/navItems';
import { useRouter } from 'expo-router';
import * as React from 'react';
import { useCallback } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

export const TransactionLogging: React.FC = () => {
    const router = useRouter();
    const handleNavPress = useCallback((itemId: string) => {
        try {
            router.push(`/${itemId}`);
        } catch (error) {
            console.error('Navigation error:', error);
        }
    }, [router]);
    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                style={styles.keyboardAvoidingView}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.container}>
                    <Header />

                    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
                        <View style={styles.contentContainer}>
                            <ScannedProduct
                                productName="Product Name"
                                sku="123456"
                            />
                            <TransactionForm />
                        </View>
                    </ScrollView>

                    <BottomNavigation
                        items={navItems}
                        onItemPress={handleNavPress}
                    />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F9FAFB',
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
    },
    scrollView: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    contentContainer: {
        padding: 16,
    },
});

export default TransactionLogging;
