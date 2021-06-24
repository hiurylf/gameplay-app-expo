import { StyleSheet } from 'react-native';
import theme from 'global/styles/theme';

const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 8,
  },
  content: {
    width: 104,
    height: 120,
    alignItems: 'center',
    borderRadius: 8,
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  checked: {
    position: 'absolute',
    top: 7,
    right: 7,
    width: 11,
    height: 11,
    backgroundColor: theme.colors.secondary100,
    borderColor: theme.colors.secondary50,
    borderWidth: 2,
    borderRadius: 3,
  },
  check: {
    position: 'absolute',
    top: 7,
    right: 7,
    width: 11,
    height: 11,
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
  },
  title: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,
    fontSize: 15,
  },
});

export default styles;
