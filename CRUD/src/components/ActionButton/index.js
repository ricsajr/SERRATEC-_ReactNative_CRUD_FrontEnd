import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

export const ActionButton = ({
	color,
	title,
	textColor,
	bWidth,
	bColor,
	handleAction,
}) => {
	return (
		<TouchableOpacity
			onPress={handleAction}
			style={[
				styles.container,
				{
					backgroundColor: color,
					borderWidth: bWidth,
					borderColor: bColor,
				},
			]}
		>
			<Text style={[styles.text, { color: textColor }]}>{title}</Text>
		</TouchableOpacity>
	);
};
