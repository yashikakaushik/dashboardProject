import styled from "styled-components";


export const TableHead = styled.th`
    background-color:rgba(224, 224, 224, 1);
    border-bottom: 1px solid rgba(224, 224, 224, 1);
    border-spacing:none;
`

export const TableData = styled.td`
    color:  ${(props) => props.fontColor};
    text-align:center
`
export const TableRow = styled.tr`
    background-color:white;
    border-bottom: 1px solid rgba(224, 224, 224, 1);
    border-spacing:none;
   
`

export const Tab = styled.table`
    border-spacing:none;
    width:90%;
    padding:0;
    height:50px
   
`