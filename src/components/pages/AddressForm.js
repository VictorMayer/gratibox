import { Collapsed, CollapsedLabel, } from "../shared/styled";
import { HiOutlineSelector } from "react-icons/hi";
import InputMask from 'react-input-mask';
import styled from "styled-components";
import { useState } from "react";
import States from "./States";

export default function AddressForm(props) {
    const [type, setType] = useState({ name: false, address: false, postal: false, city: false, state: false });
    const { address, setAddress } = props;

    return(
        <>
        <Collapsed>
            <CollapsedLabel>
                {type.name ? <MyInput autoFocus value={address.full_name} onChange={(e) => setAddress({ ...address, full_name: e.target.value })} placeholder='Ex: João da Silva'/> : <p onClick={() => setType({ ...type, name: true})} >Nome Completo</p>}
            </CollapsedLabel>
        </Collapsed>
        <Collapsed>
            <CollapsedLabel>
                {type.address ? <MyInput autoFocus value={address.description} onChange={(e) => setAddress({ ...address, description: e.target.value })} placeholder='Ex: Rua Oscar Freire, 1402'/> : <p onClick={() => setType({ ...type, address: true})} >Endereço de entrega</p>}
            </CollapsedLabel>
        </Collapsed>
        <Collapsed>
            <CollapsedLabel>
                {type.postal ? <InputMask autoFocus value={address.postal_code} onChange={(e) => setAddress({ ...address, postal_code: e.target.value })} className="masked-input" mask={"99999-999"} placeholder='Ex: 00000-000'/> : <p onClick={() => setType({ ...type, postal: true})} >CEP</p>}
            </CollapsedLabel>
        </Collapsed>
        <Split>
            <SplitCollapsed>
                    <SplitLabel>
                    {type.city ? <MyInput autoFocus value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })} placeholder='Ex: São Paulo' /> : <p onClick={() => setType({ ...type, city: true})} >Cidade</p>}
                    </SplitLabel>
            </SplitCollapsed>
            <SplitCollapsed>
                    <SplitLabel >
                        {type.state
                            ? <States address={address} setAddress={setAddress} type={type} setType={setType} />
                            : <>
                                <p onClick={() => setType({ ...type, state: true })}>{address.state_id ? address.state_name : 'Estado' }</p>
                                <HiOutlineSelector onClick={() => setType({ ...type, state: true })} className='icon' /> 
                            </>
                        }
                    </SplitLabel>
            </SplitCollapsed>
        </Split>
        </>
    )
}

const MyInput = styled.input`
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
`

const Split = styled.div`
    display: flex;
    justify-content: space-between;
    overflow: hidden;
`

const SplitCollapsed = styled.div`
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
    &:nth-child(1){
        width: 180px;
    }
    &:nth-child(2){
        width: 120px;
    }
    
`
const SplitLabel = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        width:75%;
    }
    .icon{
        font-size: 24px;
    }
`