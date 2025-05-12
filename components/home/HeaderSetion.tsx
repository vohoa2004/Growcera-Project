import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface HeaderSectionProps {
    userName: string;
    storeName: string;
    profileImageUrl: string;
    notificationImageUrl: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
    userName = "John",
    storeName = "John's Store",
    profileImageUrl = "https://cdn.builder.io/api/v1/image/assets/176e2b6a03e94e0cbe0c477511c3678d/5cf9d3492ab7e9b35fe7d1a9526639dd291a3977?placeholderIfAbsent=true",
    notificationImageUrl = "https://cdn.builder.io/api/v1/image/assets/176e2b6a03e94e0cbe0c477511c3678d/dc53074dea9882b80ffbe2628c5bdf25d93cef97?placeholderIfAbsent=true"
}) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.userInfoContainer}>
                <Image
                    source={{ uri: profileImageUrl }}
                    style={styles.profileImage}
                />
                <View style={styles.welcomeTextContainer}>
                    <Text style={styles.welcomeText}>Welcome back</Text>
                    <Text style={styles.storeNameText}>{storeName}</Text>
                </View>
            </View>
            <Image
                source={{ uri: notificationImageUrl }}
                style={styles.notificationIcon}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#ffffff',
    },
    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
    },
    welcomeTextContainer: {
        justifyContent: 'center',
    },
    welcomeText: {
        fontSize: 14,
        color: '#6B7280',
        marginBottom: 2,
    },
    storeNameText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1F2937',
    },
    notificationIcon: {
        width: 24,
        height: 24,
    },
});

export default HeaderSection;
