import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../Login/login'
import Feed from '../Feed/feed'
import Post from '../Post/post'
import Signup from '../SignUp/signup'
import  GlobalState  from '../Components/GlobalState'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}/>
                <Route path="login/" element={<Login/>}/>
                <Route path="feed/" element={<GlobalState><Feed/></GlobalState>}/>
                <Route path="posts/:id" element={<GlobalState><Post/></GlobalState>}/>
                <Route path="signup/" element={<Signup/>}/>
            </Routes>
        </BrowserRouter>
    )
}