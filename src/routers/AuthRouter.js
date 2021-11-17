import { Route, Routes } from "react-router"
import Dashboard from "../components/Dashboard"
import NotFound from "../components/NotFound";
import MiPrimerComponente from "../components/MiPrimerComponente";
import { Calculadora } from "../components/Calculadora";

const AuthRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Dashboard />}>      
                    <Route index element={<MiPrimerComponente />} />
                    <Route path="calculadora" element={<Calculadora />} />  
                    <Route path="*" element={<NotFound/>}/>         
                </Route>
                {/*-------Aqui mis otras rutas y de último el not found
                <Route path="*" element={<NotFound/>}/>
                -------*/}

            </Routes>
        </>
    )
}

export default AuthRouter;
