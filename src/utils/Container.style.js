import styled from "styled-components";


export const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:${(props) => props.backgroundColor};
    width:${(props) => props.width};
    height:${(props) => props.height};
    margin-top:${(props) => props.mt};
    border-right:${(props) => props.br};
    
`