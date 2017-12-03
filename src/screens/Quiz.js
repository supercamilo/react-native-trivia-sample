// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Container, Header, Content, Footer, H1, Text, Button, Body, Icon } from 'native-base';
import { QuestionBox } from 'src/components';
import { Styles } from 'src/styles';
import * as actions from 'src/redux/actions';
import type { RootState, Question } from 'src/redux/state';

const mapStateToProps = (state: RootState, props) => {
    const idx = props.navigation.state.params.questionId;

    return {
        question: state.questions.items[idx],
        questionCount: state.questions.items.length,
    };
};

class QuizView extends React.Component<{ question: Question, questionCount: number, dispatch: () => any }> {
    submitAnswer = (answer: boolean) => {
        const { question, questionCount, dispatch } = this.props;
        dispatch(actions.Answers.submit(question.id, answer, questionCount));
    };

    render(): React$Element<Container> {
        const { question, questionCount } = this.props;

        return (
            <Container>
                <Header padder>
                    <H1 center bold>{question.category}</H1>
                </Header>
                <Content padder contentContainerStyle={Styles.center}>
                    <QuestionBox question={question} questionCount={questionCount} />
                    <Text center bigNote style={Styles.marginTop}>{question.id + 1} of {questionCount}</Text>
                </Content>
                <Footer>
                    <Body>
                        {/* TODO: disable buttons or display the loading screen while Question box populates with AutoHeightWebView */}
                        <Button
                            bordered
                            full
                            large
                            success
                            style={Styles.noPadding}
                            onPress={() => this.submitAnswer(true)}
                        >
                            <Text uppercase>True</Text>
                            <Icon active name="check-circle-outline" style={[Styles.greenColor, Styles.icon, Styles.noMargin]} />
                        </Button>
                        <Button
                            bordered
                            full
                            large
                            danger
                            style={Styles.noPadding}
                            onPress={() => this.submitAnswer(false)}
                        >
                            <Text uppercase>False</Text>
                            <Icon active name="minus-box-outline" style={[Styles.redColor, Styles.icon, Styles.noMargin]} />
                        </Button>
                    </Body>
                </Footer>
            </Container>
        );
    }
}

export default connect(mapStateToProps)(QuizView);
