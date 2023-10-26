import apiService, { ResponseApi } from "./api.service";

interface RequestLogin {
  email: string;
  password: string;
}

export async function login(dados: RequestLogin): Promise<ResponseApi> {
  try {
    const response = await apiService.post("/usuarios/login", dados);

    return {
      code: response.data.code,
      ok: response.data.ok,
      mensagem: response.data.mensagem,
      dados: response.data.dados,
    };
  } catch (error: any) {
    return {
      code: error.response.data.code,
      ok: error.response.data.ok,
      mensagem: error.response.data.mensagem,
    };
  }
}
