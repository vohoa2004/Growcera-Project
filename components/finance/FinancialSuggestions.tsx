import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SectionHeader from './SectionHeader';
import { LightbulbIcon } from './Icons';

interface SuggestionItemProps {
    text: string;
}

const SuggestionItem = ({ text }: SuggestionItemProps) => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.iconContainer}>
                <LightbulbIcon />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    );
};

const FinancialSuggestions = () => {
    const suggestions = [
        'Sell more of Product X (↑ profit)',
        'Stock too much of Product Y',
        'Try combo sale for Z',
    ];

    return (
        <View style={styles.container}>
            <SectionHeader title="Financial Suggestions (AI)" onPress={() => { }} />
            <View style={styles.content}>
                {suggestions.map((suggestion, index) => (
                    <SuggestionItem key={index} text={suggestion} />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 16,
        marginBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    content: {
        paddingBottom: 16,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    iconContainer: {
        marginRight: 12,
    },
    textContainer: {},
    text: {
        fontSize: 15,
        color: '#111827',
    },
});

export default FinancialSuggestions;
