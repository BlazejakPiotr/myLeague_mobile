import {StyleSheet, View} from 'react-native';
import AppButton from '../../components/_common/AppButton';
import AppText from '../../components/_common/AppText';
import {getColors} from '../../utils/theme/theme';

const HomeScreen: React.FC = () => {
  return <View style={styles.container}></View>;
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
