import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../Global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		width: 115,
		height: 36,
		borderRadius: 20,
		alignItems: "center",
		justifyContent: "center",
		marginHorizontal: 10,
	},
	text: {
		color: "#FF2525",
		fontFamily: FONT.TEXT_500,
	},
});
