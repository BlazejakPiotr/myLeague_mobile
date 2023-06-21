import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {getColors} from '../../utils/theme/theme';

export default function Spinner({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (
    <ActivityIndicator
      size={size ? size : RFValue(40)}
      color={color ? color : getColors('blue300')}
    />
  );
}
