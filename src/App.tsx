import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";

// function declaration
function App() {
    // полезное что-то
    // обязана вернуть JSX
    console.log('App rendering');
    return (
        <div>
            <Accordion titleValue={'--Menu--'} collapsed={true}/>
            <Accordion titleValue={'--Users--'} collapsed={false}/>

            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

            <OnOff status={false}/>
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