import React, { useState } from 'react';
import {
	SafeAreaView,
	Text,
	TextInput,
	View,
	Pressable,
	Button,
	StyleSheet,
	Modal,
	ScrollView
} from 'react-native';


function Formulario({ modalVisible, setModalVisible }) {
	const [paciente, setPaciente] = useState('');
	const [propietario, setPropietario] = useState('');
	const [email, setEmail] = useState('');
	const [telefono, setTelefono] = useState('');
	const [sintomas, setSintomas] = useState('');


    return (
		<Modal
            animationType='slide' // slide, fade
            visible={modalVisible}
        >
			<SafeAreaView style={styles.contenido}>
				<ScrollView>
					<Text 
						style={styles.titulo}
					> Nueva {''}
						<Text style={styles.tituloBold}>Cita</Text>
					</Text>



					<View style={styles.campo}>
						<Text style={styles.label}>Nombre Paciente</Text>
						<TextInput 
							style={styles.input}
							value={paciente}
							onChangeText={setPaciente} // Esto esta optimizado asi, anda asi nomas... xdxd
							keyboardType='default'
							placeholder='Nombre Paciente'
							placeholderTextColor={'#666'}
						/>
					</View>

					<View style={styles.campo}>
						<Text style={styles.label}>Nombre Propietario</Text>
						<TextInput 
							style={styles.input}
							value={propietario}
							onChangeText={setPropietario}
							keyboardType='default'
							placeholder='Nombre Propietario'
							placeholderTextColor={'#666'}
						/>
					</View>

					<View style={styles.campo}>
						<Text style={styles.label}>Email Propietario</Text>
						<TextInput 
							style={styles.input}
							value={email}
							onChangeText={setEmail}
							keyboardType= 'email-address'
							placeholder='Email Propietario'
							placeholderTextColor={'#666'}
						/>
					</View>

					<View style={styles.campo}>
						<Text style={styles.label}>Teléfono Propietario</Text>
						<TextInput 
							style={styles.input}
							value={telefono}
							onChangeText={setTelefono}
							keyboardType= 'phone-pad'
							placeholder='Teléfono Propietario'
							placeholderTextColor={'#666'}
							maxLength={10}
						/>
					</View>

					<View style={styles.campo}>
						<Text style={styles.label}>Síntomas</Text>
						<TextInput 
							style={[styles.input, styles.sintomasInput]}
							value={sintomas}
							onChangeText={setSintomas}
							keyboardType= 'default'
							multiline={true}
							numberOfLines={4}
							placeholder='Síntomas del paciente'
							placeholderTextColor={'#666'}
						/>
					</View>

				</ScrollView>
			</SafeAreaView>
        </Modal>
    )
};

const styles = StyleSheet.create({
	contenido: {
		backgroundColor: '#6D28D9',
		flex: 1
	},
	titulo: {
		fontSize: 30,
		fontWeight: '400',
		textAlign: 'center',
		marginTop: 30,
		color: '#fff'
	},
	tituloBold: {
		fontWeight: '900',
	},
	campo: {
		marginTop: 10,
		marginHorizontal: 30,
	},
	label: {
		color: '#fff',
		marginBottom: 10,
		marginTop: 15,
		fontSize: 20,
		fontWeight: '600',
	},
	input: {
		backgroundColor: '#fff',
		padding: 15,
		borderRadius: 10,
	},
	sintomasInput: {
		height: 100,
	}
});

export default Formulario;