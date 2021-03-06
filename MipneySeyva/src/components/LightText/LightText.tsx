import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import { Fonts } from '../../constants/fonts';

interface Props {
    style?: TextStyle | TextStyle[];
}
const LightText: React.FC<Props> = ({ children, style }) => {
    return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
};

export default LightText;

const styles = StyleSheet.create({
    text: {
        fontFamily: Fonts.light,
        maxWidth: '85%',
        textAlign: 'left',
    },
});
