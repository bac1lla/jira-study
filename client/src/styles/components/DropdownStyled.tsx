import styled from "styled-components";
import {BUTTON_HEIGHT} from "../consts";
import {boxStyles, shadowStyle} from "./styled-comlonents";

export const DropdownStyled = styled.div`
  position: relative;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  align-items: start;
`

export const DropdownContent = styled.div`
  min-width: 100%;
  position: absolute;
  top: ${BUTTON_HEIGHT};
  ${shadowStyle}
`
export const DropdownItemStyled = styled.div`
  border: 1px solid black;
  padding: 15px 20px;
  border-top: 0;
  display: flex;
  align-items: center;
  background: white;
  cursor: pointer;
  &:first-child {
    border-top: 1px solid black;
  }
`
export const DropdownInputStyled = styled.input`
  ${boxStyles};
`