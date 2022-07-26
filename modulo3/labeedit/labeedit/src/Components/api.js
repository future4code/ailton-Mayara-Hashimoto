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

export const GetPost = async () => {
    const token = localStorage.getItem("token");
    try { const res = await axios
        .get(`${baseUrl}/posts`, {
            headers: { authorization: token }
        })
        console.log(res)
    } catch (error) { console.log(error)}
};
export const LogMeIn = async (body) => {
    try {
        const res = await axios
        .post(`${baseUrl}/users/login`, body)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
};
export const CreatePost = async (body) => {
    const token = localStorage.getItem("token");
    try { const res = await axios
        .post(`${baseUrl}/posts`, body, 
        { headers: {authorization: token} })
        alert("Post criado com sucesso")
        console.log(res)
    } catch (error) {
        alert("Ocorreu um erro. Por favor tente novamente")
        console.log(error)
    }
};
export const CreateComment = async (body, id) => {
    const token = localStorage.getItem("token");
    try { const res = await axios
        .post(`${baseUrl}/post/${id}/coments`, body, 
        { headers: {authorization: token} })
        alert("Comentário adicionado com sucesso")
        console.log(res)
    } catch (error) {
        alert("Algo deu errado, por favor, tente novamente")
        console.log(error)
    }
};
export const DeleteComVote = async (id) => {
    const token = localStorage.getItem("token");
    if (window("Tem certeza que deseja deletar o vote deste comentário?")) {
        axios
        .delete(`${baseUrl}/comments/${id}/votes`, 
        {headers: {authorization: token} })
    };
}
export const DeleteVote = async (id) => {
    const token = localStorage.getItem("token");
    if (window("Tem certeza que deseja deletar o vote deste post?")) {
        axios
        .delete(`${baseUrl}/posts/${id}/votes`, 
        {headers: {authorization: token} })
    };
}
