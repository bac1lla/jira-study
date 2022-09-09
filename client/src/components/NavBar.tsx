import React, {FC} from 'react';
import {Button, Wrapper} from "../styles/components/styled-comlonents";
import {NavBarStyled} from "../styles/components/NavBarStyled";
import Dropdown from "./Dropdown";
import {IGroup, ISubject} from "../types/types";
import DropdownItem from "./DropdownItem";

const subjects: IGroup[] = [
    {
        id: 1,
        name: "М8О-405Б-19"
    },
    {
        id: 2,
        name: "М8О-305Б-20"
    },
]

const groups: ISubject[] = [
    {
        id: 1,
        name: "Математический анализ"
    },
    {
        id: 2,
        name: "Числовые методы"
    },
    {
        id: 3,
        name: "УРЧП"
    },
]


const NavBar: FC = () => {
    return (
        <Wrapper>
            <NavBarStyled>
                <Button>logo</Button>
                <Dropdown
                    label={"Выбор предмета"}
                    items={subjects}
                    renderItem={(item: ISubject) => <DropdownItem label={item.name} key={item.id} onClick={() => console.log(item)} checkbox={false}/>}/>
                <Dropdown
                    label={"Выбор группы"}
                    items={groups}
                    renderItem={(item: IGroup) => <DropdownItem label={item.name} key={item.id}  onClick={() => console.log(item)} checkbox={false}/>}
                />
                <Button>Успеваемость</Button>
                <Button>Сообщения</Button>
                <Button>Поиск</Button>
            </NavBarStyled>
        </Wrapper>
    );
};

export default NavBar;