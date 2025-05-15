import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

interface SvgIconProps {
    svgString: string;
    width?: number;
    height?: number;
    className?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({ svgString, width, height, className }) => {
    // Clean up SVG string by removing dangerouslySetInnerHTML wrapper
    const cleanSvg = svgString
        .replace('dangerouslySetInnerHTML={{__html:', '')
        .replace(/}}$/, '')
        .replace(/^"/, '')
        .replace(/"$/, '')
        .replace(/\\"/g, '"')
        .replace(/\\n/g, '');

    return (
        <View className={className}>
            <SvgXml xml={cleanSvg} width={width} height={height} />
        </View>
    );
};

export default SvgIcon;
