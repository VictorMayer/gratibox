import { useEffect, useContext, useState } from "react"
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import { getStates } from "../../services/Gratibox";

export default function States(props) {
    const { address, setAddress, type, setType } = props;
    const { user } =  useContext(UserContext);
    const [states, setStates] = useState([]);

    useEffect(() => {
        getStates(user.token)
            .then(answer => {
                setStates(answer.data);
            }).catch(answer => {
                
            })
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    function fillInput(name, id){
        setType({ ...type, state: false });
        setAddress({ ...address, state_id: id, state_name: name });
    }

    return(
        <ListWrapper>
        {states.map((state, i) => (
            <ListItem key={i} onClick={() => fillInput(state.name, state.id)} >{state.name}</ListItem>
        ))}
        </ListWrapper>
    )
}

const ListWrapper = styled.div`
    width: 100%;
    height: 44px;
    font-size: 16px;
    padding: 8px 0px 8px 0px;
    row-gap: 3px;
    color: #666;
    display: flex;
    overflow: scroll;
    text-align: center;
    flex-direction: column;
`

const ListItem = styled.div`

`