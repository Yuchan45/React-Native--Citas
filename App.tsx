import React from 'react';

import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	Button,
	Pressable,
	useColorScheme,
	View,
} from 'react-native';


const App = () => {


	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.titulo}>Administrador de Citas</Text>
			<Text style={styles.tituloBold}>Veterinaria</Text>

			<Pressable
				onPress={()=> {
					console.log("Presionaste el Pressable!")
				}}
			>
				<Text>Pressable!</Text>
			</Pressable>

		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#F3F4F6',
		display:'flex',
		flex: 1, // FlexDirection en RN es default en cols. si le pongo flex 1, la col ocupa toda la plantalla.

	},
	titulo: {
		textAlign: 'center',
		fontWeight: '800',
		textTransform: 'uppercase',
		fontSize: 25, // No usa px, o rem. Se ahce automatico aca parece.
		color: 'rgb(255 0 255)'
	},
	tituloBold: {
		fontWeight: '900',
		fontSize: 30,
		textAlign: 'center',
		color: '#6D28D9'
	}
});




export default App;
