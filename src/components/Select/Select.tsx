import React, {useState, KeyboardEvent, useEffect} from "react";
import s from "./Select.module.css"

type ItemType = {
    title: string,
    value: any
}

type SelectPropsType = {
    value: any
    items: ItemType[]
    onChange: (value: any) => void
}

export const SelectSecret = (props: SelectPropsType) => {

    const [visible, setVisible] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)
    const selectItem = props.items.find(i => i.value === props.value)


    const onClickHandler = () => {
        setVisible(!visible)
    }
    const onClickItem = (value: string) => {
        props.onChange(value)
        onClickHandler()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                       return;
                    }
                }
            }
            if (!selectItem) {
                props.onChange(props.items[0].value);
            }
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setVisible(false)
        }
    }

    return (
        <div className={s.container} onKeyUp={onKeyUp} tabIndex={0}>
            <div className={!visible ? s.window : s.openWindow} onClick={onClickHandler}><span
                className={props.value ? s.smallText : s.largeText}>name</span><span
                className={s.titleText}>{selectItem && selectItem.title}</span></div>
            {visible &&
                <div className={s.list}>
                    {props.items.map(i => <div key={i.value}
                                               onMouseEnter={() => {
                                                   setHoveredElementValue(i.value)
                                               }}
                                               className={s.listText + " " + (hoveredItem === i ? s.selected : "")}
                                               onClick={() => {
                                                   onClickItem(i.value)
                                               }
                                               }>{i.title}</div>)}</div>}
        </div>
    )
}

export const Select = React.memo(SelectSecret)