import React from "react";
import { COLORS, FONT } from "../../Global/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		padding: 15,
	},
	textContainer: {
		height: 70,
		width: "100%",
		backgroundColor: "#FFFFFF",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 25 },
		shadowOpacity: 0.07,
		shadowRadius: 15,
		elevation: 8,
		borderRadius: 20,
		justifyContent: "center",
	},
	inside: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginRight: 20,
		backgroundColor: "#fff",
	},
	iconContainer: {
		flexDirection: "row",
	},
	icon: {
		marginLeft: 15,
	},
	textInside: {
		marginLeft: 15,
		color: COLORS.ELEMENT_COLOR,
		fontFamily: FONT.TEXT_500,
		fontSize: 14,
	},
});
