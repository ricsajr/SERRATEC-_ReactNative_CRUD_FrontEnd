import { StyleSheet } from "react-native";
import { COLORS } from "../../Global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		height: screenHeight,
		flex: 1,
	},
	scrollView: {
		width: screenWidth,
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 80,
	},
	address: {
		fontFamily: FONT.TEXT_500,
		fontSize: 18,
		marginBottom: 12,
		marginTop: 28,
		paddingRight: 275,
	},
	footer: {
		bottom: 0,
	},
});
