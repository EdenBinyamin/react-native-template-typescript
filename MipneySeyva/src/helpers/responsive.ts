import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

export const wp = (percentage: string): number => widthPercentageToDP(percentage);
export const hp = (percentage: string): number => heightPercentageToDP(percentage);
