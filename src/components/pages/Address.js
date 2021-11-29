import { sendSubscription } from "../../services/Gratibox";
import UserContext from "../../contexts/UserContext"
import Image04 from '../../assets/image04.jpg';
import { useContext, useState } from "react";
import { sendAlert } from "../shared/alerts";
import { useNavigate } from "react-router";
import AddressForm from "./AddressForm";
import styled from "styled-components"

export default function Address() {
    const { subInfo, user } = useContext(UserContext);
    const [address, setAddress] = useState({ full_name: "", description: "", postal_code: "", city: "", state_id: "", });
    const navigate = useNavigate;

    function subscribe() {
        const { full_name, description, postal_code, city, state_id } = address;
        if (!full_name || !description || !postal_code || !city || !state_id) return sendAlert('info', 'Opa...', 'Todos os campos devem ser devidamente preenchidos');
        if (Number(postal_code.replace('-','')).toString().length !== 8) return sendAlert('warning', 'Opa...','CEP inválido');
        sendSubscription({ ...subInfo, user, address })
            .then(answer => {
                console.log(answer.data);
                navigate('/subscription/details');
            }).catch(answer => {
                sendAlert('error', 'Opa...', answer?.response?.data);
            });
    }

    return (
        <PageContainer>
            <WelcomeHeader>
                <p className="greetings">Bom te ver por aqui, {user.name}</p>
                <p className="inspirational">"Agradecer é arte de atrair coisas boas"</p>
            </WelcomeHeader>
            <ContentWrapper>
                <img src={Image04} alt="woman-meditating" />
                <SubscribeContent>
                    <AddressForm address={address} setAddress={setAddress} />
                </SubscribeContent>
            </ContentWrapper>
            <StyledButton onClick={subscribe}>Finalizar</StyledButton>
        </PageContainer>
    )
}

const SubscribeContent = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 7px;
    padding: 10px 20px;
    width: 100%;
    height: 100%;
    margin-top: 18px;
`

const StyledButton = styled.button`
    border-radius: 10px;
    margin-top: 10px;
    font-weight: 500;
    font-size: 24px;
    width: 202px;
    height: 39px;
    background: #8C97EA;
    outline: none;
    border: none;
    color: #fff;
`

const PageContainer = styled.div`
    width:100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    overflow: scroll;
`

const ContentWrapper = styled.div`
    width: calc(100% - 24px);
    height: 429px;
    border-radius: 10px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    img{
        border-radius: inherit;
        object-fit: cover;
        height: 172px;
        width: 100%;
    }
`
const WelcomeHeader = styled.div`
    width: 100%;
    text-align: center;
    
    .greetings{
        font-size: 26px;
        font-weight: 500;
        padding-top: 60px;
    }
    .inspirational{
        font-size: 18px;
        font-weight: 300;
        margin-top: 20px;
        margin-bottom: 30px;
        padding: 0px 15px;
        line-height: 21px;
    }

    *{
        color: #fff;
        cursor: default;
    }
`;