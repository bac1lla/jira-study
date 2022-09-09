import React, {useState} from 'react';
import {Button} from "../styles/components/styled-comlonents";
import {DropdownStyled, DropdownContent} from "../styles/components/DropdownStyled";

interface IDropdownSingleProps<T> {
    label: string
    items: T[]
    renderItem: (item: T) => React.ReactNode
}


export default function Dropdown<T>({label, items, renderItem}: IDropdownSingleProps<T>) {


    const [isOpen, setOpen] = useState<boolean>(false);
    const toggleDropdown = () => setOpen(!isOpen)


    return (
        <DropdownStyled>
            <Button
                onClick={toggleDropdown}
            >
                {label}
            </Button>
            {isOpen && (
                <DropdownContent>
                    {items.map(renderItem)}
                </DropdownContent>
            )}
        </DropdownStyled>
    )
};