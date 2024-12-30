import axios from "axios";
const cookie = require("../utils/cookies");

class User {
  async UserLogin(cpf, senhadeUsuario) {
    try {
      if (!cpf || !senhadeUsuario) {
        throw new Error("CPF e senha são obrigatórios.");
      }

      const resposta = await axios.post("http://192.168.9.247:9010/login/loginHandle", {
        cpf: cpf,
        senhadeUsuario: senhadeUsuario,
      });
      
      console.log(resposta.data); 
      
      if (resposta.data.success && resposta.data.permissao === "admin" && resposta.data.status === 1) {
        console.log("estou aqui")
        cookie.setCookie("dadosdeUsuario", resposta.data, 1);
        return true;
      }
      
      return false;
      
    } catch (e) {
      console.error("Erro durante o login:", e.message || e);
      return false;
    }
  }
}

export default User;

// Para testes manuais:
// const user = new User();
// user.UserLogin("62185737376", "victor").then(console.log);
