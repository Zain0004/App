import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import 
{ 
  StyleSheet, 
  Button, 
  Text,
  View, 
  SafeAreaView, 
  TextInput, 
  Alert, 
  Platform, 
  ImageBackground,
  TouchableOpacity
} from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Welcome to My App</Text>
      <TextInput style={styles.TextBoxstyle} 
      placeholder="Username" 
      placeholderTextColor='white'>
      </TextInput>

      <TextInput style={styles.TextBoxstyle} 
      placeholder="Password" 
      secureTextEntry={true} 
      underlineColorAndroid= 'rgba(0,0,0,0)'
      placeholderTextColor='white'>
      </TextInput>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

function ProfilePage({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Welcome to my App Zain. This is the Welcome screen</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Edit Profile')}>
        <Text style={styles.buttonText}>Edit your Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

function EditProfilePage({navigation}) {
  return (
    <View style={styles.EditProfilePage}>
      <Text style={styles.Text}>Edit your Profile here</Text>
      <TextInput style={styles.TextBoxstyle} 
      placeholder="Name" 
      placeholderTextColor='white'>
      </TextInput>
      <TextInput style={styles.TextBoxstyle} 
      placeholder="Job Title" 
      placeholderTextColor='white'>
      </TextInput>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
      <View style={styles.BottomButtonsView}>
      <TouchableOpacity style={styles.BottomButtons} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.BottomButtons} onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.buttonText}>View Profile</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="Edit Profile" component={EditProfilePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 20 : 0,
    backgroundColor: '#455a64',
    alignItems: 'center',
  },
  Text: {
    color: 'white', 
    fontSize: 15,
    marginVertical: 60,
  },
  TextBoxstyle: {
    backgroundColor: '#rgba(255,255,255,0.3)',
    height: 45,
    paddingLeft: 15,
    borderRadius: 30,
    paddingHorizontal: 200,
    marginVertical: 10
  },
  button: {
    width: 150,
    backgroundColor: '#1c313a',
    borderRadius: 40,
    marginVertical: 15,
    height: 40,
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    textAlign: 'center'
  },
  EditProfilePage: {
    flex: 1,
    backgroundColor: '#455a64',
  },
  BottomButtonsView: {
    flex: 0.5,
  },
  BottomButtons: {
    width: 150,
    backgroundColor: '#1c313a',
    borderRadius: 40,
    height: 40,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;
