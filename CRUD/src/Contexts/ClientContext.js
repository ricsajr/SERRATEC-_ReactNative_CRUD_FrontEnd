import React, { createContext, useState } from "react";

export const ClientContext = createContext();

export const ClientProvider = ({ children }) => {
	const [cliente, setCliente] = useState();

	return (
		<ClientContext.Provider
			value={{
				cliente,
				setCliente,
			}}
		>
			{children}
		</ClientContext.Provider>
	);
};
