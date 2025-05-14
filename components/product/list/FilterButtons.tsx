import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface FilterButtonsProps {
    activeFilter: string;
    onFilterChange: (filter: string) => void;
}

const FilterButtons = ({ activeFilter, onFilterChange }: FilterButtonsProps) => {
    const filters = ["All Products", "Low Stock", "Expiring Soon"];

    return (
        <View className="flex-row space-x-2">
            {filters.map((filter) => (
                <TouchableOpacity
                    key={filter}
                    onPress={() => onFilterChange(filter)}
                    className={`px-4 py-2 rounded-lg ${activeFilter === filter
                            ? "bg-blue-500"
                            : "bg-gray-200"
                        }`}
                >
                    <Text
                        className={`${activeFilter === filter ? "text-white" : "text-gray-700"
                            } font-medium`}
                    >
                        {filter}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default FilterButtons;
