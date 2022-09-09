import styled, {css} from "styled-components";

export const shadowStyle = css`
  box-shadow: 4px 2px 0 0 rgba(0, 0, 0, 1);
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
export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const Box = styled.div`
  ${boxStyles};
  ${shadowStyle};
`
export const Input = styled.input`
  width: 100%;
  border: 1px solid black;
  outline: none;
  padding: 15px 20px;
  ${shadowStyle};
  ${boxStyles};
`

