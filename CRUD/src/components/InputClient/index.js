import React from "react";
import { View, Text, TextInput } from "react-native";

import { styles } from "./styles";

export const InputClient = ({
	label,
	placeHold,
	type,
	value,
	onChangeText,
}) => {
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.label}>{label}</Text>
			</View>
			<View>
				<TextInput
					placeholder={placeHold}
					style={styles.textInput}
					defaultValue={value}
					keyboardType={type === "numeric" ? "numeric" : "default"}
					onChangeText={onChangeText}
				/>
			</View>
		</View>
	);
};
