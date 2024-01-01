import axios from "axios";

axios.defaults.baseURL = "https://api-project-ila-f8d6f876a2c2.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;