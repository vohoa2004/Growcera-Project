import ChatHeader from 'components/chatbot/ChatHeader';
import ChatInputBar from 'components/chatbot/ChatInputBar';
import ChatMessage from 'components/chatbot/ChatMessage';
import QuickActionButtons from 'components/chatbot/QuickActionButtons';
import React, { useState, useEffect } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import chatbotCaller from 'utils/chatbotCaller';
import { useRouter, useLocalSearchParams } from 'expo-router';


interface Message {
    id: string;
    text: string;
    isUser: boolean;
}

const ChatInterface: React.FC = () => {
    const router = useRouter();
    const { initialMessage } = useLocalSearchParams<{ initialMessage?: string }>();

    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "Hi, I'm Growcera Assistant. How can I help you today?",
            isUser: false,
        },
    ]);

    const quickActions = [
        "Top selling products?",
        "Financial report?",
        "Today's Revenue?",
    ];

    useEffect(() => {
        // If an initial message is provided, send it automatically
        if (initialMessage) {
            handleSendMessage(initialMessage);
        }
    }, [initialMessage]);

    const handleSendMessage = async (text: string) => {
        const newMessage: Message = {
            id: Date.now().toString(),
            text,
            isUser: true,
        };

        setMessages([...messages, newMessage]);

        try {
            const response = await chatbotCaller.post('/chat', { message: text });
            const assistantResponse: Message = {
                id: (Date.now() + 1).toString(),
                text: response.data.response,
                isUser: false,
            };
            setMessages(prev => [...prev, assistantResponse]);
        } catch (error) {
            console.error('Error sending message to chatbot:', error);
        }
    };

    const handleQuickAction = (action: string) => {
        handleSendMessage(action);
    };

    const handleBackPress = () => {
        router.back()
    };

    const handleMenuPress = () => {
        console.log('Menu button pressed');
        // Implement menu logic here
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="flex-1 bg-white"
        >
            <ChatHeader
                onBackPress={handleBackPress}
                onMenuPress={handleMenuPress}
            />

            <ScrollView className="flex-1">
                {messages.map(message => (
                    <ChatMessage
                        key={message.id}
                        message={message.text}
                        isUser={message.isUser}
                    />
                ))}
            </ScrollView>

            <QuickActionButtons
                actions={quickActions}
                onActionPress={handleQuickAction}
            />

            <ChatInputBar onSendMessage={handleSendMessage} />
        </KeyboardAvoidingView>
    );
};

export default ChatInterface;
