import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const EmergencyService = props => {

    const [fromLoc, setFromLoc] = useState('current Loc')
    const [destinationLoc, setDestionLoc] = useState('')
    const [dict, setDict] = useState([])
    var data = [
        {Name: 'HospitalA'},
        {Name: 'HospitalB'},
        {Name: 'HospitalC'}
    ]
    //setDict( data )

    const renderData = (vals) => {
        <View style={styles.flatItem}>
            <View>
                <Text>
                    {vals.Name}
                </Text>
            </View>
        </View>
    }

    return(
        <View style={styles.container}>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="From(Current Location)..."
                    placeholderTextColor='#003f5c'
                    onChangeText={text => setFromLoc(text)}/>
            </View>

            <View style={styles.inputView} >
                <TextInput  
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Destination..." 
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setDestinationLoc(text)}/>
            </View>

            <FlatList />

            <View style={styles.parallel}>
                <TouchableOpacity style={styles.ambButton}>
                    <Text style={styles.font}>CALL AMBULANCE</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.selfButton}>
                    <Text style={styles.font}>SELF DRIVE</Text>
                </TouchableOpacity>
            </View>
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

    inputView:{
        width:"80%",
        backgroundColor:Colors.Bluebg,
        borderColor: Colors.Blue1,
        borderRadius:25,
        height:50,
        marginBottom:5,
        justifyContent:"center",
        padding:20
    },

    parallel: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    ambButton: {
        borderRadius: 20,
        backgroundColor: 'red',
        height: 30,
        width: '45%',
        margin: 10,
        padding: 20,
        justifyContent: "center",
        alignItems: 'center',
        alignSelf: 'center'

    },

    selfButton: {
        borderRadius: 20,
        backgroundColor: 'green',
        height: 30,
        width: '45%',
        margin: 10,
        padding: 20,
        justifyContent: "center",
        alignItems: 'center',
        alignSelf: 'center'
    },

    feedItem: {
		backgroundColor: Colors.Blue2,
		borderRadius: 15,
		padding: 8,
		flexDirection: "row",
		marginVertical: 10,
		width: "100%",
		justifyContent: "center",
		alignSelf: "center",
      },
      
      font: {
          fontWeight: 'bold',
          fontSize: 15,
          color: 'white'
      },

      inputText: {
		padding: 5,
		margin: 5,
		borderColor: Colors.Purple1,
		borderWidth: 1,
		justifyContent: 'center',
		alignSelf: 'center',
		borderRadius: 10,
        alignItems: 'center',
        height: 40,
        width: 300
    },
    
    listarea: {
        color: 'grey'
    }
})

export default EmergencyService