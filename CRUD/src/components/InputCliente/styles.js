import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../Global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		width: 350,
		height: 82,
		marginVertical: 10,
	},
	label: {
		fontFamily: FONT.TEXT_400,
		fontSize: 15,
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#CCCCCC",
		height: 56,
		padding: 16,
		marginTop: 8,
		borderRadius: 8,
		fontSize: 15,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 25 },
		shadowOpacity: 0.07,
		shadowRadius: 15,
		elevation: 8,
		borderRadius: 20,
		backgroundColor: "#fff",
	},
});
