import {TabNavigationState} from '@react-navigation/native';
import {TouchableOpacity, ScrollView, StyleSheet, View} from 'react-native';
import AppText from '../components/_common/AppText';
import {MainStackParamList} from './MainStack';
import {getColors} from '../utils/theme/theme';
import {RFValue} from 'react-native-responsive-fontsize';

interface SummonerTabBarProps {
  state: TabNavigationState<MainStackParamList>;
  descriptors: any;
  navigation: any;
  position: any;
}

const SummonerTabBar: React.FC = ({
  state,
  descriptors,
  navigation,
  position,
}: SummonerTabBarProps) => {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled>
        {state?.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flexGrow: 1,
                paddingBottom: 20,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                paddingVertical: RFValue(15),
                paddingHorizontal: RFValue(25),
                borderWidth: isFocused ? 1 : 0,
                borderColor: getColors('blue500'),
                borderBottomWidth: isFocused ? 0 : 1,
                backgroundColor: !isFocused
                  ? getColors('hextechBlack')
                  : getColors('blue700'),
              }}>
              <AppText
                s="s"
                color={isFocused ? getColors('gold200') : getColors('grey150')}
                fFamily={
                  isFocused ? 'BeaufortforLOL-Bold' : 'BeaufortforLOL-Regular'
                }
                style={{textTransform: 'uppercase'}}>
                {label}
              </AppText>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default SummonerTabBar;

const styles = StyleSheet.create({});
