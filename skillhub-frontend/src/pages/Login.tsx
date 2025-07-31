import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { login } from "../services/authServices";

export default function Login(){
    
    const [submit, setSubmit] = useState(false);
    const navigate = useNavigate(); 

    // Peticiones controladas para el email y password 
    const [values, setValues] = useState({
        email: "",
        password: "",
    })
    // HandelChange para las llamadas llave/valor
    // React.ChangeEvent<HTMLInputElement> == Funciona para inputs individules como name y value
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: value
        })
    }
    // React.FormEvent<HTMLFormElement> == Funciona para paramentro de tipo expicitos
    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmit(true);

        const {email, password} = values;
        try{
            const { token, user } = await login(email, password);
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));

            navigate("/profile");
        } catch (error){
            alert(error)
        }
    }


    return (
    <>

        <h1>Inicio de sesión</h1>

        <form onSubmit={handleLogin} >
            {/* Email */}
            <input type="email" 
                    name="email" value={values.email} 
                    onChange={handleChange}
                    placeholder="Correo Electronico" 
                    required
                    />
            {/* Password */}
            <input type="password" 
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Contraseña"
                    required 
                    />
            {/* Botones para guardar y cancelar */}
            <div className="d-flex justify-content-center gap-3 mt-4">
                <button type="submit" className="btn btn-success boton-igual" disabled={submit}>{submit ? 'Inciando sesión...' : 'Iniciar sesión'}</button>
            </div>
        </form>
    </>
    )
}
