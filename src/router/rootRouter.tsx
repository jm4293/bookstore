import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import SignUp from "../pages/login/signUp";

const RootRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>

            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/login/register" element={<SignUp />} />
            </Routes>
        </>
    );
};

export default RootRouter;
