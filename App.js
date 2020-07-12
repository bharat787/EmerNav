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
import Selfdrive from './Screens/SelfDrive'
import Colors from './Constants/colors'
import OneSignal from 'react-native-onesignal'



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

function Drive({navigation}) {
	return (
	  	<View style={styles.container}>
		  	<Selfdrive nav={navigation}/>
			<StatusBar style="auto" />
		</View>
	)
}

const Stack = createStackNavigator()

export default function App() {

	//Remove this method to stop OneSignal Debugging 
	OneSignal.setLogLevel(6, 0);
  
	// Replace 'YOUR_ONESIGNAL_APP_ID' with your OneSignal App ID.
	OneSignal.init("6cfa7136-7554-4844-9f75-5c07db11e41e", {kOSSettingsKeyAutoPrompt : false, kOSSettingsKeyInAppLaunchURL: false, kOSSettingsKeyInFocusDisplayOption:2});
	OneSignal.inFocusDisplaying(2); // Controls what should happen if a notification is received while the app is open. 2 means that the notification will go directly to the device's notification center.
	
	// The promptForPushNotifications function code will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step below)
	//OneSignal.promptForPushNotificationsWithUserResponse(myiOSPromptCallback);
  
	OneSignal.addEventListener('received', onReceived);
	OneSignal.addEventListener('opened', onOpened);
	OneSignal.addEventListener('ids', onIds);
  
  
	OneSignal.removeEventListener('received', onReceived);
	OneSignal.removeEventListener('opened', onOpened);
	OneSignal.removeEventListener('ids', onIds);
  
  
	const onReceived = (notification) => {
	  console.log("Notification received: ", notification);
	}
  
	const onOpened = (openResult) => {
	  console.log('Message: ', openResult.notification.payload.body);
	  console.log('Data: ', openResult.notification.payload.additionalData);
	  console.log('isActive: ', openResult.notification.isAppInFocus);
	  console.log('openResult: ', openResult);
	}
  
	const onIds = (device) => {
	  console.log('Device info: ', device);
	}
	
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

			<Stack.Screen
			name="Drive"
			component={Drive}
			options={{ title: 'Driver Details', headerStyle: { backgroundColor: Colors.BluePrim},
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
