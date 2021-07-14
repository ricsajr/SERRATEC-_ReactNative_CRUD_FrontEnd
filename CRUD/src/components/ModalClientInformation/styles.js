import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../Global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		width: 316,
		height: 650,
		backgroundColor: "#FFFFFF",
		borderRadius: 20,
	},
	header: {
		justifyContent: "center",
		flexDirection: "row",
	},
	containerRow: {
		flexDirection: "row",
	},
	content: {},
	svg: {
		elevation: 30,
		paddingLeft: 20,
	},
	viewEstado: {},
	fecharButton: {
		marginTop: 30,
		alignItems: "center",
	},
});

/* bar: {
	width: 39,
	height: 2,
	borderRadius: 2,
	backgroundColor: COLORS.secondary30,
	alignSelf: "center",
	marginTop: 13,
	marginBottom: 103,
}, */
