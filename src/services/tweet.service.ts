import apiService, { ResponseApi } from "./api.service";

interface ListarTweetsProps {
  userId: string;
  token: string;
}

export async function listarTweets(
  dados: ListarTweetsProps
): Promise<ResponseApi> {
  try {
    const resposta = await apiService.get("/tweets", {
      params: { user: dados.userId },
      headers: { Authorization: dados.token },
    });

    return {
      code: resposta.data.code,
      mensagem: resposta.data.mensagem,
      ok: resposta.data.ok,
      dados: resposta.data.dados,
    };
  } catch (error: any) {
    return {
      code: error.response.data.code,
      mensagem: error.response.data.mensagem,
      ok: error.response.data.ok,
    };
  }
}
