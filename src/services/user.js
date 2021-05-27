import axios from 'axios';

export default {
    registerUser(userDetail) {
        console.log('axios', userDetail);
        return axios.post('/userRegister', userDetail);
    },

    registerAdmin(userDetail) {
        console.log('axios', userDetail);
        return axios.post('/adminRegister', userDetail);
    },

    loginUser(loginCredentials) {
        return axios.post('/userLogin', loginCredentials);
    },

    loginAdmin(loginCredentials) {
        return axios.post('/adminLogin', loginCredentials);
    },

    fetchAllBooks() {
        return axios.get('/books');
    },

    forgotPassword(email) {
        return axios.post('/forgotPassword', email);
    },

    addToBag(bookId) {
        return axios.put(`/book/addtobag/${bookId}`);
    },

    removeItemFromCart(bookId) {
        return axios.put(`/book/removeFromBag/${bookId}`);
    },

    addBook(book) {
        return axios.post('/book', book);
    },

    deleteBook(bookId) {
        console.log('bookId', bookId);
        return axios.delete(`/deleteBook/${bookId}`);
    }
};



