import axios from "axios";

const fetchUser = async (handle) => {
  try {
    // let { data } = await axios.get(`http://localhost:8080/github/${handle}`);
    console.log(handle)
    let { data } = await axios.post(`http://localhost:8080/github/get`,{userName:handle});
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchUserRepo = async (handle) => {
  try {
    let { data } = await axios.post(`http://localhost:8080/github/search`,{userName:handle});
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchUser, fetchUserRepo };
