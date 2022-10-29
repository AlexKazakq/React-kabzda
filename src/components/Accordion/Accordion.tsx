import React from "react";

type ItemType = {
    title: string,
    value: any
}

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    setAccordion: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

export function AccordionSecret(props: AccordionPropsType) {
    console.log('Accordion rendering')


    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.setAccordion}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    );
}

type AccordionTittlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTittleSecret(props: AccordionTittlePropsType) {
    console.log('AccordionTittle rendering')
    return <h3 onClick={() => {props.onClick()}}>{props.title}</h3>
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBodySecret(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    );
}

const AccordionTitle = React.memo(AccordionTittleSecret)
const AccordionBody = React.memo(AccordionBodySecret)
export const Accordion = React.memo(AccordionSecret)
