import { useNavigate } from "react-router";
import { useContext } from "react";
import styled from "styled-components";
import Image02 from '../../assets/image02.jpg';
import Image03 from '../../assets/image03.jpg';
import UserContext from "../../contexts/UserContext.js"; 

export default function Introduction() {
    const { user, setSubInfo } = useContext(UserContext);
    const navigate = useNavigate();

    function startMonthlySubscription() {
        setSubInfo({ monthly: true, });
        navigate('/subscription/new');
    }

    function startWeeklySubscription() {
        setSubInfo({ weekly: true, });
        navigate('/subscription/new')
    }

    return(
        <PageContainer>
            <IntroHeader>
                <p className="greetings">Bom te ver por aqui, {user.name}</p>
                <p className="inspirational">Você ainda não assinou um plano, que tal começar agora? </p>
            </IntroHeader>
            <PlansContainer>
                <IntroStyles>
                    <img src={Image02} alt="woman-meditating" />
                    <p>Você recebe um box por semana. <br/> Ideal para quem quer exercer a gratidão todos os dias.</p>
                    <button onClick={startWeeklySubscription}>Assinar</button>
                </IntroStyles>
                <IntroStyles>
                    <img src={Image03} alt="woman-meditating" />
                    <p>Você recebe um box por mês. <br/><br/> Ideal para quem está começando agora.</p>
                    <button onClick={startMonthlySubscription}>Assinar</button>
                </IntroStyles>
            </PlansContainer>
        </PageContainer>
    )
}

const PlansContainer = styled.div`
    overflow: scroll;
    padding-top: 60px;
    padding-bottom: 40px;
`

const IntroHeader = styled.div`
    width: 100%;
    text-align: start;
    padding-left: 16px;
    margin-top:35px;
    margin-bottom: 10px;
    
    .greetings{
        font-size: 26px;
        font-weight: 500;
        letter-spacing: 0.2px;
        padding-top: 44px;
    }
    .inspirational{
        font-size: 18px;
        font-weight: 300;
        margin-top: 30px;
        line-height: 21px;
    }

    *{
        color: #fff;
        cursor: default;
    }
`;

const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const IntroStyles = styled.div`
    &:nth-child(1){
        margin-bottom: 100px;
        & button{
            margin-top: 30px;
        }
    }
    width:calc(100% - 18px);
    height: 400px;
    margin: 0px 9px;
    background: #E5CDB3;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        border-radius: inherit;
        height: 219px;
        object-fit: cover;
        width:100%;
    }

    p{
        font-size: 18px;
        font-weight: 700;
        margin-top: 22px;
        padding: 0px 25px;
        line-height: 23px;
        color: #4D65A8;
    }

    button{
        border-radius: 10px;
        margin-top: 8px;
        font-weight: 500;
        font-size: 24px;
        width: 168px;
        height: 39px;
        background: #8C97EA;
        outline: none;
        border: none;
        color: #fff;
    }


`