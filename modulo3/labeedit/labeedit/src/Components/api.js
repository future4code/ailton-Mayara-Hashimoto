import axios from "axios";

const baseUrl = "https://labeddit.herokuapp.com"

export const SignMeUp = async (body) => {
    try {
        const res = await axios
        .post(`${baseUrl}/users/signup`, body)
        return ( res.data )
    } catch (error) {
        alert("Error! Por favor, tente novamente!")
    }
};

export const GetPost = async (path) => {
    const token = localStorage.getItem("token");
    try { const res = await axios
        .get(`${baseUrl}/${path}`, {
            headers: { authorization: token }
        })
        return res
    } catch (error) { alert("Ops, algo deu errado, tente novamente") }
};
export const GetComments = async (id, setData) => {
    const token = localStorage.getItem("token");
    try { const res = await axios
        .get(`${baseUrl}/posts/${id}/comments`, {
            headers: { authorization: token }
        })
        console.log(res)
        setData(res.data)
    } catch (error) {
        console.log(error)
    }
};
export const LogMeIn = async (body) => {
    try {
        const res = await axios
        .post(`${baseUrl}/users/login`, body)
        localStorage.setItem("token", res.data.token)
    } catch (error) { alert("Por favor, tente novamente!") }
};
export const CreatePost = async (body) => {
    const token = localStorage.getItem("token");
    try { const res = await axios
        .post(`${baseUrl}/posts`, body, 
        { headers: {authorization: token} })
        alert("Post criado com sucesso")
    } catch (error) {
        alert("Ocorreu um erro. Por favor tente novamente")
    }
};
export const CreateComment = async (body, id) => {
    const token = localStorage.getItem("token");
    try { const res = await axios
        .post(`${baseUrl}/posts/${id}/comments`, body, 
        { headers: {authorization: token} })
        alert("Comentário adicionado com sucesso")
    } catch (error) {
        alert("Algo deu errado, por favor, tente novamente")
    }
};
export const PostVote = async (id) => {
    const token = localStorage.getItem("token");
    try { const res = await axios
        .post(`${baseUrl}/posts/${id}/votes`,
        { headers: {authorization: token} }) 
        alert("Obrigads por seu voto!")
        console.log(res)
    } catch (error) {
        console.log(error)
    }
};
export const CommentVote = async (id) => {
    const token = localStorage.getItem("token");
    try { const res = await axios
        .post(`${baseUrl}/comments/${id}/votes`,
         { headers: {authorization: token} })
         alert("Obrigads por seu voto!")
         console.log(res)
    } catch (error) {
        console.log(error)
    }
};

export const ChangePVote = async (body, id) => {
    const token = localStorage.getItem("token");
    try { const res = await axios
        .put(`${baseUrl}/posts/${id}/votes`, body,
        { headers: {authorization: token} })
        console.log(res)
    } catch (error) {
        console.log(error)
    }
};
export const ChangeCVote = async (body, id) => {
    const token = localStorage.getItem("token");
    try { const res = await axios
        .put(`${baseUrl}/comments/${id}/votes`, body,
        { headers: {authorization: token} })
        console.log(res)
    } catch (error) {
        console.log(error)
    }
};
export const DeleteComVote = async (id) => {
    const token = localStorage.getItem("token");
          axios
         .delete(`${baseUrl}/comments/${id}/votes`, 
         {headers: {authorization: token} })
    
}
export const DeleteVote = async (id) => {
    const token = localStorage.getItem("token");

        axios
        .delete(`${baseUrl}/posts/${id}/votes`, 
        {headers: {authorization: token} })
   
}
