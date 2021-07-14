import { StyleSheet, Dimensions } from "react-native";
import { COLORS, FONT } from "../../Global/styles/theme";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

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
});
