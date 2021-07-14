import React, { useState, useEffect, useContext } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { COLORS } from "../../Global/styles/theme";
import filter from "lodash.filter";
import { getCliente } from "../../components/services/Cliente";

import { SearchButton } from "../../components/Search";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { ModalView } from "../../components/ModalView";
import { AddButton } from "../../components/AddButton";
import { ModalDeleteClient } from "../../components/ModalDeleteClient";
import { deleteCliente } from "../../components/services/Cliente";
import { ClientContext } from "../../Contexts/ClientContext";
import { ModalClientInformation } from "../../components/ModalClientInformation";

export const Home = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [clientes, setClientes] = useState([]);
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const [id, setId] = useState(null);
	const [fullData, setFullData] = useState([]);
	const [query, setQuery] = useState("");
	const [openClientInfoModal, setOpenClientInfoModal] = useState(false);

	const clienteContext = useContext(ClientContext);

	const navigation = useNavigation();

	function handleUpdateClient(client) {
		clienteContext.setCliente(client);
		navigation.navigate("UpdateClient");
	}

	function handleOpenDeleteModal(clientId) {
		setOpenDeleteModal(true);
		setId(clientId);
	}

	function handleCloseDeleteModal() {
		setOpenDeleteModal(false);
	}

	function handleOpenClientInfoModal(client) {
		// console.log(client);
		clienteContext.setCliente(client);
		setOpenClientInfoModal(true);
	}

	function handleCloseClientModal() {
		setOpenClientInfoModal(false);
	}

	function handleDeleteClient() {
		deleteCliente(id)
			.then(() => {
				alert("Deletado com sucesso!");
				handleCloseDeleteModal();
			})
			.catch((err) => {
				console.error("ops! ocorreu um erro" + err);
			});
	}

	useEffect(() => {
		setIsLoading(true);
		getCliente()
			.then((data) => {
				setClientes(data);
				setFullData(data);
				setIsLoading(false);
			})
			.catch((err) => {
				setIsLoading(false);
				console.error("ops! ocorreu um erro" + err);
			});
	}, [openDeleteModal, clienteContext]);

	const handleSearch = (text) => {
		const filteredData = filter(fullData, (user) => {
			return contains(user, text);
		});
		setQuery(text);
		setClientes(filteredData);
	};

	const contains = ({ nome }, query) => {
		nome = nome.toLowerCase();
		if (nome.includes(query)) {
			return true;
		}
		return false;
	};

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

	function goAddClientScreen() {
		navigation.navigate("AddClient");
	}

	return (
		<View style={styles.mainContainer}>
			<AddButton handleAdd={goAddClientScreen} />
			<SearchButton handleSearch={handleSearch} query={query} />
			<View style={styles.flatlist}>
				<FlatList
					data={clientes}
					renderItem={({ item }) => (
						<Section
							nome={item.nome}
							id={item.id}
							handleUpdate={() => handleUpdateClient(item)}
							handleShowModal={() =>
								handleOpenDeleteModal(item.id)
							}
							handleClientModal={() =>
								handleOpenClientInfoModal(item)
							}
						/>
					)}
					keyExtractor={(item) => item.id.toString()}
					showsVerticalScrollIndicator={false}
				/>
			</View>
			<Footer />
			<ModalView isVisible={openDeleteModal}>
				<ModalDeleteClient
					handleDelete={() => handleDeleteClient()}
					handleCloseModal={() => handleCloseDeleteModal()}
				/>
			</ModalView>
			<ModalView isVisible={openClientInfoModal}>
				<ModalClientInformation
					id={id}
					handleClose={() => handleCloseClientModal()}
				/>
			</ModalView>
		</View>
	);
};
