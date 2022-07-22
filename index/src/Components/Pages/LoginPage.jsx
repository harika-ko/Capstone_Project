import { useState } from "react"
import MainPage from "../MainPage"
import { useNavigate } from "react-router-dom"


const LoginPage = () => {
    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }

    const [user, setUser] = useState({ name: "", email: "" })
    const [error, setError] = useState("")

    const navigate = useNavigate()

    const Login = details => {
        console.log(details)

        if (details.email === adminUser.email && details.password === adminUser.password) {
            navigate('/HomePageFinal')
        } else {
            console.log("Details do not match")
        }
    }

    const Logout = () => {
        console.log("Logout")
    }

    return (
        <div>
            {(user.email !== "") ? (
                <>
                    <h2>Welcome, {user.name}</h2>
                    <button>Logout</button>
                </>
            ) : (<MainPage Login={Login} error={error} />)}
        </div>
    )
}

export default LoginPage