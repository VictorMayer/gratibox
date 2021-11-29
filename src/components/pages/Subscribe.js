import { useNavigate } from "react-router";
import { sendAlert } from "../shared/alerts";
import { useContext, useState, useEffect } from "react";
import UserContext from "../../contexts/UserContext";
import Image04 from '../../assets/image04.jpg';
import styled from "styled-components";
import PlanType from './PlanType.js';
import Products from './Products.js';
import Delivery from './Delivery.js';


export default function Subscribe() {
    const { user, subInfo, setSubInfo } = useContext(UserContext);
    const [collapsed, setCollapsed] = useState({ plan: true, delivery: true, products: true }); 
    const [products, setProducts] = useState({ tea: false, incense: false, organic: false });
    const [date, setDate] = useState({date1: false, date2: false, date3: false});
    const [opt, setOpt] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (subInfo.delivery) return;
        if (subInfo.monthly) {
            setOpt(['Dia 01', 'Dia 10', 'Dia 20']);
            setDate({date1: false, date2: false, date3: false});
        }
        if (subInfo.weekly) {
            setOpt(['Segunda', 'Quarta', 'Sexta']);
            setDate({date1: false, date2: false, date3: false});
        }
    }, [subInfo.monthly, subInfo.weekly]);  // eslint-disable-line react-hooks/exhaustive-deps

    function next() {
        const unfilledPlan = (!subInfo.monthly && !subInfo.weekly);
        const unfilledProducts = (!products.tea && !products.incense && !products.organic);
        if (unfilledPlan || unfilledProducts || !subInfo.delivery) return sendAlert('warning', 'Campos não preenchidos!', 'Você deve escolher pelo menos um item em cada seção!');
        navigate('/subscription/address');
    }

    return(
        <PageContainer>
            <WelcomeHeader>
                <p className="greetings">Bom te ver por aqui, {user.name}</p>
                <p className="inspirational">"Agradecer é arte de atrair coisas boas"</p>
            </WelcomeHeader>
            <ContentWrapper>
                <img src={Image04} alt="woman-meditating" />
                <SubscribeContent>
                    <PlanType collapsed={collapsed} setCollapsed={setCollapsed} subInfo={subInfo} setSubInfo={setSubInfo} />
                    <Delivery collapsed={collapsed} setCollapsed={setCollapsed} opt={opt} date={date} setDate={setDate} subInfo={subInfo} setSubInfo={setSubInfo} />
                    <Products collapsed={collapsed} setCollapsed={setCollapsed} products={products} setProducts={setProducts} />
                </SubscribeContent>
            </ContentWrapper>
            <StyledButton onClick={next}>Próximo</StyledButton>
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
`