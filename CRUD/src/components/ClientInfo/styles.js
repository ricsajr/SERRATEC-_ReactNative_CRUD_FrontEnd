import { StyleSheet } from "react-native";
import { COLORS } from "../../Global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FFFFFF",
		margin: 4,
		marginHorizontal: 35,
	},
	font: {
		color: "#9A9A9A",
		fontSize: 13,
	},
	fontDados: {
		color: COLORS.ELEMENT_COLOR,
		fontFamily: COLORS.TITLE,
	},
});
