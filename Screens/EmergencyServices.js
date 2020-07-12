import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput, Alert } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MapView , { PROVIDER_GOOGLE }from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const EmergencyService = props => {

    const [fromLoc, setFromLoc] = useState('current Loc')
    const [destinationLoc, setDestinationLoc] = useState('')
    const [dict, setDict] = useState([])
    const [currentLong, setCurrentLong] = useState(77.538471)//77.538471
    const [currentLat, setCurrentLat] = useState(28.468596)

    Geolocation.getCurrentPosition((position) => {
        const currentLongitude = 
            JSON.stringify(position.coords.longitude)
            console.log(currentLongitude)
        const currentLatitude =
            JSON.stringify(position.coords.latitude)

        setCurrentLat(parseFloat(currentLatitude))
        setCurrentLong(parseFloat(currentLongitude))
    },(error) => alert(error.message),
    { enableHighAccuracy: true, timeout: 20000 })

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

    const ambulancebtn = () => {
        Alert.alert("An Ambulance has been dispatched to your current location.",
        "We will ensure that traffic is cleared for the fastest approach time.")
    }

    return(
        <View style={styles.container}>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="From(Current Location)"
                    placeholderTextColor='#003f5c'
                    onChangeText={text => setFromLoc(text)}/>
            </View>

            <View style={styles.inputView} >
                <TextInput  
                    style={styles.inputText}
                    placeholder="Destination..." 
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setDestinationLoc(text)}/>
                
            </View>
            <View style = {styles.mapview}>
            <MapView
                provider={PROVIDER_GOOGLE}// remove if not using Google Maps
                style={styles.map}
                region={{
                latitude: currentLat,
                longitude: currentLong,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
                }}
            >
                <MapView.Marker
                    coordinate={{
                        "latitude": currentLat,
                        "longitude": currentLong,}}
                        title={"currentLocation"}
                        draggable
                    />
            </MapView>
            </View>

            <View style={styles.parallel}>
                <TouchableOpacity 
                style={styles.ambButton}
                onPress={() => ambulancebtn()}>
                    <Text style={styles.font}>CALL AMBULANCE</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.selfButton}
                    onPress={() => props.nav.navigate('Drive')}>
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
        //marginBottom:5,
        justifyContent:"center",
        padding:20,
        margin: 10
    },

    parallel: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    ambButton: {
        borderRadius: 20,
        backgroundColor: 'red',
        height: 50,
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
        height: 50,
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
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },

    mapview:{
        //...StyleSheet.absoluteFillObject,
   height: 560,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
    }
})

export default EmergencyService