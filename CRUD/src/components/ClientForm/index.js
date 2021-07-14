import React, { useState, useContext } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	KeyboardAvoidingView,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { format } from "date-fns";

import { styles } from "./styles";
import { ClientContext } from "../../Contexts/ClientContext";

import { ActionButton } from "../ActionButton";
import { InputClient } from "../InputClient";

export const ClientForm = ({ handlePutClient }) => {
	const { cliente } = useContext(ClientContext);

	const [show, setShow] = useState(false);

	const showDatePicker = () => {
		setShow(true);
	};

	const handleDateChange = (event, selectedDate) => {
		const currentDate = selectedDate || putClient.dataNascimento;
		setPutClient({ ...putClient, dataNascimento: currentDate });
		setShow(false);
	};

	const [putClient, setPutClient] = useState({
		nome: cliente.nome ? cliente.nome : " ",
		usuario: cliente.usuario ? cliente.usuario : " ",
		cpf: cliente.cpf ? cliente.cpf : " ",
		email: cliente.email ? cliente.email : " ",
		dataNascimento: cliente.dataNascimento
			? new Date(cliente.dataNascimento)
			: new Date(),
		endereco: {
			rua: cliente.endereco.rua ? cliente.endereco.rua : " ",
			numero: cliente.endereco.numero ? cliente.endereco.numero : " ",
			complemento: cliente.endereco.complemento
				? cliente.endereco.complemento
				: " ",
			bairro: cliente.endereco.bairro ? cliente.endereco.bairro : " ",
			cidade: cliente.endereco.cidade ? cliente.endereco.cidade : "",
			estado: cliente.endereco.estado ? cliente.endereco.estado : " ",
			cep: cliente.endereco.cep ? cliente.endereco.cep : " ",
		},
	});

	return (
		<View style={styles.container}>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<ScrollView
					showsVerticalScrollIndicator={false}
					contentContainerStyle={styles.scrollView}
				>
					<InputClient
						value={putClient.nome}
						label="Nome"
						placeHold="Digite seu nome"
						onChangeText={(text) =>
							setPutClient({ ...putClient, nome: text })
						}
					/>
					<InputClient
						value={putClient.usuario}
						label="Nome de Usuário"
						placeHold={"Digite seu nome de usuário"}
						onChangeText={(text) =>
							setPutClient({ ...putClient, usuario: text })
						}
					/>
					<InputClient
						value={putClient.cpf}
						label="CPF"
						type="numeric"
						placeHold={"Digite seu CPF"}
						onChangeText={(text) =>
							setPutClient({ ...putClient, cpf: text })
						}
					/>
					<InputClient
						value={putClient.email}
						label="E-mail"
						placeHold={"Digite seu e-mail"}
						onChangeText={(text) =>
							setPutClient({ ...putClient, email: text })
						}
					/>

					<View style={styles.dateContainer}>
						<View>
							<TouchableOpacity onPress={showDatePicker}>
								<InputClient
									label="Data de Nascimento"
									placeHold="Digite sua data de nascimento"
									value={format(
										putClient.dataNascimento,
										"dd/MM/yyyy"
									)}
								/>
							</TouchableOpacity>
						</View>
					</View>
					<Text style={styles.address}>Endereço</Text>
					<InputClient
						value={putClient.endereco.rua}
						label="Logradouro"
						placeHold={"Digite o nome do Logradouro"}
						onChangeText={(text) =>
							setPutClient({
								...putClient,
								endereco: {
									...putClient.endereco,
									rua: text,
								},
							})
						}
					/>

					<InputClient
						value={putClient.endereco.numero}
						label="Número"
						placeHold={"Digite o numero no logradouro"}
						type="numeric"
						onChangeText={(text) =>
							setPutClient({
								...putClient,
								endereco: {
									...putClient.endereco,
									numero: text,
								},
							})
						}
					/>

					<InputClient
						value={putClient.endereco.complemento}
						label="Complemento"
						placeHold={"Digite o complemento"}
						onChangeText={(text) =>
							setPutClient({
								...putClient,
								endereco: {
									...putClient.endereco,
									complemento: text,
								},
							})
						}
					/>

					<InputClient
						value={putClient.endereco.bairro}
						label="Bairro"
						placeHold={"Digite seu bairro"}
						onChangeText={(text) =>
							setPutClient({
								...putClient,
								endereco: {
									...putClient.endereco,
									bairro: text,
								},
							})
						}
					/>

					<InputClient
						value={putClient.endereco.cidade}
						label="Cidade"
						placeHold={"Digite sua cidade"}
						onChangeText={(text) =>
							setPutClient({
								...putClient,
								endereco: {
									...putClient.endereco,
									cidade: text,
								},
							})
						}
					/>

					<InputClient
						value={putClient.endereco.estado}
						label="Estado"
						placeHold={"Digite seu Estado"}
						onChangeText={(text) =>
							setPutClient({
								...putClient,
								endereco: {
									...putClient.endereco,
									estado: text,
								},
							})
						}
					/>

					<InputClient
						value={putClient.endereco.cep}
						label="CEP"
						placeHold={"Digite seu CEP"}
						type="numeric"
						onChangeText={(text) =>
							setPutClient({
								...putClient,
								endereco: { ...putClient.endereco, cep: text },
							})
						}
					/>

					{show && (
						<DateTimePicker
							value={putClient.dataNascimento}
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
							handleAction={() =>
								handlePutClient(putClient, cliente.id)
							}
						/>
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		</View>
	);
};
