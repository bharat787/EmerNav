import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Colors from '../Constants/colors'
import Input from '../components/Input'

const PersonalDetails = props => {

    const [name, setName] = useState('')
    
    const [details, setDetails] = useState({})
    

    return (
        
        <KeyboardAwareScrollView style={styles.screen}>
            <View>
            
                
                <Input style={styles.TextIn} 
                placeholder= {details.displayName}
                placeholderTextColor={Colors.YellowAccent}/>

                <Input style={styles.TextIn2} 
                placeholder={details.phoneNumber}
                placeholderTextColor={Colors.YellowAccent}/>
                
                <Input style={styles.TextIn3} 
                placeholder={details.email}
                placeholderTextColor={Colors.YellowAccent}/>

                <TouchableOpacity style={styles.button}>
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
        backgroundColor: Colors.LightBlue,
            
    },

    TopHeader: {
        backgroundColor: Colors.Blue2
    },

    TextIn: {
        flex: 1,
        marginTop: 100,
        marginBottom: 15,
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
        color: Colors.Blue2,
        fontSize: 30,
        fontWeight: 'bold',
        
    },

    button:{
        flex: 0,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderColor: Colors.Blue2,
        borderWidth: 2,
        borderRadius: 50,
        height: "7%",
        width: "40%",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 250

        }
    
})

export default PersonalDetails