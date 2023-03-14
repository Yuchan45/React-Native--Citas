import React, { useState } from 'react';

import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	Button,
	Pressable,
	Modal,
	useColorScheme,
	View,
} from 'react-native';


import Formulario from './src/components/Formulario';


const App = () => {
	const [modalVisible, setModalVisible] = useState(false);
	
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.titulo}>Administrador de Citas</Text>
			<Text style={styles.tituloBold}>Veterinaria</Text>

			<Pressable
				// onPress, onLongPress, onPressIn, onPressOut
				onPress={ () => setModalVisible(true) }
				style={styles.btnNuevaCita}
			>
				<Text style={styles.btnTextoNuevaCita}>Nueva Cita!</Text>
			</Pressable>

			<Formulario 
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
			/>

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
	},
	btnNuevaCita: {
		backgroundColor: '#6D28D9',
		padding: 15,
		marginTop: 20,
		// marginLeft: 20,
		// marginRight: 20,
		marginHorizontal: 20, // Esto es marginTop y Left al mismo tiempo.
		borderRadius: 10
	},
	btnTextoNuevaCita: {
		textAlign: 'center',
		color: '#fff',
		fontSize: 15,
		fontWeight: '900',
		textTransform: 'uppercase'
	},
});




export default App;
