import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {getColors} from '../../utils/theme/theme';

interface IButton extends TouchableOpacityProps {
  children?: React.ReactNode;
  color?: string;
  padding?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  paddingTop?: number;
  paddingBottom?: number;
  width?: ViewStyle['width'];
  height?: ViewStyle['height'];
  flex?: ViewStyle['flex'];
  radius?: number;
}

const AppButton = (props: IButton, {onPress}: {onPress: () => void}) => {
  const buttonStyle = StyleSheet.flatten([
    props.color && {backgroundColor: props.color},
    props.width && {width: props.width},
    props.height && {height: props.height},
    props.radius ? {radius: props.radius} : {borderRadius: 5},
    props.padding && {padding: props.padding},
    props.paddingVertical && {paddingVertical: props.paddingVertical},
    {
      display: 'flex',
      marginTop: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },
  ]) as ViewStyle;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle} {...props}>
      {props.children}
    </TouchableOpacity>
  );
};

export default AppButton;
