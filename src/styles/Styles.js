// @flow

import { StyleSheet, StatusBar, Platform } from 'react-native';
import Colors from 'src/styles/Colors';

export default StyleSheet.create({
    transparentHeaderContainer: {
        marginTop: (Platform.OS === 'ios' ? 44 : 56) + StatusBar.currentHeight,
        backgroundColor: Colors.transparent,
    },
    top: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    centerText: {
        textAlign: 'center',
    },
    rightText: {
        textAlign: 'right',
    },
    bold: {
        fontWeight: 'bold',
    },
    marginTop: {
        marginTop: 30,
    },
    noMargin: {
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
    },
    noPadding: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
    },
    noPaddingTop: {
        paddingTop: 0,
    },
    padder: {
        padding: 30,
    },
    margin: {
        padding: 30,
    },
    fullWidth: {
        alignSelf: 'stretch',
    },
    fill: {
        flex: 1,
    },
    logo: {
        height: 120,
    },
    transparentBackground: {
        backgroundColor: Colors.transparent,
    },
    whiteColor: {
        color: Colors.white,
    },
    blueColor: {
        color: Colors.blue,
    },
    greenColor: {
        color: Colors.green,
    },
    redColor: {
        color: Colors.red,
    },
    icon: {
        fontSize: 30,
    },
    iconContainer: {
        width: 30,
        height: 30,
    },
});
