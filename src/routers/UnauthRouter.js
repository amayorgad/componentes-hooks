import { Route, Routes } from "react-router";
import Login from "../components/Login";
import NotFound from "../components/NotFound";

const UnauthRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    )
}

export default UnauthRouter;
