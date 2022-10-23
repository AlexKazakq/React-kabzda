import React, {useState} from "react";

export type AccordionPropsType = {
    titleValue: string,
    // collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering')

    const [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTittle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>
            {collapsed && <AccordionBody/>}
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
