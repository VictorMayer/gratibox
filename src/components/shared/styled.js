import styled from "styled-components";

const Collapsed = styled.div`
    background: rgba(224, 209, 237, 0.62);
    border-radius: 5px;
    padding: 0px 12px;
    height: 44px;
    font-size: 18px;
    font-weight: 700;
    color: #4D65A8;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Expanded = styled.div`
    background: rgba(224, 209, 237, 0.62);
    border-radius: 5px;
    padding: 12px 8px 10px 12px;
    min-height: 44px;
    font-size: 18px;
    font-weight: 700;
    color: #4D65A8;
    display: flex;
    flex-direction: column;
`

const ExpandedLabel = styled.div`
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    .icon{
        font-size: 20px;
    }
`

const CollapsedLabel = styled.div`
    display: flex;
    justify-content: space-between;
    .icon{
        font-size: 20px;
    }
    .masked-input{
        background: inherit;
        border:none;
        width: 100%;
        height: 100%;
        outline: none;
        font-size: inherit;
        color: inherit;
        &::placeholder{
            color: #999;
        }
    }
`

const WelcomeHeader = styled.div`
    width: 100%;
    text-align: center;
    
    .greetings{
        font-size: 28px;
        font-weight: 500;
        letter-spacing: 0.2px;
        padding-top: 44px;
    }
    .inspirational{
        font-size: 18px;
        font-weight: 300;
        margin-top: 30px;
        padding: 0px 15px;
        line-height: 21px;
    }

    *{
        color: #fff;
        cursor: default;
    }
`;

const SignButton = styled.button`
    width: 236px;
    height: 56px;
    background: #8c97ea;
    color: #fff;
    border-radius: 10px;
    margin-top: 62px;
    border: none;
    font-size: 32px;
    font-weight: 700;
    cursor: pointer;
    outline: none;
`;

const SignInput = styled.input`
    width: 325px;
    height: 64px;
    border-radius: 10px;
    border: 1px solid #604848;
    outline: none;
    font-size: 24px;
    font-weight: 500;
    padding-left: 18px;
    color: #4D65A8;
    background: ${props => props.disabled ? '#ccc' : '#fff' };
    
    &::placeholder{
        color: rgba(96, 72, 72, 0.4);
    }
`;

const SignStyles = styled.form`
    padding-top: 50px;
    width: 100%;
    row-gap: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SignContainer = styled.div`
    width: 100vw;
    height:100vh;
    padding-top: 49px;
`;

const SwitchSign = styled.p`
    margin-top: 25px;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
`;

export {
    WelcomeHeader,
    SignStyles,
    SignInput,
    SignButton,
    SignContainer,
    SwitchSign,
    Collapsed,
    CollapsedLabel,
    Expanded,
    ExpandedLabel,
}