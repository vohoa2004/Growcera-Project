import * as React from "react";
import { View, ScrollView } from "react-native";
import ProductHeader from "../components/product/list/ProductHeader";
import SearchBar from "../components/product/list/SearchBar";
import FilterButtons from "../components/product/list/FilterButtons";
import ProductItem from "../components/product/list/ProductItem";
import { Product } from "models/Product";
import { useEffect } from "react";
import { getAll, getLowStocks, getNearExpired } from "services/product";
import { formatDate } from "utils/formatter";
import HeaderBar from "components/HeaderBar";
import { useRouter } from "expo-router";

const ProductList = () => {
    const [activeFilter, setActiveFilter] = React.useState("All Products");
    const [searchQuery, setSearchQuery] = React.useState("");
    const [allProducts, setAllProducts] = React.useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = React.useState<Product[]>([]);
    const router = useRouter();

    const handleFilterChange = (filter: string) => {
        setActiveFilter(filter);
    };

    const handleSearch = (text: string) => {
        setSearchQuery(text);
    };

    const handleProductPress = (productId: number) => {
        router.push(`/management/product-details/${productId}`);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let response: Product[] = [];
                if (activeFilter === "All Products") {
                    response = await getAll();
                }
                else if (activeFilter === "Low Stock") {
                    response = await getLowStocks();
                }
                else if (activeFilter === "Expiring Soon") {
                    response = await getNearExpired();
                }
                setAllProducts(response);
            } catch (error) {
                console.error("Lỗi khi lấy danh sách sales:", error)
            }
        }
        fetchProducts()
    }, [activeFilter]);

    // Filter products based on search query
    useEffect(() => {
        if (searchQuery.trim() === "") {
            setFilteredProducts(allProducts);
        } else {
            const filtered = allProducts.filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    }, [searchQuery, allProducts]);

    return (
        <View className="flex-1 bg-white">
            <ScrollView className="flex-1">
                <View className="p-4">
                    <HeaderBar
                        title="Inventory Dashboard"
                        onBackPress={() => router.back()}
                        onSearchPress={() => console.log('Search pressed')}
                        onNotificationPress={() => console.log('Notification pressed')}
                    />

                    <View className="mt-4">
                        <SearchBar value={searchQuery} onChangeText={handleSearch} />
                    </View>

                    <View className="mt-4">
                        <FilterButtons
                            activeFilter={activeFilter}
                            onFilterChange={handleFilterChange}
                        />
                    </View>

                    <View className="mt-4">
                        {filteredProducts.map((product, index) => (
                            <View key={product.id} className={index > 0 ? "mt-4" : ""}>
                                <ProductItem
                                    id={product.id}
                                    name={product.name}
                                    stock={product.quantity}
                                    expiryDate={formatDate(product.expiry_date)}
                                    hasImage={product.hasImage || true}
                                    imageUrl={product.imageUrl}
                                    onPress={handleProductPress}
                                />
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default ProductList;
