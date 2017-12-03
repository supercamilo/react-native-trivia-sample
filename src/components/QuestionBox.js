// @flow

import React from 'react';
import { Dimensions } from 'react-native';
import { Card, CardItem } from 'native-base';
import { AutoHeightWebView } from 'src/components';
import { Styles, Colors } from 'src/styles';
import type { Question } from 'src/redux/state';

class QuestionBox extends React.PureComponent<{ question: Question }> {
    render(): React$Element<Card> {
        const { question } = this.props;
        const minHeight = 100;

        return (
            <Card style={Styles.center}>
                <CardItem>
                    <AutoHeightWebView
                        source={{ html: `<p style="font-size: 26px; color:${Colors.gray}">${question.question}</p>` }}
                        style={{ width: Dimensions.get('window').width - 130, minHeight }}
                        enableAnimation
                    />
                </CardItem>
            </Card>
        );
    }
}

export default QuestionBox;
