import React from 'react';
import { View, Text, Image } from 'react-native';
import { Svg, Path, G, Defs, ClipPath } from 'react-native-svg';

interface ProfileInfoProps {
    logoUrl: string;
    companyName: string;
    rating: number;
}

const ProfileInfo = ({ logoUrl, companyName, rating }: ProfileInfoProps) => {
    return (
        <View className="px-4 py-6">
            <View className="flex-row">
                <Image
                    source={{ uri: logoUrl }}
                    className="w-20 h-20 rounded-full border-4 border-white"
                    style={{
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.1,
                        shadowRadius: 4,
                    }}
                />
                <View className="ml-4 justify-center">
                    <Text className="text-xl font-bold text-gray-800 mb-1">{companyName}</Text>
                    <View className="flex-row items-center">
                        <View className="mr-1">
                            <Svg width={18} height={16} viewBox="0 0 18 16" fill="none">
                                <G clipPath="url(#clip0_142_90)">
                                    <Path
                                        d="M9.90316 0.5625C9.73753 0.21875 9.38753 0 9.00316 0C8.61878 0 8.27191 0.21875 8.10316 0.5625L6.09378 4.69688L1.60628 5.35938C1.23128 5.41562 0.918781 5.67812 0.803156 6.0375C0.687531 6.39687 0.78128 6.79375 1.05003 7.05937L4.30628 10.2812L3.53753 14.8344C3.47503 15.2094 3.63128 15.5906 3.94066 15.8125C4.25003 16.0344 4.65941 16.0625 4.99691 15.8844L9.00628 13.7437L13.0157 15.8844C13.3532 16.0625 13.7625 16.0375 14.0719 15.8125C14.3813 15.5875 14.5375 15.2094 14.475 14.8344L13.7032 10.2812L16.9594 7.05937C17.2282 6.79375 17.325 6.39687 17.2063 6.0375C17.0875 5.67812 16.7782 5.41562 16.4032 5.35938L11.9125 4.69688L9.90316 0.5625Z"
                                        fill="#FBBF24"
                                    />
                                </G>
                                <Defs>
                                    <ClipPath id="clip0_142_90">
                                        <Path d="M0 0H18V16H0V0Z" fill="white" />
                                    </ClipPath>
                                </Defs>
                            </Svg>
                        </View>
                        <Text className="text-gray-600">{rating}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ProfileInfo;
