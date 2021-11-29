import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import { RiCheckboxBlankFill, RiCheckboxLine } from "react-icons/ri";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import { Collapsed, Expanded, ExpandedLabel, CollapsedLabel, } from "../shared/styled";
import { useContext, useEffect } from "react";

export default function Products(props) {
    const { collapsed, setCollapsed, products, setProducts } = props;
    const { setSubInfo, subInfo } = useContext(UserContext);

    useEffect(() => {
        const { tea, incense, organics } = products; 
        if (!tea && !incense && !organics) return;
        setSubInfo({ ...subInfo, products });
    }, [products]); // eslint-disable-line react-hooks/exhaustive-deps

    const teaIcon = products.tea
        ? <RiCheckboxLine onClick={() => setProducts({ ...products, tea: !products.tea})} className='icon-checked'/>
        : <RiCheckboxBlankFill onClick={() => setProducts({ ...products, tea: !products.tea})} className='icon'/>
    ;

    const incenseIcon = products.incense
        ? <RiCheckboxLine onClick={() => setProducts({ ...products, incense: !products.incense})} className='icon-checked'/>
        : <RiCheckboxBlankFill onClick={() => setProducts({ ...products, incense: !products.incense})} className='icon'/>
    ;

    const organicIcon = products.organic
        ? <RiCheckboxLine onClick={() => setProducts({ ...products, organic: !products.organic})} className='icon-checked'/>
        : <RiCheckboxBlankFill onClick={() => setProducts({ ...products, organic: !products.organic})} className='icon'/>
    ;

    if (collapsed.products) return (
        <Collapsed>
            <CollapsedLabel>
                <p>Quero receber</p>
                <HiOutlineChevronDown className='icon' onClick={() => setCollapsed({ plan: true, delivery: true, products: !collapsed.products })}/>
            </CollapsedLabel>
        </Collapsed>
    );

    return(
        <Expanded>
            <ExpandedLabel>
                <p>Quero receber</p>
                <HiOutlineChevronUp className='icon' onClick={() => setCollapsed({ plan: true, delivery: true, products: !collapsed.products })}/>
            </ExpandedLabel>
            <MyInputs>
                <div>{teaIcon}<Opt>Chás</Opt></div>
                <div>{incenseIcon}<Opt>Incensos</Opt></div>
                <div>{organicIcon}<Opt>Produtos orgânicos</Opt></div>
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