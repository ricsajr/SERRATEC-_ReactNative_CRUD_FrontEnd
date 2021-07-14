import { StyleSheet } from "react-native";
import { COLORS } from "../../Global/styles/theme";

export const styles = StyleSheet.create({
	add: {
		backgroundColor: COLORS.BACKGROUND,
		borderRadius: 50,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 25 },
		shadowOpacity: 0.07,
		shadowRadius: 10,
		elevation: 26,
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		width: 70,
		height: 70,
		top: "82%",
		left: "80%",
	},
});
