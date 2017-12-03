// @flow

import React from 'react';
import { Container, Header, Footer, Grid, Row, H1, Text, Button, Body, Icon } from 'native-base';
import { Styles } from 'src/styles';
import { Routes, navigateTo } from 'src/navigation';
import { connect } from 'react-redux';
import type { RootState } from 'src/redux/state';

const mapStateToProps = (state: RootState) => {
    return {
        questionCount: state.questions.items.length,
    };
};

class HomeView extends React.Component<{ questionCount: number, navigation: Object }> {
    startQuiz = () => {
        const { navigation } = this.props;
        navigateTo(navigation, Routes.Quiz, { questionId: 0 });
    };

    render(): React$Element<Container> {
        const { questionCount } = this.props;

        const introMessage = questionCount > 0 ? `You will be presented with ${questionCount} True or False questions.`
            : 'Oops!, there are no Questions at the moment';

        return (
            <Container>
                <Header padder>
                    <H1 center bold>Welcome to the Trivia Challenge!</H1>
                </Header>
                <Grid style={Styles.padder}>
                    <Row style={Styles.center}>
                        <Text center>{introMessage}</Text>
                    </Row>
                    {questionCount > 0 &&
                    <Row style={Styles.center}>
                        <Text center>Can you score 100%?</Text>
                    </Row>
                    }
                </Grid>
                <Footer>
                    <Body>
                        <Button
                            bordered
                            large
                            info
                            full
                            style={Styles.noPadding}
                            disabled={questionCount < 1}
                            onPress={() => this.startQuiz()}
                        >
                            <Text uppercase>Begin</Text>
                            <Icon active name="play-circle-outline" style={[Styles.icon, Styles.noMargin]} />
                        </Button>
                    </Body>
                </Footer>
            </Container>
        );
    }
}

export default connect(mapStateToProps)(HomeView);
