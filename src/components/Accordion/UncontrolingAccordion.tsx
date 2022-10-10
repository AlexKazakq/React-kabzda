import React, {useState} from "react";
import accordion from "./Accordion";

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    setAccordion: () => void
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')


    return (
        <div>
            <AccordionTittle title={props.titleValue} onClick={props.setAccordion}/>
            {props.collapsed && <AccordionBody/>}
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

export default Accordion;