import styled from "styled-components";
import { Collapsed, Expanded, ExpandedLabel, CollapsedLabel, } from "../shared/styled";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import { RiCheckboxBlankFill, RiCheckboxLine } from "react-icons/ri";
import { sendAlert } from "../shared/alerts";
import { useEffect } from "react";

export default function Delivery(props) {
    const { collapsed, setCollapsed, opt, date, setDate, subInfo, setSubInfo } = props;

    useEffect(() => {
        if (date.date1) return setSubInfo({ ...subInfo, delivery: opt[0]});
        if (date.date2) return setSubInfo({ ...subInfo, delivery: opt[1]});
        if (date.date3) return setSubInfo({ ...subInfo, delivery: opt[2]});
        return setSubInfo({ ...subInfo, delivery: false });
    }, [date]); // eslint-disable-line react-hooks/exhaustive-deps

    const icon1 = date.date1
        ? <RiCheckboxLine onClick={() => setDate({ date1: !date.date1, date2: false, date3: false })} className='icon-checked'/>
        : <RiCheckboxBlankFill onClick={() => setDate({ date1: !date.date1, date2: false, date3: false })} className='icon'/>
    ;
    const icon2 = date.date2
        ? <RiCheckboxLine onClick={() => setDate({ date1: false, date2: !date.date2, date3: false })} className='icon-checked'/>
        : <RiCheckboxBlankFill onClick={() => setDate({ date1: false, date2: !date.date2, date3: false })} className='icon'/>
    ;
    const icon3 = date.date3
        ? <RiCheckboxLine onClick={() => setDate({ date1: false, date2: false, date3: !date.date3 })} className='icon-checked'/>
        : <RiCheckboxBlankFill onClick={() => setDate({ date1: false, date2: false, date3: !date.date3 })} className='icon'/>
    ;

    function expandDelivery() {
        if (!subInfo.monthly && !subInfo.weekly) {
            sendAlert('info', '', 'Você deve escolher um plano de assinatura antes da data de entrega');
            setCollapsed({ plan: false, delivery: true, products: true });
            return;
        }
        setCollapsed({ plan: true, delivery: !collapsed.delivery, products: true })
    }

    if (collapsed.delivery) return (
        <Collapsed>
            <CollapsedLabel>
                <p>Entrega</p>
                <HiOutlineChevronDown className='icon' onClick={expandDelivery}/>
            </CollapsedLabel>
        </Collapsed>
    );

    return(
        <Expanded>
            <ExpandedLabel>
                <p>Entrega</p>
                <HiOutlineChevronUp className='icon' onClick={() => setCollapsed({ plan: true, delivery: !collapsed.delivery, products: true })}/>
            </ExpandedLabel>
            <MyInputs>
                <div>{icon1}<Option>{opt[0]}</Option></div>
                <div>{icon2}<Option>{opt[1]}</Option></div>
                <div>{icon3}<Option>{opt[2]}</Option></div>
            </MyInputs>
        </Expanded>
    )
}

const Option = styled.span`
    color: #4D65A8;
    margin-left: 6px;
    padding-top: 3px;
    font-weight: 400;
`

const MyInputs = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 10px;
    justify-content: space-between;
    padding-left: 4px;
    padding-right: 64px;
    .icon{
        color: #fff;
        font-size: 22px;
    }
    .icon-checked{
        font-size: 22px;
    }
    div {
        display: flex;
        align-items: center;
    }
`