import React, {useState} from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native'
import Colors from '../Constants/colors'
import firebase from '../environment/config'


const Selfdrive = props => {

    const [otp, setOtp] = useState('')
    const [driverID, setDriverID] = useState('')

    return(
        <View styles={styles.container}>

            
                <Text style={styles.fontMain}>
                    If you're an ambulance driver please fill in 
                    your driver id!.
                </Text>
                <TextInput
                style={styles.driver}
                placeholder="Enter Driver ID...."
                onChangeText={text => setDriverID(text)}/>
           

            <View
                style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                
                
            }}
            />

            
                <Text style={styles.fontMain}>
                    If you're an individual request an OTP. 
                </Text>
                <View style={styles.parallel}>
                <TouchableOpacity style={styles.otpButton}>
                    <Text style={styles.fontReq}>Request OTP</Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.otp}
                    placeholder="Enter OTP...."
                    onChangeText={text => setOtp(text)}/>
                </View>
                <TouchableOpacity
                    style={styles.confirmBTN}>
                    <Text style={styles.font}>CONFIRM</Text>
                </TouchableOpacity>
           

        </View>
    )
}

const styles = StyleSheet.create ({

    container : {
        flex: 1,
        //backgroundColor: Colors.LightBlue,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
    },

    otp: {
        width:200,
        backgroundColor:Colors.Bluebg,
        borderColor: Colors.Blue1,
        borderRadius:25,
        height:70,
        marginBottom:20,
        justifyContent:"center",
        padding:20,
        alignSelf: 'center',
        marginTop: 20,
        fontSize: 20
    },

    otpButton: {
        flex: 0,
        alignSelf: 'center',
        borderColor: 'orange',
        borderWidth: 2,
        borderRadius: 20,
        height: 70,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },

    confirmBTN: {
        flex: 0,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderColor: 'green',
        borderWidth: 2,
        borderRadius: 20,
        height: "15%",
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
    },

    font: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'green'
    },

    fontMain: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10
    },

    fontReq: {
        fontSize: 20,
        textAlign: 'center',
        color: 'orange',
        fontWeight: 'bold'
    },

    view1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
    },


    view2: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },

    driver: {
        width:200,
        backgroundColor:Colors.Bluebg,
        borderColor: Colors.Blue1,
        borderRadius:25,
        height:70,
        marginBottom:20,
        justifyContent:"center",
        padding:20,
        alignSelf: 'center',
        marginTop: 70,
        fontSize: 20
    },

    parallel: {
        flexDirection: "row",
        justifyContent: 'space-evenly'
    }
})

export default Selfdrive