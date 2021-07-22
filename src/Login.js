import { auth } from "./firebase";
import "./Login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const handleRegister = () => {
        if (!name) {
            return alert("Please enter a full name.")
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoURL: profilePic,
                        }))
                    })
            })
            .catch((err) => {
                alert(err);
            });
    }
    const handleLogin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((userAuth) => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoURL: userAuth.user.photoURL,
                }))
            })
            .catch(err => { alert(err); })
    }

    return (
        <div className="login">
            <img src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2003.png" alt="" />
            <form>
                <input type="text" placeholder="Full name (required if registering)" onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Profile pic URL (optional)" onChange={(e) => setProfilePic(e.target.value)} />
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" onClick={handleLogin}>Sign In</button>
            </form>
            <p>Not a member? <span className="login__register" onClick={handleRegister}> Register Now</span> </p>
        </div>
    )
}

export default Login
