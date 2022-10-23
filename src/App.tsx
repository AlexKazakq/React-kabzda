import React, {useState} from "react";
import "./App.css";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolOnOff} from "./components/OnOff/UncontrolOnOff";
import {Accordion} from "./components/Accordion/Accordion";
import {Select} from "./components/Select/Select";


// function declaration
function App() {
    // полезное что-то
    // обязана вернуть JSX
    console.log("App rendering");

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState<boolean>(false)
    const [value, setValue] = useState('')

    const onClickItemHandler = () => {

    }

    const onChangeSelectHandler = (title: string) => {
        setValue(title)
    }

    return (
        <div className={"App"}>
            {/*<Accordion titleValue={"--Users--"}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           setAccordion={() => setAccordionCollapsed(!accordionCollapsed)}*/}
            {/*           items={[*/}
            {/*               {title: "Dimych", value: 1},*/}
            {/*               {title: "Alex", value: 2},*/}
            {/*               {title: "Valera", value: 3},*/}
            {/*               {title: "Viktor", value: 4}*/}
            {/*           ]}*/}
            {/*           onClick={(value) => {*/}

            {/*           }}*/}
            {/*/>*/}

            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}

            {/*<UncontrolOnOff onChange={setOn}/> {on.toString()}*/}
            {/*<OnOff on={on} setOn={setOn}/>*/}

            <Select
                value={value}
                items={[
                    {title: "Dimych", value: 1},
                    {title: "Alex", value: 2},
                    {title: "Valera", value: 3},
                    {title: "Viktor", value: 4}
            ]}
                onChange={onChangeSelectHandler}/>
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
