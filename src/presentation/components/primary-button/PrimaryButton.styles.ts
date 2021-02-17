import {Colors} from 'presentation/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.magenta,
    borderRadius: 6,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
