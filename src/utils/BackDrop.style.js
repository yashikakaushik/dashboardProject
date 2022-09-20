import styled from "styled-components";


export const BackDrop = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background: rgba(0, 0, 0, 0.75);

`

export const Modal = styled.div`
    position: fixed;
    top: 30vh;
    left: 25%;
    width: 50%;
    z-index: 100;
    overflow: hidden;
    background-color:white;
    padding:2rem
`