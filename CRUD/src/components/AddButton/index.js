import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons";
import { COLORS } from "../../Global/styles/theme";
import { BaseButton } from "react-native-gesture-handler";

export const AddButton = ({ handleAdd }) => {
	return (
		<BaseButton
			style={
				styles.add
			} /*onPress={inserir o nome da página que vai ser chamada com o form}*/
			onPress={() => handleAdd()}
		>
			<Entypo name="plus" size={27} color={COLORS.ELEMENT_COLOR} />
		</BaseButton>
	);
};
