import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { db, auth } from "../../FirebaseConfig/FirebaseConfig"
import { Container, Row, Col, Form } from "react-bootstrap"
import Navbar from "../Navbar/Navbar"
export default function Signup() {
    let navigate = useNavigate()
    // signupWork
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [opt, setOpt] = useState('')
    const SignupHandler = (e) => {
        e.preventDefault();
        const user = {
            name,
            email,
            password,
            opt
        }
        auth.createUserWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => {
                // Signed in 
                let uid = userCredential.user.uid;
                user.id = uid
                db.ref('/').child('users').child(uid).set(user)
                setName('')
                setEmail('')
                setPassword('')
                setOpt('')
                alert("data saved")
                // ...
            })
            .catch((error) => {
                // var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });
        console.log(user)
    }

    //   loginwork
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const loginHandler = (e) => {
        e.preventDefault()
        const loginData = {
            loginEmail,
            loginPassword
        }
        auth.signInWithEmailAndPassword(loginData.loginEmail, loginData.loginPassword)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          db.ref().child("users").child(user.uid).get().then((snapshot) => {
            if (!snapshot.exists()) return;
            let userdata = snapshot.val()
            localStorage.setItem("logindata",JSON.stringify([userdata]));
                if(userdata?.opt === 1){
                    navigate('/Sale')
                }
                else if(userdata?.opt === 2){
                    navigate('/Buy')
                }
          })
        })
        .catch((error) => {
        //   var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage)
        });
    }
    return (
        <>
            <Container>
                <Navbar />
                <Row className="log-div mt-3">
                    <Col md={6}>
                        <div className="login-form">
                            <h3>Login</h3>
                            <Form onSubmit={loginHandler}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <button className="btn">Login</button>
                                </Form.Group>
                            </Form>

                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="Sinup-form">
                            <h3>Signup</h3>
                            <Form onSubmit={SignupHandler}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <Form.Group className='my-3'>
                                        <Form.Select value={opt} onChange={(e) => setOpt(e.target.value)}>
                                            <option>Who you are</option>
                                            <option value="1">Auctioneer</option>
                                            <option value="2">Bidder</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <button className="btn">Signup</button>
                                </Form.Group>
                            </Form>

                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
