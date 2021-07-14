import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		width: "100%",
		elevation: 30,
		marginTop: 70,
		paddingHorizontal: 35,
	},
	searchButton: {
		width: "100%",
		height: 70,
		backgroundColor: "#fff",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 25 },
		shadowOpacity: 0.07,
		shadowRadius: 10,
		borderRadius: 20,
		elevation: 26,
		paddingLeft: 45,
		color: "#D1D1D1",
		fontSize: 17,
	},
	svg: {
		elevation: 30,
		position: "absolute",
		top: 25,
		left: 50,
	},
});
