/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
 	AppRegistry,
 	StyleSheet,
 	Text,
 	View,
 	Image,
 	TouchableOpacity,
 	NavigatorIOS,
 } from 'react-native';

 import MyMovies from './movie';

 export default class Hello_World extends Component {
 	 render() {
   

 		return (

 			<View  style={styles.container}>
 			<Image 
 			style={styles.welcomeIcon}
 			source={require('./Images/wushi.jpg')}
 			/>
 			<Text style={styles.welcomeText}> hello,kokiyu </Text>

 			<TouchableOpacity >

 			<View style={styles.welcome}>

 			<Text style={styles.enterText}> 开始我的React-Native之旅</Text>

 			</View>
 			</TouchableOpacity>

 			</View>

 			);
 	}
 }

 const styles = StyleSheet.create({
 	container: {
 		flex:1,
 		alignItems: 'center',
 		justifyContent:'center',
 		backgroundColor: '#222',
 	},

 	welcomeIcon:{
 		width:90,
 		height:90,
 		borderRadius: 45,
 		top:-150,
 	},
 	welcomeText:{
 		color:'#777', 
 		fontSize: 20,
 		fontWeight: 'bold',
 		fontFamily: 'Cochin',
 		top:-50,
 	},
 	welcome: {
 		borderWidth: 1,
 		borderRadius: 10,
 		borderColor:'#00D7FE',
 		width:200,
 		height:40,
 		alignItems:'center',
 		justifyContent:'center',
 		top:80

 	},
 	enterText:{
 		color:'#00D7FE'

 	}

 });

 AppRegistry.registerComponent('Hello_World', () => Hello_World);

 module.exports = Hello_World;

