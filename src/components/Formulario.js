import React, { useState } from 'react';
import {
	SafeAreaView,
	Text,
	Pressable,
	Button,
	StyleSheet,
	Modal
} from 'react-native';


function Formulario({ modalVisible, setModalVisible }) {

    return (
		<Modal
            animationType='slide' // slide, fade
            visible={modalVisible}
        >
			<SafeAreaView>
				<Button
					title='Presiona aquí'
					onPress={() => setModalVisible(false)}
				></Button>

			</SafeAreaView>
        </Modal>
    )
};

const styles = StyleSheet.create({
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

export default Formulario;