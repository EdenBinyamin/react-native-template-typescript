import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import { Fonts } from '../../constants/fonts';

interface Props {
    style?: TextStyle | TextStyle[];
}
const RegularText: React.FC<Props> = ({ children, style }) => {
    return <Text style={{ ...style, ...styles.text }}>{children}</Text>;
};

export default RegularText;

const styles = StyleSheet.create({
    text: {
        fontFamily: Fonts.regular,
        maxWidth: '85%',
    },
});
