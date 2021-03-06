import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import { Fonts } from '../../constants/fonts';

interface Props {
    style?: TextStyle | TextStyle[];
}
const MediumText: React.FC<Props> = ({ children, style }) => {
    return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
};

export default MediumText;

const styles = StyleSheet.create({
    text: {
        fontFamily: Fonts.medium,
        maxWidth: '85%',
        textAlign: 'left',
    },
});
