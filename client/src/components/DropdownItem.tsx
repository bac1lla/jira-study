import React, {FC, useState} from 'react';
import {DropdownItemStyled, DropdownInputStyled} from "../styles/components/DropdownStyled";
import {Row} from "../styles/components/styled-comlonents";
import Dropdown from "./Dropdown";

interface IDropdownItemProps {
    label: string
    checkbox: boolean

    onClick(): void
}

const DropdownItem: FC<IDropdownItemProps> = ({label, onClick, checkbox}) => {

    const [checked, setChecked] = useState<boolean>(false)

    const handleClick = () => {
        checkbox && setChecked(!checked)
        onClick()
    }

    return (
        <DropdownItemStyled onClick={checkbox ? handleClick : onClick}>
            {checkbox ?
                (<>
                    <DropdownInputStyled type={"checkbox"} id={label} checked={checked} readOnly/>
                    <label htmlFor={label}>{label}</label>
                </>)
                :
                label
            }
        </DropdownItemStyled>
    );
};

export default DropdownItem;