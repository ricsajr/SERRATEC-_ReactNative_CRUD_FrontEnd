import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { ActionButton } from "../ActionButton";

export const ModalDeleteClient = ({ handleCloseModal, handleDelete }) => {
	return (
		<View style={styles.container}>
			<View style={styles.text}>
				<Text style={styles.textContent}>{`Tem certeza que deseja 
	 apagar este cliente?`}</Text>
			</View>
			<View style={styles.buttons}>
				<ActionButton
					title="Cancelar"
					color="#333333"
					textColor="#fff"
					handleAction={() => handleCloseModal()}
				/>
				<ActionButton
					title="Deletar"
					color="#FFFFFF"
					textColor="#FF2525"
					bWidth={1}
					bColor="#ff2525"
					handleAction={() => handleDelete()}
				/>
			</View>
		</View>
	);
};
