import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class ForgotPassword extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
        flex: 1
    }
})
