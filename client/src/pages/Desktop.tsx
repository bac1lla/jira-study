import React, {FC, useId, useState} from 'react';
import {CardBoardStyled, Container, Row, StyledLink} from "../styles/components";
import {PERSONALISED_BOARD_ROUTE} from "../utils/consts";
import {IBoardMin} from "../types/types";

const Desktop: FC = () => {

    const dataPersonalisedBoards: IBoardMin[] = [
        {
            id: "perBoard1",
            name: "Персональная доска 1",
        }, {
            id: "perBoard2",
            name: "Персональная доска 2",
        }
    ]
    const [personalisedBoards, setPersonalisedBoards] = useState<IBoardMin[]>(dataPersonalisedBoards)


    return (
        <Container>
            <h3>Ваши доски</h3>
            <h3>Рабочее пространство</h3>
            <Row
                justifyContent={"unset"}
                gap={"20px"}
                wrap={"wrap"}
            >
                {
                    personalisedBoards.map(board =>
                        <StyledLink to={PERSONALISED_BOARD_ROUTE + `/${board.id}`} key={board.id}>
                            <CardBoardStyled>{board.name}</CardBoardStyled>
                        </StyledLink>
                    )
                }
                <CardBoardStyled onClick={() => setPersonalisedBoards([...personalisedBoards, {id: getId("per-board-"), name: "Новая доска"}])}>Создать новую доску</CardBoardStyled>
            </Row>
        </Container>
    );
};

export default Desktop;

var id = 20
export function getId(prefix: string): string {
    id += 1
    return prefix + id
}