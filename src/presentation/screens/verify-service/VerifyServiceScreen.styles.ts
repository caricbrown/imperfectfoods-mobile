import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  innerContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 6,
    justifyContent: 'space-between',
    maxWidth: 340,
    padding: 24,
  },
  title: {
    fontSize: 40,
    fontWeight: '800',
    marginTop: 24,
    textAlign: 'center',
  },
  input: {
    padding: 32,
  }
});
