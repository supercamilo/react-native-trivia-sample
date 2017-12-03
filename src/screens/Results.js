// @flow

import React from 'react';
import { Container, Header, Content, Footer, H1, Text, Button, Icon, Body } from 'native-base';
import { List, ResultItem } from 'src/components';
import { Styles } from 'src/styles';
import { connect } from 'react-redux';
import * as actions from 'src/redux/actions';
import * as selectors from 'src/redux/selectors';
import type { RootState, Result } from 'src/redux/state';

const mapStateToProps = (state: RootState) => {
    const results = selectors.getResults(state);
    const correctCount = results.filter((r) => r.answerIsCorrect).length;

    return {
        results,
        correctCount,
        questionCount: state.questions.items.length,
    };
};


class ResultsView extends React.Component<{ results: Array<Result>, correctCount: number, questionCount: number, dispatch: () => any }> {
    restartQuiz = () => {
        const { dispatch } = this.props;
        dispatch(actions.Answers.reset());
    };

    startNewQuiz = () => {
        const { dispatch } = this.props;
        dispatch(actions.Questions.reset());
    };

    render(): React$Element<Container> {
        const { results, correctCount, questionCount } = this.props;

        return (
            <Container>
                <Header padder>
                    <H1 center bold>
                        You scored
                        {'\n'}
                        {correctCount.toString()} / {questionCount.toString()}
                    </H1>
                </Header>
                <Content padder style={Styles.noPaddingTop}>
                    <List
                        list={results}
                        renderItem={(item) =>
                            <ResultItem result={item.item} />
                        }
                    />
                </Content>
                <Footer>
                    <Body>
                        <Button
                            bordered
                            large
                            info
                            full
                            style={Styles.noPadding}
                            onPress={() => this.restartQuiz()}
                        >
                            <Text uppercase>REPEAT</Text>
                            <Icon active name="repeat" style={[Styles.blueColor, Styles.icon, Styles.noMargin]} />
                        </Button>
                        <Button
                            bordered
                            large
                            info
                            full
                            style={Styles.noPadding}
                            onPress={() => this.startNewQuiz()}
                        >
                            <Text uppercase>NEW TRIVIA</Text>
                            <Icon active name="play-circle-outline" style={[Styles.blueColor, Styles.icon, Styles.noMargin]} />
                        </Button>
                    </Body>
                </Footer>
            </Container>
        );
    }
}

export default connect(mapStateToProps)(ResultsView);
