import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import Login from "../pages/login/login";

const RootRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>

            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
};

export default RootRouter;
