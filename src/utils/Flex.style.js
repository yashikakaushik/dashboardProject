import styled from "styled-components";

export const FlexCol = styled.div`
    display:flex;
    flex-direction:column;
    width:${(props) => props.width};
    height:${(props) => props.height};
    margin-top:${(props) => props.mt};
    border-right:${(props) => props.br};
    justify-content:${(props) => props.justify};
    align-items:${(props) => props.items};
    margin-left:${(props) => props.ml};
`

export const FlexRow = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:${(props) => props.justify};
    align-items:${(props) => props.items};
    gap:${(props) => props.gap};
    margin-left:${(props) => props.ml};
    margin-right:${(props) => props.mr};
    
`