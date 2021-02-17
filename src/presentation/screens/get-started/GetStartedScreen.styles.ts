import { Colors } from 'presentation/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  box: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 6,
    maxWidth: 340,
    padding: 24,
  },
  text1: {
    color: Colors.teal,
    fontSize: 40,
    fontWeight: '800',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  text2: {
    color: Colors.darkTeal,
    fontSize: 30,
    fontWeight: '800',
    marginTop: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
