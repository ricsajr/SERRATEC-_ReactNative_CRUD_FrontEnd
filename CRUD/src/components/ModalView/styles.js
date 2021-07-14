import { StyleSheet } from "react-native";
import { COLORS } from "../../Global/styles/theme";

export const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		backgroundColor: COLORS.OVERLAY,

		alignItems: "center",
		justifyContent: "center",
	},
	// container: {
	// 	flex: 1,
	// 	width: "100%",
	// 	backgroundColor: "purple",
	// },
	// bar: {
	// 	width: 39,
	// 	height: 2,
	// 	borderRadius: 2,
	// 	backgroundColor: COLORS.ELEMENT_COLOR,
	// 	alignSelf: "center",
	// 	marginTop: 5,
	// },
});
