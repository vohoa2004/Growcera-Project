import * as React from "react";
import { View, Image } from "react-native";

interface ExpiryIconProps {
    isLowStock: boolean;
}

const ExpiryIcon = ({ isLowStock }: ExpiryIconProps) => {
    // Use different icons based on stock status
    const iconUrl = isLowStock ? "https://cdn.builder.io/api/v1/image/assets/176e2b6a03e94e0cbe0c477511c3678d/18a168fe772737b601b5aaf64c47af90ed1a3ac6?placeholderIfAbsent=true" : "https://cdn.builder.io/api/v1/image/assets/176e2b6a03e94e0cbe0c477511c3678d/63f00043e4ff1ef6668452912d35c5b40970afbe?placeholderIfAbsent=true";

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
