import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export async function getData(dataName: String) {
    axios.get(`${API_URL}/${dataName}`)
        .then(function (response) {
            console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        })
}