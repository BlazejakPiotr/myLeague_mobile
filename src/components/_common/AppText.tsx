import React from 'react';
import {Text as RNText, TextProps} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {getColors} from '../../utils/theme/theme';

export type FontFamily =
  | 'BeaufortforLOL-Bold'
  | 'BeaufortforLOL-BoldItalic'
  | 'BeaufortforLOL-Heavy'
  | 'BeaufortforLOL-HeavyItalic'
  | 'BeaufortforLOL-Italic'
  | 'BeaufortforLOL-Light'
  | 'BeaufortforLOL-LightItalic'
  | 'BeaufortforLOL-Medium'
  | 'BeaufortforLOL-MediumItalic'
  | 'BeaufortforLOL-Regular'
  | 'Spiegel_TT_Bold_Italic'
  | 'Spiegel_TT_Bold'
  | 'Spiegel_TT_Regular_Italic'
  | 'Spiegel_TT_Regular'
  | 'Spiegel_TT_SemiBold_Italic'
  | 'Spiegel_TT_SemiBold';

interface AppTextI extends TextProps {
  s?: 'H1' | 'H2' | 'H3' | 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs' | 'xxs';
  color?: string;
  fFamily?: FontFamily;
  align?: 'center' | 'left' | 'right' | 'justify';

  children?: React.ReactNode;
}

function AppText({
  align = 'center',
  s = 'm',
  color = getColors('gold100'),
  fFamily,
  ...props
}: AppTextI) {
  const textSize = {
    H1: RFValue(35),
    H2: RFValue(30),
    H3: RFValue(25),
    xxl: RFValue(22),
    xl: RFValue(20),
    l: RFValue(18),
    m: RFValue(16),
    s: RFValue(13),
    xs: RFValue(10),
    xxs: RFValue(8),
  };

  return (
    <RNText
      {...props}
      allowFontScaling={false}
      style={{
        fontSize: textSize[s],
        textAlign: align,
        fontFamily: fFamily || 'BeaufortforLOL-Regular',
        color,
        // @ts-ignore
        ...props.style,
      }}>
      {props.children}
    </RNText>
  );
}

export default AppText;
