import React, {useState} from "react";
import "./App.css";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolOnOff} from "./components/OnOff/UncontrolOnOff";
import {Accordion} from "./components/Accordion/Accordion";
import {Select} from "./components/Select/Select";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {ReactMemo} from "./components/ReactMemo/ReactMemo";
import {OnOff} from "./components/OnOff/OnOff";
import {DifficultCounting} from "./components/UseMemo/DifficultCounting";
import {HelpsForReactMemo} from "./components/UseMemo/HelpsForReactMemo";


// function declaration
function App() {
    // полезное что-то
    // обязана вернуть JSX
    console.log("App rendering");

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState<boolean>(false)
    const [value, setValue] = useState('')

    // const onClickItemHandler = () => {
    //
    // }

    const onChangeSelectHandler = (value: string) => {
        setValue(value)
    }

    return (
        <div className={"App"}>
            <Accordion titleValue={"--Users--"}
                       collapsed={accordionCollapsed}
                       setAccordion={() => setAccordionCollapsed(!accordionCollapsed)}
                       items={[
                           {title: "Dimych", value: 1},
                           {title: "Alex", value: 2},
                           {title: "Valera", value: 3},
                           {title: "Viktor", value: 4}
                       ]}
                       onClick={(value) => {

                       }}
            />

            <Rating value={ratingValue} onClick={setRatingValue}/>

            <UncontrolOnOff onChange={setOn}/> {on.toString()}
            <OnOff on={on} setOn={setOn}/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <Select
                value={value}
                items={[
                    {title: "Dimych", value: '1'},
                    {title: "Alex", value: '2'},
                    {title: "Valera", value: '3'},
                    {title: "Viktor", value: '4'}
            ]}
                onChange={onChangeSelectHandler}/>
            <ReactMemo/>
            <DifficultCounting/>
            <HelpsForReactMemo/>
        </div>
)

}

type PageTitlePropsType =
    {
        title: string
    }

function PageTitle(props: PageTitlePropsType)
    {
        console.log("PageTitle rendering");
        return <h1>{props.title}</h1>
    }

export default App;
