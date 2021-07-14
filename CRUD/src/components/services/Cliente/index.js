import { api } from "../api";

export const getCliente = () => {
	return api.get("/cliente").then((res) => res.data);
};

export const getClientById = (id) => {
	return api.get(`/cliente/${id}`).then((res) => res.data);
};

export const deleteCliente = (id) => {
	return api.delete(`/cliente/${id}`).then((res) => res.data);
};

export const updateCliente = (id, cliente) => {
	return api.put(`/cliente/${id}`, cliente).then((res) => res.data);
};

export const addCliente = (cliente) => {
	return api.post("/cliente/", cliente).then((res) => res.data);
};
