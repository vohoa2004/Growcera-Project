import * as React from "react";
import { View, ScrollView } from "react-native";
import ProductHeader from "../components/product/list/ProductHeader";
import SearchBar from "../components/product/list/SearchBar";
import FilterButtons from "../components/product/list/FilterButtons";
import ProductItem from "../components/product/list/ProductItem";
import { Product } from "models/Product";
import { useEffect } from "react";
import { getAll } from "services/product";
import { formatDate } from "utils/formatter";

const ProductList = () => {
    const [activeFilter, setActiveFilter] = React.useState("All Products");
    const [searchQuery, setSearchQuery] = React.useState("");

    // Sample product data
    const [products, setProducts] = React.useState<Product[]>([])

    const handleFilterChange = (filter: string) => {
        setActiveFilter(filter);
    };

    const handleSearch = (text: string) => {
        setSearchQuery(text);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getAll();
                setProducts(response)
            } catch (error) {
                console.error("Lỗi khi lấy danh sách sales:", error)
            }
        }
        fetchProducts()
    }, [])

    return (
        <View className="flex-1 bg-white">
            <ScrollView className="flex-1">
                <View className="p-4">
                    <ProductHeader />

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
                        {products.map((product, index) => (
                            <View key={product.id} className={index > 0 ? "mt-4" : ""}>
                                <ProductItem
                                    name={product.name}
                                    stock={product.quantity}
                                    expiryDate={formatDate(product.expiry_date)}
                                    hasImage={product.hasImage || true}
                                    imageUrl={product.imageUrl}
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
