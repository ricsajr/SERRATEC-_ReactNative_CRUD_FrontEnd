import React, { useState } from "react";
import { ScrollView, View, TouchableOpacity, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";

import { styles } from "../../components/ClientForm/styles";
import { addCliente } from "../../components/services/Cliente";
import { InputCliente } from "../../components/InputCliente";
import { ActionButton } from "../../components/ActionButton";

import { Footer } from "../../components/Footer";

export const AddClient = () => {
	const [nome, setNome] = useState("");
	const [usuario, setUsuario] = useState("");
	const [cpf, setCpf] = useState("");
	const [email, setEmail] = useState("");
	const [dataNascimento, setDataNascimento] = useState(new Date());
	const [rua, setRua] = useState("");
	const [numero, setNumero] = useState("");
	const [complemento, setComplemento] = useState("");
	const [bairro, setBairro] = useState("");
	const [cidade, setCidade] = useState("");
	const [estado, setEstado] = useState("");
	const [cep, setCep] = useState("");
	const [show, setShow] = useState(false);

	const navigation = useNavigation();

	const showDatePicker = () => {
		setShow(true);
	};
	const handleDateChange = (event, selectedDate) => {
		const currentDate = selectedDate || dataNascimento;
		setDataNascimento(currentDate);
		setShow(false);
	};

	function dataFormatada(dataNascimento) {
		const dataF = new Date(dataNascimento);
		const data = dataF;
		const dia = data.getDate().toString();
		const diaF = dia.length == 1 ? "0" + dia : dia;
		const mes = (data.getMonth() + 1).toString();
		const mesF = mes.length == 1 ? "0" + mes : mes;
		const anoF = data.getFullYear();
		return diaF + "/" + mesF + "/" + anoF;
	}
	function dataFormatadaBD() {
		const data = new Date(dataNascimento);
		const dia = data.getDate().toString();
		const diaF = dia.length == 1 ? "0" + dia : dia;
		const mes = (data.getMonth() + 1).toString();
		const mesF = mes.length == 1 ? "0" + mes : mes;
		const anoF = data.getFullYear();
		return anoF + "-" + mesF + "-" + diaF + "T00:00:00Z";
	}

	const dataBD = dataFormatadaBD();

	const cliente = {
		nome: nome,
		usuario: usuario,
		cpf: cpf,
		email: email,
		dataNascimento: dataBD,
		endereco: {
			rua: rua,
			numero: numero,
			complemento: complemento,
			bairro: bairro,
			cidade: cidade,
			estado: estado,
			cep: cep,
		},
	};

	function handleAddClient() {
		console.log(cliente);
		addCliente(cliente)
			.then((d) => {
				alert("Cliente registrado com sucesso!");
				navigation.navigate("Home");
			})
			.catch((error) => alert(error));
	}
	return (
		<View style={styles.container}>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.scrollView}
			>
				<InputCliente
					label="Nome"
					placeHold="Digite seu nome"
					onChangeText={setNome}
				/>
				<InputCliente
					label="Usuário"
					placeHold="Digite seu usuário"
					onChangeText={setUsuario}
				/>
				<InputCliente
					label="CPF"
					placeHold="Digite seu CPF"
					onChangeText={setCpf}
				/>
				<InputCliente
					label="E-mail"
					placeHold="Digite seu e-mail"
					onChangeText={setEmail}
				/>
				<View style={styles.dateContainer}>
					<View>
						<TouchableOpacity onPress={showDatePicker}>
							<InputCliente
								label="Data de Nascimento"
								placeHold="Digite sua data de nascimento"
								value={dataFormatada(dataNascimento)}
							/>
						</TouchableOpacity>
					</View>
				</View>
				<Text style={styles.address}>Endereço</Text>
				<InputCliente
					label="Logradouro"
					placeHold="Digite seu logradouro"
					onChangeText={setRua}
				/>
				<InputCliente
					label="Número"
					placeHold="Digite o número da sua residência"
					onChangeText={setNumero}
				/>
				<InputCliente
					label="Complemento"
					placeHold="Digite o complemento da sua residência"
					onChangeText={setComplemento}
				/>
				<InputCliente
					label="Bairro"
					placeHold="Digite seu bairro"
					onChangeText={setBairro}
				/>
				<InputCliente
					label="Cidade"
					placeHold="Digite sua cidade"
					onChangeText={setCidade}
				/>
				<InputCliente
					label="Estado"
					placeHold="Digite seu estado"
					onChangeText={setEstado}
				/>
				<InputCliente
					label="CEP"
					placeHold="Digite seu CEP"
					onChangeText={setCep}
				/>
				{show && (
					<DateTimePicker
						value={dataNascimento}
						mode="date"
						display="default"
						onChange={handleDateChange}
					/>
				)}
				<View style={{ marginTop: 50 }}>
					<ActionButton
						color="#333333"
						title="Salvar"
						textColor="#FFFFFF"
						bWidth={1}
						bColor="#333333"
						handleAction={handleAddClient}
					/>
				</View>
			</ScrollView>
			<Footer />
		</View>
	);
};
