import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

export type AccordionPropsType = {
    titleValue: string,
    // collapsed: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering')

    // const [collapsed, setCollapsed] = useState(false)
    const [state, dispatch] = useReducer(reducer, {collapsed: false})


    return (
        <div>
            {/*<AccordionTittle title={props.titleValue} onClick={() => { setCollapsed(!collapsed)}}/>*/}
            <AccordionTittle title={props.titleValue} onClick={() => { dispatch({type: TOGGLE_COLLAPSED})}}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTittlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTittle(props: AccordionTittlePropsType) {
    console.log('AccordionTittle rendering')
    return <h3 onClick={() => {props.onClick()}}>{props.title}</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}
