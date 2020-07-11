import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, CheckBox,  Alert } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Colors from '../Constants/colors'
import Input from '../components/Input'
import firebase from '../environment/config'


const Signup = props => {

    const [Fname, setFname] = useState('')
    const [Lname, setLname] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [Address, setAddress] = useState('')
    const [MobileNum, setMobileNum] = useState('')


    const registerUser = () => {
            if(Fname === '' && Email === '' && Password === '' && Address === '') {
                Alert.alert('Enter details to signup!')
            } else {
                //TODO
                firebase
                .auth()
                .createUserWithEmailAndPassword(Email, Password)
                .then((res) => {
                    firebase.database().ref('users/'+ res.user.uid).set({
                        displayName: Fname + Lname,
                        email: Email,
                        phoneNumber: MobileNum,
                        address: Address
                    })

                    console.log("User registered successfully")
                    setEmail('')
                    setFname('')
                    setLname('')
                    setMobileNum('')
                    setPassword('')
                    setAddress('')
                    props.nav.navigate('Login')
                })
                }
            
            
            
        }


    return (
        
        <KeyboardAwareScrollView style={styles.screen}>
            <View>
            
                
                <Input style={styles.TextIn} 
                placeholder="First Name" 
                placeholderTextColor={Colors.TealText}
                onChangeText={text => setFname(text)}
                onValueChange={console.log(Fname)}/>
                
                <Input style={styles.TextIn2} 
                placeholder="Last Name"
                onChangeText={text => setLname(text)} 
                placeholderTextColor={Colors.TealText}
                />

                <Input style={styles.TextIn2} 
                placeholder="Email"
                onChangeText={text => setEmail(text)} 
                placeholderTextColor={Colors.TealText}
                />

                <Input style={styles.TextIn2} 
                placeholder="Mobile Number" 
                onChangeText={text => setMobileNum(text)}
                placeholderTextColor={Colors.TealText}
                />
                
                <Input style={styles.TextIn3} 
                placeholder="Address" 
                onChangeText={text => setAddress(text)}
                placeholderTextColor={Colors.TealText}
                />


                <Input style={styles.TextIn3} 
                placeholder="Password" 
                onChangeText={text => setPassword(text)}
                placeholderTextColor={Colors.TealText}
                />            

                <TouchableOpacity 
                style={styles.button}
                onPress={() => registerUser()}>
                    <Text style={styles.font}>Save</Text>
                </TouchableOpacity>
                </View>
            
        </KeyboardAwareScrollView>

    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 0,
        width: "100%",
        backgroundColor: Colors.TealTranslucent1
        
        
    },

    TopHeader: {
        backgroundColor: Colors.Blue2
    },

    TextIn: {
        flex: 1,
        marginTop: 100,
        width: "60%",
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: "bold",
        padding: 10

    },

    TextIn2: {
        flex: 1,
        marginVertical: 15,
        width: "60%",
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: "bold",
        padding: 10

    },

    TextIn3: {
        flex: 1,
        marginTop: 15,
        marginBottom: 50,
        width: "60%",
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: "bold",
        padding: 10

    },

    font: {
        color: Colors.TealTranslucent,
        fontSize: 30,
        fontWeight: 'bold',
        
    },

    button:{
        flex: 0,
        alignSelf: 'center',
        backgroundColor: Colors.Tealbg,
        borderColor: Colors.TealTranslucent1,
        borderWidth: 2,
        borderRadius: 50,
        height: "7%",
        width: "40%",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 250

    },

    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
        alignSelf: 'center'
    },

        checkbox: {
        alignSelf: "center",
    },

    label: {
        margin: 20,
        color: Colors.TealText,
        fontSize: 20,
        fontWeight: 'bold'
    },
    
})

export default Signup