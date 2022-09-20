import {TableHead, TableData, Tab, TableRow} from "../../utils/Table.style"
import {BiDotsVerticalRounded} from "react-icons/bi"

function Table(props){

    const row = props?.col[0];
    console.log(props);
    if(!row) return null;

    return(
        <Tab>
            
            {Object.keys(row).map((data)=> 
            <TableHead>{data}</TableHead>)}{props.isField&&<TableHead>Actions</TableHead>}
           
            {props.col?.map((row) => 
            <TableRow>{Object.values(row).map((data)=> 
            <TableData>{data}</TableData>)}
            {props.isField&&<TableData fontColor="rgba(63, 104, 207, 1)" onClick={() => props.isOpen(true) }>SHOW KEY<BiDotsVerticalRounded/></TableData>}
            </TableRow>)}

        </Tab>
    )

};

export default Table;