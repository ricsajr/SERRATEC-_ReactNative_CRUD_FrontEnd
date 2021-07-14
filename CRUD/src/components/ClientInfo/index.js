import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

export const ClientInfo = ({ label, info }) => {
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.font}>{label}</Text>
				<Text style={styles.fontDados}>{info}</Text>
			</View>
		</View>
	);
};
