import styled from "styled-components";
import {Box, shadowStyle} from "./components";

export const BoardStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
  padding-top: 50px;
  font-size: 14px;
`

export const ColumnStyled = styled(Box)`
  width: 272px;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
`
export const ColumnName = styled.p`
  width: 100%;
  border: 1px solid black;
  padding: 3px;
  margin-bottom: 15px;
  font-weight: 600;

  :hover {
    ${shadowStyle};
    background: rgba(0, 0, 0, .05);
  }
`

export const TaskStyled = styled.div`
  border: 1px solid black;
  padding: 5px;
  margin-bottom: 10px;
  position: relative;
  height: 65px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  :hover {
    ${shadowStyle};
    background: rgba(0, 0, 0, .05);
  }
`
export const TaskOwner = styled.div`
  text-align: right;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 12px;
`