import React, { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import HeaderBar from 'components/supplier/HeaderBar';
import FilterButton from 'components/supplier/FilterButton';
import SupplierCard from 'components/supplier/SupplierCard';
import BottomNavBar from 'components/supplier/BottomNavBar';

// Sample data for suppliers
const suppliers = [
    {
        id: '1',
        name: 'Green Valley Foods',
        imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4f6a832a9647d13609a9d9a6c8869beb94c8b42e',
        rating: 4.8,
        reviewCount: '2.5k reviews',
        tags: ['Verified', 'Fast Delivery']
    },
    {
        id: '2',
        name: 'Fresh Farm Supply',
        imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b21c3901f08e49037bb625786042e96baa71b699',
        rating: 4.6,
        reviewCount: '1.8k reviews',
        tags: ['Verified', 'Bulk Orders']
    },
    {
        id: '3',
        name: 'Organic Essentials',
        imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b5673096ab35fec6368ac415005b1191c5abee9c',
        rating: 4.9,
        reviewCount: '3.2k reviews',
        tags: ['Premium', 'Fast Delivery']
    }
];

// Filter options
const filterOptions = ['All Metrics', 'Price', 'Fast Delivery'];

const AISupplierScreen: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('All Metrics');
    const [activeTab, setActiveTab] = useState('home');

    const handleFilterPress = (filter: string) => {
        setActiveFilter(filter);
    };

    const handleTabPress = (tabName: string) => {
        setActiveTab(tabName);
    };

    const handleViewDetails = (supplierId: string) => {
        console.log(`View details for supplier ${supplierId}`);
        // Navigation logic would go here
    };

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <HeaderBar
                title="AI Suggested Suppliers"
                onBackPress={() => console.log('Back pressed')}
                onSearchPress={() => console.log('Search pressed')}
                onNotificationPress={() => console.log('Notification pressed')}
            />

            <ScrollView className="flex-1">
                <View className="px-4 py-3">
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        className="mb-4"
                    >
                        {filterOptions.map((filter) => (
                            <FilterButton
                                key={filter}
                                label={filter}
                                isActive={activeFilter === filter}
                                onPress={() => handleFilterPress(filter)}
                            />
                        ))}
                    </ScrollView>

                    <View className="mb-4">
                        {suppliers.map((supplier) => (
                            <SupplierCard
                                key={supplier.id}
                                name={supplier.name}
                                imageUrl={supplier.imageUrl}
                                rating={supplier.rating}
                                reviewCount={supplier.reviewCount}
                                tags={supplier.tags}
                                onViewDetails={() => handleViewDetails(supplier.id)}
                            />
                        ))}
                    </View>
                </View>
            </ScrollView>

            <BottomNavBar
                activeTab={activeTab}
                onTabPress={handleTabPress}
            />
        </SafeAreaView>
    );
};

export default AISupplierScreen;
