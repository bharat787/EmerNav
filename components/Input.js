import React from 'react'
import {TextInput, StyleSheet} from 'react-native'
import Colors from '../Constants/colors'


const Input = props => {
    return <TextInput {...props} style={{...styles.input, ...props.style}}/>
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        borderColor: Colors.RedPrim,
        borderRadius: 20,
        borderBottomWidth: 2,
    }
})

export default Input