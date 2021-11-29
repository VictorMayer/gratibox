import { Collapsed, Expanded, ExpandedLabel, CollapsedLabel, } from "../shared/styled";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import { RiCheckboxBlankFill, RiCheckboxLine } from "react-icons/ri";
import styled from "styled-components";

export default function PlanType(props) {
    const { collapsed, setCollapsed, subInfo, setSubInfo } = props;

    function checkMonthly() {
        setSubInfo({ weekly: false, monthly: true });
    }

    function checkWeekly() {
        setSubInfo({ weekly: true, monthly: false })
    }

    const MonthlyIcon = subInfo.monthly 
        ? <RiCheckboxLine onClick={checkMonthly} className='icon-checked'/>
        : <RiCheckboxBlankFill onClick={checkMonthly} className='icon'/>
    ;
    
    const WeeklyIcon = subInfo.weekly
        ? <RiCheckboxLine onClick={checkWeekly} className='icon-checked'/>
        : <RiCheckboxBlankFill onClick={checkWeekly} className='icon'/>
    ;

    if (collapsed.plan) return (
        <Collapsed>
            <CollapsedLabel>
                <p>Plano</p>
                <HiOutlineChevronDown className='icon' onClick={() => setCollapsed({ plan: !collapsed.plan, delivery: true, products: true })}/>
            </CollapsedLabel>
        </Collapsed>
    );

    return(
        <Expanded>
            <ExpandedLabel>
                <p>Plano</p>
                <HiOutlineChevronUp className='icon' onClick={() => setCollapsed({ plan: !collapsed.plan, delivery: true, products: true })}/>
            </ExpandedLabel>
            <MyInputs>
                <div>{WeeklyIcon}<Opt>Semanal</Opt></div>
                <div>{MonthlyIcon}<Opt>Mensal</Opt></div>
            </MyInputs>
        </Expanded>
    )
}

const Opt = styled.span`
    color: #4D65A8;
    margin-left: 6px;
    padding-top: 3px;
    font-weight: 400;
`

const MyInputs = styled.div`
    display: flex;
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