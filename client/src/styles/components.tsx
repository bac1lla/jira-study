import styled, {css} from "styled-components";
import {NAVBAR_HEIGHT} from "./consts";
import {Link} from "react-router-dom";

interface IContainer {
    display?: string,
    flexDirection?: string,
    alignItems?: string,
    justifyContent?: string,
    gap?: number
}

interface IRow {
    alignItems?: string,
    justifyContent?: string,
    gap?: string,
    wrap?: string,
}

export const shadowStyle = css`
  box-shadow: 4px 2px 0 0 rgba(0, 0, 0, 1);
`
export const borderStyle = css`
  border: 1px solid black;
`
export const boxStyles = css`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
`
export const Wrapper = styled.div`
  max-width: 95%;
  margin: 0 auto;
`
export const Container = styled(Wrapper)<IContainer>`
  width: 100%;
  height: calc(100% - ${NAVBAR_HEIGHT});
    // display: ${props => props.display || "block"};
    // flex-direction: ${props => props.flexDirection || "row"};
    // align-items: ${props => props.alignItems || "center"};
    // justify-content: ${props => props.justifyContent || "center"};
    // gap: ${props => props.gap + "px" || "unset"};
`
export const Button = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  padding: 15px 20px;
  ${boxStyles};
  ${shadowStyle};

  &:hover {
    background: rgba(0, 0, 0, .05);
  }

  &:active {
    box-shadow: 1px .5px 0 0 rgba(0, 0, 0, 1) inset;
`
export const Row = styled.div<IRow>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: ${props => props.alignItems || "center"};
  justify-content: ${props => props.justifyContent || "space-between"};
  gap: ${props => props.gap || "unset"};
  flex-wrap: ${props => props.wrap || "no-wrap"};
`
export const Box = styled.div`
  ${boxStyles};
  ${shadowStyle};
`

interface IInput {
    padding?: string
}
export const Input = styled.input<IInput>`
  width: 100%;
  border: 1px solid black;
  outline: none;
  padding: ${props => props.padding || "0"};
  ${shadowStyle};
  ${boxStyles};
`

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`
export const CardBoardStyled = styled.div`
  ${shadowStyle};
  ${borderStyle};
  display: flex;
  width: 200px;
  height: 100px;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
`

