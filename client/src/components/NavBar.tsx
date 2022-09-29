import React, {FC} from 'react';
import {Button, StyledLink, Wrapper} from "../styles/components";
import {NavBarStyled} from "../styles/NavBarStyled";
import Dropdown from "./Dropdown";
import {IGroup, ISubject} from "../types/types";
import DropdownItem from "./DropdownItem";
import {DESKTOP_ROUTE, LOGIN_ROUTE} from "../utils/consts";

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
                <Button><StyledLink to={DESKTOP_ROUTE}>logo</StyledLink></Button>
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
                <Button><StyledLink to={LOGIN_ROUTE}>Выйти</StyledLink></Button>
            </NavBarStyled>
        </Wrapper>
    );
};

export default NavBar;