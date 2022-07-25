import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../Login/login'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}/>
                <Route path="feed/" element={<Feed/>}/>
                <Route path="posts" element={<Post/>}/>
                <Route path="signup/" element={<Signup/>}/>
            </Routes>
        </BrowserRouter>
    )
}