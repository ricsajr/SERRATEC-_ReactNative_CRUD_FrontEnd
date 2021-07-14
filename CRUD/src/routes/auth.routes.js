import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { COLORS } from "../Global/styles/theme";

import { Home } from "../screens/Home";
import { AddClient } from "../screens/AddClient";
import { UpdateClient } from "../screens/UpdateClient";

const { Navigator, Screen } = createStackNavigator();
export const AuthRoutes = () => {
	return (
		<Navigator
			headerMode="none"
			screenOptions={{
				cardStyle: {
					backgroundColor: COLORS.backgroundColor,
				},
			}}
		>
			<Screen name="Home" component={Home} />
			<Screen name="UpdateClient" component={UpdateClient} />
			<Screen name="AddClient" component={AddClient} />
		</Navigator>
	);
};
