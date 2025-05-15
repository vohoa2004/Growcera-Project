import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface HeaderSectionProps {
    userName: string;
    storeName: string;
    profileImageUrl: string;
    notificationImageUrl: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
    userName = "Growcera",
    storeName = "Growcera's Store",
    profileImageUrl = "",
    notificationImageUrl = "https://img.icons8.com/material-rounded/24/40C057/appointment-reminders.png"
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
