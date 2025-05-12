import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { BookmarkIcon, StarIcon } from './SVGIcons';

interface SupplierCardProps {
    name: string;
    imageUrl: string;
    rating: number;
    reviewCount: string;
    tags: string[];
    onViewDetails: () => void;
}

const SupplierCard: React.FC<SupplierCardProps> = ({
    name,
    imageUrl,
    rating,
    reviewCount,
    tags,
    onViewDetails
}) => {
    return (
        <View className="bg-white p-4 rounded-lg mb-3 border border-gray-100 shadow-sm">
            <View className="flex-row justify-between items-start">
                <View className="flex-row">
                    <Image
                        source={{ uri: imageUrl }}
                        className="w-12 h-12 rounded-full"
                    />
                    <View className="ml-3">
                        <Text className="text-gray-800 font-semibold text-base">{name}</Text>
                        <View className="flex-row items-center mt-1">
                            <View className="mr-1">
                                <StarIcon />
                            </View>
                            <Text className="text-gray-800 font-medium mr-1">{rating}</Text>
                            <Text className="text-gray-500 text-sm">({reviewCount})</Text>
                        </View>
                    </View>
                </View>
                <View className="p-1">
                    <BookmarkIcon />
                </View>
            </View>

            <View className="flex-row mt-3 mb-3">
                {tags.map((tag, index) => (
                    <View
                        key={index}
                        className={`px-2 py-1 rounded-full mr-2 ${tag === 'Verified'
                                ? 'bg-blue-50'
                                : tag === 'Premium'
                                    ? 'bg-amber-50'
                                    : 'bg-green-50'
                            }`}
                    >
                        <Text
                            className={`text-xs font-medium ${tag === 'Verified'
                                    ? 'text-blue-600'
                                    : tag === 'Premium'
                                        ? 'text-amber-600'
                                        : 'text-green-600'
                                }`}
                        >
                            {tag}
                        </Text>
                    </View>
                ))}
            </View>

            <TouchableOpacity
                onPress={onViewDetails}
                className="bg-green-600 py-2 rounded-lg"
            >
                <Text className="text-white text-center font-medium">View Details</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SupplierCard;
