import styled from "styled-components";
import Loader from "react-loader-spinner";
import { useNavigate } from "react-router";
import { sendAlert } from "../shared/alerts";
import { useContext, useEffect } from "react";
import { getUser } from "../../services/Gratibox";
import { useState } from "react/cjs/react.development";
import { WelcomeHeader, SignInput, SignStyles, SignButton, SignContainer, SwitchSign } from "../shared/styled";
import UserContext from '../../contexts/UserContext.js';

export default function SignIn() {
    const [ data, setData ] = useState({ email: "", password: "", });
    const [ requesting, setRequesting ] = useState(false);
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user.token) navigate('/subscription/intro');   
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    function login(e) {
        e.preventDefault();
        setRequesting(true);
        getUser(data)
            .then(answer => {
                setRequesting(false);
                setUser(answer.data);
                localStorage.setItem("user", JSON.stringify(answer.data));
                navigate('/subscription/intro');
            })
            .catch(answer => {
                setRequesting(false);
                setData({ ...data, password: "", });
                if (!answer.response) return sendAlert('error', 'Opa! :(', 'Não possivel conectar-se ao servidor!');
                return sendAlert('error', 'Opa! :(', answer.response.data);
            });
    }

    return(
        <SignContainer>
            <WelcomeHeader>
                <p className="greetings" >Bem vindo ao GratiBox</p>
            </WelcomeHeader>
            <SignStyles disabled={requesting} onSubmit={login}>
                <SignInput disabled={requesting} required placeholder="Email" type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} ></SignInput>
                <SignInput disabled={requesting} required placeholder="Senha" type="password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} ></SignInput>
                <BlankSpace/>
                <SignButton disabled={requesting} type="submit">{ requesting ? <Loader type="ThreeDots" color="#FFFFFF" height={18} /> : 'Login' }</SignButton>
                <SwitchSign onClick={() => navigate('/sign-up')}>Ainda não sou grato</SwitchSign>
            </SignStyles>
        </SignContainer>
    )
}

const BlankSpace = styled.div`
    height: 70px;
`