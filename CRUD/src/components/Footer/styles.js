import React from "react";
import { COLORS } from "../../Global/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 63,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
		bottom: 0,
		shadowColor: "#000",
		shadowOffset: { width: 10, height: 25 },
		shadowOpacity: 0.07,
		shadowRadius: 10,
		elevation: 26,
	},
	content: {
		borderRadius: 8,
	},
});
