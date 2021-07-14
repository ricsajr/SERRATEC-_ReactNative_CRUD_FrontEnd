import { StatusBar } from "expo-status-bar";
import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import { Routes } from "./src/routes/";
import { ClientProvider } from "./src/Contexts/ClientContext";

import {
	Roboto_400Regular,
	Roboto_500Medium,
	Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
	const [fontsLoaded] = useFonts({
		Roboto_400Regular,
		Roboto_500Medium,
		Roboto_700Bold,
	});
	if (!fontsLoaded) {
		return <AppLoading />;
	}
	return (
		<ClientProvider>
			<Routes />
			<StatusBar
				barStyle="light-content"
				backgroundColor="transparent"
				translucent
			/>
		</ClientProvider>
	);
}
