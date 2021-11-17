const { createContext, useState } = require("react");

//Crear contexto
const AuthContext = createContext();

//Crear el proveedor del contexto
const AuthProvider = ({children})=>{
    const [auth, setAuth] = useState(false);

    const handleAuth = (user, password)=>{
        console.log("Llamando a handleAuth de AuthContext...");
        if(user === "admin" && password === "123456"){
            setAuth(true);
        }else{
            alert('Acceso denegado');
        }        
    }

    const signOut = ()=>{
        setAuth(false);
    }

    const data = {auth, handleAuth, signOut};

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>

}

export {AuthProvider};
export default AuthContext;

