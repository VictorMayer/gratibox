import { useState } from "react";
import { sendAlert } from "../shared/alerts";
import { sendNewUser } from "../../services/Gratibox";
import { WelcomeHeader, SignInput, SignStyles, SignButton, SignContainer, } from "../shared/styled";
import { useNavigate } from "react-router";
import Loader from "react-loader-spinner";

export default function SignUp() {
    const [ data, setData ] = useState({ name: "", email: "", password: "", confirmPassword: "", });
    const [ requesting, setRequesting ] = useState(false);
    const navigate = useNavigate();

    function register(e) {
        e.preventDefault();
        const { name, email, password } = data;
        if (data.confirmPassword !== password) {
            setData({ ...data, password: "", confirmPassword: "", });
            return sendAlert('warning', 'Opa! :(', 'As senhas devem ser iguais!');
        }
        setRequesting(true);
        sendNewUser({ name, email, password })
            .then(answer => {
                setRequesting(false);
                sendAlert('success', ':)', 'Cadastro Concluído com Sucesso!');
                navigate('/sign-in');
            }).catch(answer => {
                console.log(answer.response);
                setData({ ...data, password: "", confirmPassword: "", });
                setRequesting(false);
                if (!answer.response) return sendAlert('error', 'Opa! :(', 'Não foi possivel conectar-se ao servidor!');
                return sendAlert('error', 'Opa! :(', answer.response.data);
            });

    }

    return(
        <SignContainer>
            <WelcomeHeader>
                <p className="greetings" >Bem vindo ao GratiBox</p>
            </WelcomeHeader>
            <SignStyles disabled={requesting} onSubmit={register}>
                <SignInput disabled={requesting} required placeholder="Nome" type="text" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} ></SignInput>
                <SignInput disabled={requesting} required placeholder="Email" type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} ></SignInput>
                <SignInput disabled={requesting} required placeholder="Senha" type="password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} ></SignInput>
                <SignInput disabled={requesting} required placeholder="Confirmar senha" type="password" value={data.confirmPassword} onChange={(e) => setData({ ...data, confirmPassword: e.target.value })} ></SignInput>
                <SignButton disabled={requesting} type="submit">{ requesting ? <Loader type="ThreeDots" color="#FFFFFF" height={18} /> : 'Cadastrar' }</SignButton>
            </SignStyles>
        </SignContainer>
    )
}

