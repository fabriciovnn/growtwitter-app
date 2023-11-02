import axios from "axios";

const apiService = axios.create({
  baseURL: "https://growtwitter-api-kyvr.onrender.com",
});

export default apiService;

export interface ResponseApi {
  code: number;
  ok: boolean;
  mensagem: string;
  dados?: any;
}
