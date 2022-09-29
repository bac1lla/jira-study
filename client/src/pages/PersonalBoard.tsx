import React, {FC, useState} from 'react';
import {Container} from "../styles/components";
import Column from "../components/Column";
import {BoardStyled} from "../styles/BoardStyled";
import {IColumn, ITaskMin} from "../types/types";
import {data} from "../data";



const PersonalBoard: FC = () => {

    const [columns, setColumns] = useState<IColumn[]>(data)
    const [currentColumn, setCurrentColumn] = useState<IColumn>(columns[0])
    const [currentTask, setCurrentTask] = useState<ITaskMin>(columns[0].tasks[0])

    return (
        <Container>
            <BoardStyled>
                {columns.map(column =>
                    <Column
                        key={column.id}
                        column={column}
                        columns={columns}
                        setColumns={setColumns}
                        currentColumn={currentColumn}
                        setCurrentColumn={setCurrentColumn}
                        currentTask={currentTask}
                        setCurrentTask={setCurrentTask}
                    />)}
            </BoardStyled>
        </Container>
    );
};

export default PersonalBoard;



