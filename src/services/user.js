import axios from "axios";

export default {
    registerUser(userDetail) {
        console.log("axios", userDetail)
        return axios.post("/userRegister", userDetail);
    },

    loginUser(loginCredentials) {
        return axios.post("/userLogin", loginCredentials);
    },
}



