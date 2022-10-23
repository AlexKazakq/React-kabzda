import React, {useState} from "react";
import s from './Select.module.css'

type ItemType = {
    title: string,
    value: any
}

type SelectPropsType = {
    value: any
    items: ItemType[]
    onChange: (value: any) => void
}

export const Select = (props: SelectPropsType) => {

    const [visible, setVisible] = useState(false)

    const onClickHandler = () => {
        setVisible(!visible)
    }

    return (
        <div className={s.container}>
            <div className={s.window} onClick={onClickHandler} ><span className={props.value ? s.smallText : s.largeText}>name</span><span className={s.titleText}>{props.value}</span></div>
            {visible?
                <div className={s.list}>{props.items.map(i=> <div className={s.listText} onClick={() => {
                props.onChange(i.title)
                setVisible(false)
            }
            }>{i.title}</div>)}</div>: ''}
        </div>
    )
}