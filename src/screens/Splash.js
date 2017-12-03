// @flow

import React from 'react';
import { StatusBar, Image } from 'react-native';
import { Container, Grid, Row, Col, Text } from 'native-base';
import { Styles, Images } from 'src/styles';

const Splash = function (): React$Element<Container> {
    return (
        <Container>
            <StatusBar translucent style={Styles.transparentBackground} barStyle="dark-content" />
            <Grid>
                <Row style={Styles.center}>
                    <Col size={1} />
                    <Col size={12}>
                        <Image source={Images.logo} style={[Styles.logo, Styles.center]} resizeMode="contain" />
                        <Text center bigNote style={Styles.marginTop}>Loading Questions...</Text>
                    </Col>
                    <Col size={1} />
                </Row>
            </Grid>
        </Container>
    );
};

export default Splash;
