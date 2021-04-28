import axios from "axios";

export default {
    registerUser(userDetail) {
        console.log("axios", userDetail)
        return axios.post("/userRegister", userDetail);
    },

    loginUser(loginCredentials) {
        return axios.post("/userLogin", loginCredentials);
    },

    fetchAllBooks() {
        return axios.get("/books");
    },

    forgotPassword(email) {
        console.log("method called");
        return axios.post("/forgotPassword", email);
    }
}



