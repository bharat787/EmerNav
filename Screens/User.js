import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const User = props => {

    return (
        <View>
            <TouchableOpacity
            style={styles.emergency}
            onPress={() => props.nav.navigate('Emergency')}>
                <Text style={styles.font}>EMERGENCY SERVICES</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.details}
            onPress={() => props.nav.navigate('UserDetails')}>
                <Text style={styles.font}>USER DETAILS</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Colors.LightBlue,
        justifyContent: 'center',
        width: "100%"
    },

    emergency: {
        flex: 0,
        height: 200,
        width: 300,
        borderRadius: 20,
        margin: 20,
        padding: 10,
        backgroundColor: 'red',
        justifyContent: "center",
        alignItems: 'center',
        alignSelf: 'center'
    },

    details : {
        flex: 0,
        height: 200,
        width: 300,
        borderRadius: 20,
        margin: 20,
        padding: 10,
        backgroundColor: "#0097A7",
        justifyContent: "center",
        alignItems: 'center',
        alignSelf: 'center'
    },

    font: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff'
    }
})

export default User