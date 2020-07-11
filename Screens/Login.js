import React, {useState} from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native'
import Colors from '../Constants/colors'
import firebase from '../environment/config'

const Login = props => {
    const [id, setId] = useState('') // State to manage user ID for authentication
    const [password, setPassword] = useState('') // State to manage user password for auth

    // function to handle login authentication
    const userLogin = () => { 
        if(id === '' || password === ''){
            Alert.alert('Enter all details to sign in!')
        } else {
            // TODO call API for auth
            firebase
            .auth()
            .signInWithEmailAndPassword(id, password)
            .then((res) => {
                console.log("this is the value of res", res)
                console.log("User logged in successfully")

                firebase.database().ref(`users/${firebase.auth().currentUser.uid}`).once('value', function(snapshot){
                    console.log(snapshot.val())
                    props.nav.navigate('User')

                })
            })

        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>EmerNav</Text>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="User ID..."
                    placeholderTextColor='#003f5c'
                    onChangeText={text => setId(text)}/>
            </View>

            <View style={styles.inputView} >
                <TextInput  
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Password..." 
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setPassword(text)}/>
            </View>

            <TouchableOpacity style={styles.loginBtn}
                onPress={() => userLogin()}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
       
            <TouchableOpacity 
                onPress={() => props.nav.navigate('Register')}
                style={styles.loginBtn}>
                <Text style={styles.loginText}>Signup</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Colors.LightBlue,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
    },

    logo: {
        fontWeight: 'bold',
        fontSize: 40,
        color: 'black',
        marginBottom: 40
    },

    inputView:{
        width:"80%",
        backgroundColor:Colors.Bluebg,
        borderColor: Colors.Blue1,
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },

    inputText:{
        height:50,
        color: Colors.PlaceholderTextColor,
        backgroundColor: Colors.PurpleTranslucent
    },

    forgot:{
        color:"white",
        fontSize:17
    },

    loginBtn:{
        width:"80%",
        backgroundColor: Colors.PurpleButton,
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        marginBottom:10
    },

    loginText:{
        color:"white",
        fontSize:17
	},

})

export default Login