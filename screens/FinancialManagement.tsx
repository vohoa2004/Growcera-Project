import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import Header from 'components/finance/Header';
import TransactionRecords from 'components/finance/TransactionRecords';
import BuyerDebtTracking from 'components/finance/BuyerDebtTracking';
import CashFlowSummary from 'components/finance/CashFlowSummary';
import ExportReport from 'components/finance/ExportReport';
import FinancialSuggestions from 'components/finance/FinancialSuggestions';
// import OverspendingAlerts from 'components/finance/OverspendingAlerts';
import TransactionClassification from 'components/finance/TransactionClassification';
import BottomNavigation from 'components/finance/BottomNavigation';
import HeaderBar from 'components/HeaderBar';
import { useRouter } from 'expo-router';

const FinanceManagement = () => {
    const [activeTab, setActiveTab] = useState('home');
    const router = useRouter();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <HeaderBar
                    title="Financial Management"
                    onBackPress={() => router.back()}
                    onSearchPress={() => console.log('Search pressed')}
                    onNotificationPress={() => console.log('Notification pressed')}
                />
                <ScrollView style={styles.scrollView}>
                    <View style={styles.sections}>
                        <TransactionRecords />
                        <BuyerDebtTracking />
                        {/* <TransactionClassification /> */}
                        <CashFlowSummary />
                        <FinancialSuggestions />
                        {/* <OverspendingAlerts /> */}
                        <ExportReport />
                    </View>
                </ScrollView>
            </View>
            <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
    },
    content: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    sections: {
        paddingBottom: 16,
    },
});

export default FinanceManagement;
