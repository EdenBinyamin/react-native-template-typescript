/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Pressable, TextStyle } from 'react-native';

interface Props {
    onPress: () => any;
    content: Element;
    style?: TextStyle | TextStyle[];
    disabled?: boolean;
}

const PressButton: React.FC<Props> = (props: Props) => {
    const { onPress, content, style, disabled } = props;
    return (
        <Pressable
            disabled={disabled ?? false}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            android_ripple={{ color: '#eeeeee', borderless: false }}
            style={({ pressed }) => [
                {
                    opacity: pressed || disabled ? 0.7 : 1,
                },
                style,
            ]}
            onPress={onPress}>
            {content}
        </Pressable>
    );
};

export default PressButton;
