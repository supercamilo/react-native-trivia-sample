import variable from "./../variables/platform";
import { StyleSheet } from 'react-native';
import { Styles } from 'src/styles';

export default (variables = variable) => {
  const h1Theme = {
    '.center': {
        ...StyleSheet.flatten(Styles.centerText),
    },
    '.bold': {
        ...StyleSheet.flatten(Styles.bold),
    },
    color: variables.btnInfoBg,
    fontSize: variables.fontSizeH1,
    lineHeight: variables.lineHeightH1,
  };

  return h1Theme;
};
