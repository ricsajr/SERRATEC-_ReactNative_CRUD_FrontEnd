import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";

import { styles } from "./styles";
import { ClientContext } from "../../Contexts/ClientContext";

import { useNavigation } from "@react-navigation/native";
import { Footer } from "../../components/Footer";
import { ClientForm } from "../../components/ClientForm";
import { updateCliente } from "../../components/services/Cliente";

import { format } from "date-fns";

export const UpdateClient = () => {
	const navigation = useNavigation();

	const { setCliente } = useContext(ClientContext);

	/* 'd.M.yyyy HH:mm:ss.SSS \'GMT\' XXX (z)' */

	function handlePutClient(client, id) {
		const pattern = "dd-MM-yyyy";
		const data = {
			...client,
			dataNascimento: `${format(
				client.dataNascimento,
				pattern
			)}T00:00:00Z`,
		};
		setCliente(data);
		updateCliente(id, data)
			.then((res) => {
				alert("Atualizado com sucesso!");
				navigation.navigate("Home");
			})
			.catch((err) => alert(err));
	}

	return (
		<>
			<View style={styles.container}>
				<View style={styles.content}>
					<View style={styles.form}>
						<ClientForm handlePutClient={handlePutClient} />
					</View>
				</View>
				<Footer style={styles.footer} />
			</View>
		</>
	);
};
