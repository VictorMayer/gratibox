import Image from '../../assets/image01.webp';
import styled from 'styled-components';
import { WelcomeHeader } from '../shared/styled';
import { useNavigate } from 'react-router';

export default function Welcome() {
    const navigate = useNavigate();

    return(
        <WelcomeStyles>
            <WelcomeHeader>
                <p className="greetings">Bem vindo ao GratiBox</p>
                <p className="inspirational">Receba em casa um box com chás, produtos orgânicos, incensos e muito mais...</p>
            </WelcomeHeader>
            <img alt="woman meditating" src={Image} />
            <WelcomeFooter>
                <button onClick={() => navigate('/sign-up')} >Quero começar</button>
                <p onClick={() => navigate('/sign-in')} >Já sou grato</p>
            </WelcomeFooter>
        </WelcomeStyles>
    )
}

const WelcomeFooter = styled.div`
    width:100%;
    height:20vh;
    background: #4D65A8;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    *{
        font-size: 18px;
        font-weight: 700;
        color: #fff;
    }

    button{
        width: 202px;
        height: 45px;
        border-radius: 10px;
        border: none;
        background: #8C97EA;
        cursor: pointer;
    }

    p{
        margin-top: 20px;
        cursor: pointer;
    }
`;

const WelcomeStyles = styled.div`
    width:100vw;
    height:100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    *{
        cursor:default;
    }

    img {
        width: 420px;
        position: fixed;
        bottom:12vh;
        left:calc(50vw - 210px);
        z-index:-1;
    }

`;