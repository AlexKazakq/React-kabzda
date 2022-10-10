import React, {useState} from "react";
import './App.css';
import UncontrolingAccordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolOnOff} from "./components/OnOff/UncontrolOnOff";
import Accordion from "./components/Accordion/UncontrolingAccordion";
import {OnOff} from "./components/OnOff/OnOff";

// function declaration
function App() {
    // полезное что-то
    // обязана вернуть JSX
    console.log('App rendering');

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState<boolean>(false)

    return (
        <div className={'App'}>
            <UncontrolingAccordion titleValue={'--Menu--'}/>
            <Accordion titleValue={'--Users--'} collapsed={accordionCollapsed} setAccordion={() => setAccordionCollapsed(!accordionCollapsed)}/>

            <Rating value={ratingValue} onClick={setRatingValue}/>

            <UncontrolOnOff onChange={setOn}/> {on.toString()}
            {/*<OnOff on={on} setOn={setOn}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering');
    return <h1>{ props.title }</h1>
}

export default App;
