import React from "react";
import { View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { COLORS } from "../../Global/styles/theme";
import { styles } from "./styles";

export const Footer = () => {
	const navigation = useNavigation();

	function handleGoHome() {
		navigation.navigate("Home");
	}

	return (
		<View style={styles.container}>
			<BorderlessButton style={styles.content} onPress={handleGoHome}>
				<Entypo name="home" size={35} color={COLORS.ELEMENT_COLOR} />
			</BorderlessButton>
		</View>
	);
};
