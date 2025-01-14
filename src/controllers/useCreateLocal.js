import axios from "axios";

const userCreateLocal = async (nomeLocal) => {
  const response = await axios.post("http://192.168.9.247:9010/local/create", {
    nomeLocal: nomeLocal,
  });

  if (response.success === true) {
    return true;
  } else {
    return false;
  }
};

export default userCreateLocal;
