import React, { ReactNode } from "react";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import { View, Modal, ModalProps } from "react-native";

import { styles } from "./styles";

export function ModalView({ children, isVisible }) {
	return (
		<Modal animationType="slide" visible={isVisible}>
			<View style={styles.overlay}>{children}</View>
		</Modal>
	);
}
