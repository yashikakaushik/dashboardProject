import styled from "styled-components";


export const Text = styled.p`
    font-weight: ${(props) => props.fontWeight};
    font-size: ${(props) => props.fontSize};
    line-height:  ${(props) => props.lineHeight};
    padding:${(props) =>props.padding};
    color:  ${(props) => props.fontColor};
    margin:  ${(props) => props.margin};
    margin-top:  ${(props) => props.marginTop};
    margin-left:  ${(props) => props.ml};
    justify-content:${(props) => props.justify};
`