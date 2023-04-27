import axios from "axios";

const Basic_URL ='http://localhost:9000';

export const getAllBooks =()=>{
return axios.get(`${Basic_URL}/books`);
}

export const getBookById =(id)=>{
    return axios.get(`${Basic_URL}/books/${id}`);
    }

 export const addBook =(book)=>{
        return axios.post(`${Basic_URL}/books`,book);
        }

export const deleteBook =(id)=>{
return axios.delete(`${Basic_URL}/books/${id}`);
}