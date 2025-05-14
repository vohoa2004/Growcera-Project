import React, { useState, useEffect } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import HeaderBar from 'components/supplier/HeaderBar';
import FilterButton from 'components/supplier/FilterButton';
import SupplierCard from 'components/supplier/SupplierCard';
import BottomNavBar from 'components/supplier/BottomNavBar';
import { Supplier } from 'models/Supplier';
import { getAll } from 'services/supplier';

// Filter options
const filterOptions = ['All Suppliers', 'AI Suggestions'];

const AISupplierScreen: React.FC = () => {
    const [suppliers, setSuppliers] = useState<Supplier[]>([]);

    useEffect(() => {
        const fetchSuppliers = async () => {
            try {
                const response = await getAll();
                setSuppliers(response);
            } catch (error) {
                console.error("Lỗi khi lấy danh sách sales:", error);
            }
        };
        fetchSuppliers();
    }, []);

    const [activeFilter, setActiveFilter] = useState('All Metrics');
    const [activeTab, setActiveTab] = useState('home');

    const handleFilterPress = (filter: string) => {
        setActiveFilter(filter);
    };

    const handleTabPress = (tabName: string) => {
        setActiveTab(tabName);
    };

    const handleViewDetails = (supplierId: string | number) => {
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
                                id={supplier.id}
                                name={supplier.name}
                                address={supplier.address}
                                phone={supplier.phone}
                                imageUrl={supplier.imageUrl}
                                rating={supplier.rating}
                                // reviewCount={supplier.reviewCount}
                                // tags={supplier.tags}
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
