import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

// function declaration
function App() {
    // полезное что-то
    // обязана вернуть JSX
    console.log('App rendering');
    return (
        <div className={'App'}>
            <Accordion titleValue={'--Menu--'}/>
            <Accordion titleValue={'--Users--'}/>

            <Rating/>

            <OnOff/>
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
