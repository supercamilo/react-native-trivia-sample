import variable from "./../variables/platform";
import { StyleSheet } from 'react-native';
import { Styles } from 'src/styles';

export default (variables = variable) => {
  const textTheme = {
    '.center': {
        ...StyleSheet.flatten(Styles.centerText),
    },
    '.bold': {
        ...StyleSheet.flatten(Styles.bold),
    },
    fontSize: variables.DefaultFontSize - 1,
    fontFamily: variables.fontFamily,
    color: variables.textColor,
    ".note": {
      color: "#939598",
      fontSize: variables.noteFontSize
    },
    ".bigNote": {
        color: "#939598",
        fontSize: variables.noteFontSize * 1.4
    }
  };

  return textTheme;
};
