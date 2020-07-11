import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Login from './Screens/Login'
import User from './Screens/User'
import UserDetails from './Screens/UserDetails'
import EmergencyService from './Screens/EmergencyServices'
import Signup from './Screens/Signup'
import Colors from './Constants/colors'



function Log({navigation}) {
	return (
	  	<View style={styles.container}>
		  	<Login nav={navigation}/>
			<StatusBar style="auto" />
		</View>
	)
}

function UserHome({navigation}) {
	return (
	  	<View style={styles.container}>
		  	<User nav={navigation}/>
			<StatusBar style="auto" />
		</View>
	)
}

function UserDet({navigation}) {
	return (
	  	<View style={styles.container}>
		  	<UserDetails nav={navigation}/>
			<StatusBar style="auto" />
		</View>
	)
}

function EmergencyScreen({navigation}) {
	return (
	  	<View style={styles.container}>
		  	<EmergencyService nav={navigation}/>
			<StatusBar style="auto" />
		</View>
	)
}

function SignUP({navigation}) {
	return (
	  	<View style={styles.container}>
		  	<Signup nav={navigation}/>
			<StatusBar style="auto" />
		</View>
	)
}

const Stack = createStackNavigator()

export default function App() {
  return (
	<NavigationContainer>
		<Stack.Navigator initialRouteName="Login">

			<Stack.Screen
			name="Login"
			component={Log}
			options={{ title: 'Login', headerStyle: { backgroundColor: Colors.BluePrim},
		  	headerTitleAlign: 'center',
		  	headerTintColor: '#fff'}}/>

			<Stack.Screen
			name="User"
			component={UserHome}
			options={{ title: 'DashBoard', headerStyle: { backgroundColor: Colors.BluePrim},
		  	headerTitleAlign: 'center',
		  	headerTintColor: '#fff'}}/>

			<Stack.Screen
			name="UserDetails"
			component={UserDet}
			options={{ title: 'Details', headerStyle: { backgroundColor: Colors.BluePrim},
		  	headerTitleAlign: 'center',
		  	headerTintColor: '#fff'}}/>

			<Stack.Screen
			name="Emergency"
			component={EmergencyScreen}
			options={{ title: 'Emergency Services', headerStyle: { backgroundColor: Colors.BluePrim},
		  	headerTitleAlign: 'center',
		  	headerTintColor: '#fff'}}/>  

			<Stack.Screen
			name="Register"
			component={SignUP}
			options={{ title: 'Register', headerStyle: { backgroundColor: Colors.BluePrim},
		  	headerTitleAlign: 'center',
		  	headerTintColor: '#fff'}}/>  

		</Stack.Navigator>
	</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
