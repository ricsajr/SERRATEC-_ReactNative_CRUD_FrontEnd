import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS, FONT } from "../../Global/styles/theme";
import { Feather } from "@expo/vector-icons";

export const Section = ({
	nome,
	id,
	handleShowModal,
	handleUpdate,
	handleClientModal,
}) => {
	return (
		<View style={styles.container}>
			<View style={styles.textContainer}>
				<View style={styles.inside}>
					<TouchableOpacity
						onPress={handleClientModal}
						style={styles.textInside}
					>
						<Text>{nome}</Text>
					</TouchableOpacity>

					<View style={styles.iconContainer}>
						<TouchableOpacity onPress={handleUpdate}>
							<Feather
								style={styles.icon}
								name="edit"
								size={22}
								color={COLORS.ELEMENT_COLOR}
							/>
						</TouchableOpacity>
						<TouchableOpacity onPress={handleShowModal}>
							<MaterialIcons
								style={styles.icon}
								name="delete-outline"
								size={24}
								color={COLORS.ELEMENT_COLOR}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
};
