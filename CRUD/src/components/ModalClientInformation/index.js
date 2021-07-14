import React, { useEffect, useState, useContext, useRef } from "react";
import { View, ActivityIndicator } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { format } from "date-fns";

import { styles } from "./styles";
import { COLORS } from "../../Global/styles/theme";

import { ActionButton } from "../ActionButton";
import { ClientInfo } from "../ClientInfo";
import { ClientContext } from "../../Contexts/ClientContext";
import { getClientById } from "../services/Cliente";

export const ModalClientInformation = ({ handleClose }) => {
	const { cliente } = useContext(ClientContext);
	const [isLoading, setIsLoading] = useState(false);
	const [customer, setCustomer] = useState({
		nome: null,
		usuario: null,
		cpf: null,
		email: null,
		dataNascimento: null,
		endereco: {
			rua: null,
			numero: null,
			complemento: null,
			bairro: null,
			cidade: null,
			estado: null,
			cep: null,
		},
	});

	useEffect(() => {
		setIsLoading(true);
		getClientById(cliente.id)
			.then((data) => {
				setCustomer(data);
				setIsLoading(false);
			})
			.catch((err) => {
				console.error("ops! ocorreu um erro" + err);
			});
	}, []);

	if (isLoading) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<ActivityIndicator size="large" color={COLORS.ELEMENT_COLOR} />
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<MaterialCommunityIcons
					style={styles.svg}
					name="account-circle"
					size={100}
					color={COLORS.ELEMENT_COLOR}
				/>
				<View>
					<ClientInfo label="Nome" info={customer.nome} />
					<ClientInfo label="Usuário" info={customer.usuario} />
				</View>
			</View>
			<View style={styles.content}>
				<View>
					<ClientInfo label="CPF" info={customer.cpf} />
					<ClientInfo label="E-mail" info={customer.email} />
					<ClientInfo
						label="Data de Nascimento"
						info={format(
							new Date(customer.dataNascimento),
							"dd/MM/yyyy"
						)}
					/>
				</View>
				<View style={styles.containerRow}>
					<ClientInfo
						label="Logradouro"
						info={customer.endereco.rua}
					/>
				</View>
				<View>
					<ClientInfo
						label="Número"
						info={customer.endereco.numero}
					/>
					{customer.endereco.complemento ? (
						<ClientInfo
							label="Complemento"
							info={customer.endereco.complemento}
						/>
					) : null}
					<ClientInfo
						label="Bairro"
						info={customer.endereco.bairro}
					/>
				</View>
				<View style={styles.containerRow}>
					<ClientInfo
						label="Cidade"
						info={customer.endereco.cidade}
					/>
					<View style={styles.viewEstado}>
						<ClientInfo
							label="Estado"
							info={customer.endereco.estado}
						/>
					</View>
				</View>
			</View>
			<View style={styles.viewCEP}>
				<ClientInfo label="CEP" info={customer.endereco.cep} />
			</View>

			<View style={styles.fecharButton}>
				<ActionButton
					title="Fechar"
					color="#333333"
					textColor="#fff"
					handleAction={() => handleClose()}
				/>
			</View>
		</View>
	);
};
