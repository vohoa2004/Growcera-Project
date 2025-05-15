import * as React from "react";
import { View, Image } from "react-native";

interface ExpiryIconProps {
    isLowStock: boolean;
}

const ExpiryIcon = ({ isLowStock }: ExpiryIconProps) => {
    // Use different icons based on stock status
    const iconUrl = isLowStock ? "https://img.icons8.com/ios/50/40C057/new-product.png" : "https://img.icons8.com/ios-glyphs/30/40C057/time-span.png";

    return (
        <View>
            <Image
                source={{ uri: iconUrl }}
                className="w-4 h-4"
                accessibilityLabel="Expiry icon"
            />
        </View>
    );
};

export default ExpiryIcon;
