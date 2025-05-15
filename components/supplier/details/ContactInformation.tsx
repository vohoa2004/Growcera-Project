import React from 'react';
import { View, Text } from 'react-native';
import { Svg, Path, G, Defs, ClipPath } from 'react-native-svg';
import ContactItem from './ContactItem';

interface ContactInformationProps {
    phone: string;
    email: string;
    address: string;
}

const ContactInformation = ({ phone, email, address }: ContactInformationProps) => {
    return (
        <View className="px-4 py-4 bg-gray-50">
            <View className="mb-4">
                <Text className="text-lg font-bold text-gray-800">Contact Information</Text>
            </View>
            <View className="space-y-3">
                <ContactItem
                    icon={
                        <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
                            <G clipPath="url(#clip0_142_54)">
                                <Path
                                    d="M5.15312 0.768722C4.9125 0.187472 4.27812 -0.121903 3.67188 0.0437222L0.921875 0.793722C0.378125 0.943722 0 1.43747 0 1.99997C0 9.73122 6.26875 16 14 16C14.5625 16 15.0563 15.6218 15.2063 15.0781L15.9563 12.3281C16.1219 11.7218 15.8125 11.0875 15.2312 10.8468L12.2312 9.59685C11.7219 9.38435 11.1313 9.53122 10.7844 9.95935L9.52188 11.5C7.32188 10.4593 5.54062 8.6781 4.5 6.4781L6.04063 5.21872C6.46875 4.86872 6.61562 4.28122 6.40312 3.77185L5.15312 0.771847V0.768722Z"
                                    fill="#38B000"
                                />
                            </G>
                            <Defs>
                                <ClipPath id="clip0_142_54">
                                    <Path d="M0 0H16V16H0V0Z" fill="white" />
                                </ClipPath>
                            </Defs>
                        </Svg>
                    }
                    text={phone}
                />
                <ContactItem
                    icon={
                        <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
                            <Path d="M16 16H0V0H16V16Z" stroke="#E5E7EB" />
                            <Path
                                d="M1.5 2C0.671875 2 0 2.67188 0 3.5C0 3.97188 0.221875 4.41562 0.6 4.7L7.4 9.8C7.75625 10.0656 8.24375 10.0656 8.6 9.8L15.4 4.7C15.7781 4.41562 16 3.97188 16 3.5C16 2.67188 15.3281 2 14.5 2H1.5ZM0 5.5V12C0 13.1031 0.896875 14 2 14H14C15.1031 14 16 13.1031 16 12V5.5L9.2 10.6C8.4875 11.1344 7.5125 11.1344 6.8 10.6L0 5.5Z"
                                fill="#38B000"
                            />
                        </Svg>
                    }
                    text={email}
                />
                <ContactItem
                    icon={
                        <Svg width={12} height={16} viewBox="0 0 12 16" fill="none">
                            <G clipPath="url(#clip0_142_64)">
                                <Path
                                    d="M6.74062 15.6C8.34375 13.5938 12 8.73125 12 6C12 2.6875 9.3125 0 6 0C2.6875 0 0 2.6875 0 6C0 8.73125 3.65625 13.5938 5.25938 15.6C5.64375 16.0781 6.35625 16.0781 6.74062 15.6ZM6 4C6.53043 4 7.03914 4.21071 7.41421 4.58579C7.78929 4.96086 8 5.46957 8 6C8 6.53043 7.78929 7.03914 7.41421 7.41421C7.03914 7.78929 6.53043 8 6 8C5.46957 8 4.96086 7.78929 4.58579 7.41421C4.21071 7.03914 4 6.53043 4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4Z"
                                    fill="#38B000"
                                />
                            </G>
                            <Defs>
                                <ClipPath id="clip0_142_64">
                                    <Path d="M0 0H12V16H0V0Z" fill="white" />
                                </ClipPath>
                            </Defs>
                        </Svg>
                    }
                    text={address}
                />
            </View>
        </View>
    );
};

export default ContactInformation;
