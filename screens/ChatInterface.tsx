import ChatHeader from 'components/chatbot/ChatHeader';
import ChatInputBar from 'components/chatbot/ChatInputBar';
import ChatMessage from 'components/chatbot/ChatMessage';
import QuickActionButtons from 'components/chatbot/QuickActionButtons';
import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';


interface Message {
    id: string;
    text: string;
    isUser: boolean;
}

const ChatInterface: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "Hi! I'm your store assistant. How can I help you today?",
            isUser: false,
        },
        {
            id: '2',
            text: "I need help with inventory management",
            isUser: true,
        },
    ]);

    const quickActions = [
        "What to restock?",
        "Finance advice?",
        "Sales analysis"
    ];

    const handleSendMessage = (text: string) => {
        const newMessage: Message = {
            id: Date.now().toString(),
            text,
            isUser: true,
        };

        setMessages([...messages, newMessage]);

        // Simulate assistant response after a short delay
        setTimeout(() => {
            const assistantResponse: Message = {
                id: (Date.now() + 1).toString(),
                text: "I'll help you with inventory management. What specific aspect would you like assistance with?",
                isUser: false,
            };
            setMessages(prev => [...prev, assistantResponse]);
        }, 1000);
    };

    const handleQuickAction = (action: string) => {
        handleSendMessage(action);
    };

    const handleBackPress = () => {
        console.log('Back button pressed');
        // Implement navigation logic here
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
