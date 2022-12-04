// 路由文件 导入所有的页面
import App from "../App";
import List from "../Pages/List";
import Edit from "../Pages/Edit"
import Means from "../Pages/Means"
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const BaseRouters = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="/list" element={<List/>}></Route>
                <Route path="/edit" element={<Edit/>}></Route>
                <Route path="means" element={<Means/>}></Route>
            </Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route></Route>
        </Routes>
    </BrowserRouter>
)

export default BaseRouters;