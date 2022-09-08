import React, { useState, useEffect } from 'react'
import { GetPost } from './api'
import { GlobalContext } from './GlobalContext'
import { useNavigate } from 'react-router-dom';
import { goLogin } from '../Routes/Coordinator';
 


export default function GlobalState(props) {
    const [ list, setList ] = useState("");
    const [ page, setPage ] = useState(1);
    const [ comment, setComment] = useState("");
    const [counter, setCounter] = useState(0)
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem("token");
        if(!token) { goLogin(navigate) }
      },[]);

    useEffect (() => {
        const postData = async () => {
            const listData = await GetPost(`posts?page=${page}&size=20`);
            setList(listData) }
        postData()
    }, [counter, page])
    const values = {list, page, setPage, comment, setComment, counter, setCounter, page, setPage }
    const Provider = GlobalContext.Provider
  return ( 
        <Provider value={values}>{props.children}</Provider>
  )
}
