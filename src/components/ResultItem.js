// @flow

import React from 'react';
import { Dimensions } from 'react-native';
import { ListItem, Left, Body, Icon, Text } from 'native-base';
import { AutoHeightWebView } from 'src/components';
import { Styles, Colors } from 'src/styles';
import type { Result } from 'src/redux/state';

class ResultItem extends React.PureComponent<{ result: Result }> {
    render(): React$Element<ListItem> {
        const { result } = this.props;
        const minHeight = 40;

        let icon;
        if (result.answerIsCorrect) {
            icon = <Icon active name="check-circle-outline" style={[Styles.greenColor, Styles.icon, Styles.center]} />;
        } else {
            icon = <Icon active name="minus-box-outline" style={[Styles.redColor, Styles.icon, Styles.center]} />;
        }

        return (
            <ListItem thumbnail>
                <Left style={[Styles.iconContainer, Styles.top]}>
                    {icon}
                </Left>
                <Body>
                    <AutoHeightWebView
                        source={{ html: `<p style="font-size: 16px; color:${Colors.gray}">${result.question}</p>` }}
                        style={{ width: Dimensions.get('window').width - 130, minHeight }}
                        enableAnimation
                    />
                    {result.userAnswer != null &&
                    <Text note style={Styles.rightText}>your answer: {result.userAnswer.toString()}</Text>
                    }
                </Body>
            </ListItem>
        );
    }
}

export default ResultItem;
