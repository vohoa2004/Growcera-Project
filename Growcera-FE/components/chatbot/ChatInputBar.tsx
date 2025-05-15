import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import SvgIcon from './SvgIcon';

interface ChatInputBarProps {
    onSendMessage: (message: string) => void;
    onAttachmentPress?: () => void;
    onVoicePress?: () => void;
}

const ChatInputBar: React.FC<ChatInputBarProps> = ({
    onSendMessage,
    onAttachmentPress,
    onVoicePress
}) => {
    const [message, setMessage] = useState('');

    const handleSend = () => {
        if (message.trim()) {
            onSendMessage(message);
            setMessage('');
        }
    };

    const plusIconSvg = `<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 16H0V0H14V16Z" stroke="#E5E7EB"></path>
    <path d="M8 2.5C8 1.94687 7.55312 1.5 7 1.5C6.44688 1.5 6 1.94687 6 2.5V7H1.5C0.946875 7 0.5 7.44688 0.5 8C0.5 8.55312 0.946875 9 1.5 9H6V13.5C6 14.0531 6.44688 14.5 7 14.5C7.55312 14.5 8 14.0531 8 13.5V9H12.5C13.0531 9 13.5 8.55312 13.5 8C13.5 7.44688 13.0531 7 12.5 7H8V2.5Z" fill="#4B5563"></path>
  </svg>`;

    const micIconSvg = `<svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_9_919)">
      <path d="M6 0C4.34375 0 3 1.34375 3 3V8C3 9.65625 4.34375 11 6 11C7.65625 11 9 9.65625 9 8V3C9 1.34375 7.65625 0 6 0ZM2 6.75C2 6.33437 1.66562 6 1.25 6C0.834375 6 0.5 6.33437 0.5 6.75V8C0.5 10.7844 2.56875 13.0844 5.25 13.45V14.5H3.75C3.33437 14.5 3 14.8344 3 15.25C3 15.6656 3.33437 16 3.75 16H6H8.25C8.66562 16 9 15.6656 9 15.25C9 14.8344 8.66562 14.5 8.25 14.5H6.75V13.45C9.43125 13.0844 11.5 10.7844 11.5 8V6.75C11.5 6.33437 11.1656 6 10.75 6C10.3344 6 10 6.33437 10 6.75V8C10 10.2094 8.20937 12 6 12C3.79063 12 2 10.2094 2 8V6.75Z" fill="#38B000"></path>
    </g>
    <defs>
      <clipPath id="clip0_9_919">
        <path d="M0 0H12V16H0V0Z" fill="white"></path>
      </clipPath>
    </defs>
  </svg>`;

    const sendIconSvg = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_9_922)">
      <path d="M15.5656 0.175119C15.8812 0.393869 16.0469 0.771994 15.9875 1.15012L13.9875 14.1501C13.9406 14.4532 13.7562 14.7189 13.4875 14.8689C13.2187 15.0189 12.8969 15.0376 12.6125 14.9189L8.87499 13.3657L6.73436 15.6814C6.45624 15.9845 6.01874 16.0845 5.63437 15.9345C5.24999 15.7845 4.99999 15.4126 4.99999 15.0001V12.3876C4.99999 12.2626 5.04686 12.1439 5.13124 12.0532L10.3687 6.33762C10.55 6.14074 10.5437 5.83762 10.3562 5.65012C10.1687 5.46262 9.86561 5.45012 9.66874 5.62824L3.31249 11.2751L0.553115 9.89387C0.221865 9.72824 0.00936479 9.39699 -1.02076e-05 9.02824C-0.00938521 8.65949 0.184365 8.31574 0.503115 8.13137L14.5031 0.131369C14.8375 -0.0592555 15.25 -0.0405055 15.5656 0.175119Z" fill="white"></path>
    </g>
    <defs>
      <clipPath id="clip0_9_922">
        <path d="M0 0H16V16H0V0Z" fill="white"></path>
      </clipPath>
    </defs>
  </svg>`;

    return (
        <View className="flex-row items-center px-4 py-2 border-t border-gray-200 bg-white">
            <TouchableOpacity
                onPress={onAttachmentPress}
                className="p-2 mr-2"
            >
                <SvgIcon svgString={plusIconSvg} width={14} height={16} />
            </TouchableOpacity>

            <View className="flex-1 flex-row items-center bg-gray-100 rounded-full px-4 py-2">
                <TextInput
                    className="flex-1 text-gray-800 text-base"
                    placeholder="Type your message..."
                    value={message}
                    onChangeText={setMessage}
                    multiline
                />
                <TouchableOpacity onPress={onVoicePress} className="ml-2">
                    <SvgIcon svgString={micIconSvg} width={12} height={16} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                onPress={handleSend}
                className="p-2 ml-2 bg-blue-500 rounded-full"
                disabled={!message.trim()}
            >
                <SvgIcon svgString={sendIconSvg} width={16} height={16} />
            </TouchableOpacity>
        </View>
    );
};

export default ChatInputBar;
