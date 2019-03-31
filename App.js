/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {RNCamera} from "react-native-camera";
import io from 'socket.io-client/dist/socket.io';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    socket = null;

    componentDidMount() {
        this.socket = io('http://seminarkurs.alexkutschera.de:3001', {
            transports: ['websocket'],
            upgrade: false,
            rejectUnauthorized: false,
        });
        this.socket.on('connect', (data) => {
            console.log('connected')
        });
        this.socket.on('reconnect_error', (error) => {
            console.log(error)
        });
        this.socket.on('item', (data) => {
            if (data.length > 0) {
                this.setState({
                    codeData: data[0]
                })
            }
            console.log(data);
        });
        console.log(this.socket);
    }


    state = {
        code: "",
        codeData: {}
    };

    loadItemData(code) {
        if (code !== this.state.code) {
            console.log(code);
            console.log(this.socket.connected);
            this.setState({
                code: code
            });
            this.socket.emit('item', {ITEM_ID: code})
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <RNCamera
                    style={{
                        width: '100%',
                        height: '90%'
                    }}
                    onBarCodeRead={(data) => this.loadItemData(data.data)}
                />
                <Text>{this.state.codeData.Art_Bez}</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
