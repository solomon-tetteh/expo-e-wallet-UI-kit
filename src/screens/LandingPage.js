import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const LandingPage = () => {
    return (
        <View style={styles.container}>
            <Text>LandingPage Screen</Text>
        </View>
    ) 
}

export default LandingPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})
