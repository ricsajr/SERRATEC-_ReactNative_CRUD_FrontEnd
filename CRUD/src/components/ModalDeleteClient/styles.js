import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../Global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		width: 316,
		height: 161,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: COLORS.BACKGROUND,
		borderRadius: 20,
	},
	text: {
		marginTop: 10,
	},
	textContent: {
		fontFamily: FONT.TEXT_400,
		fontSize: 20,
	},
	buttons: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 30,
	},
});
