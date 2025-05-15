import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface FilterButtonProps {
    label: string;
    isActive?: boolean;
    onPress: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({
    label,
    isActive = false,
    onPress
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            className={twMerge(
                "px-4 py-2 rounded-full mr-2",
                isActive
                    ? "bg-green-600"
                    : "bg-gray-100 border border-gray-200"
            )}
        >
            <Text
                className={twMerge(
                    "text-sm font-medium",
                    isActive ? "text-white" : "text-gray-700"
                )}
            >
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default FilterButton;
