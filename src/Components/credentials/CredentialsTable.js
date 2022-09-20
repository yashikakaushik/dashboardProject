import { useState } from "react";
import { useEffect } from "react";
import { Text } from "../../utils/Text.style";
import Table from "../overview/Table";
import { BackDrop ,  Modal } from "../../utils/BackDrop.style";
import copy from "copy-to-clipboard";
import {Input2} from "../../utils/Input.style"
import {AiOutlineCopy} from 'react-icons/ai';

function CredentialsTable(){

    const [Data , setData] = useState([]);
    const [Error,setError] = useState(null);
    const[open,isOpen] = useState(false);
    const [copyText, setCopyText] = useState('');
    
    async function fetchData(){
        try{
            const response = await fetch('https://receiver.paplilabs.com/receiver/userAvailableApis/' , {
                headers:{
                    Authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk3NTY3MTAyLCJqdGkiOiI1Yzc2NGJlZjhlYWY0NGUyODllZGUwOWNiNzcxYzBhMiIsInVzZXJfaWQiOiJ0ZXN0QG1haWwuY29tIn0.E9n9MEeL42fe4CzLMRRUPSwoJ4NmDz0Z76Z-4ZGfcTk"
                }     
            });
            if(!response.ok)
            {
                throw new Error("Something is wrong");
            }
            const data = await response.json();
            console.log(data);

            const options = { year: 'numeric', month: 'long', day: 'numeric' };

            const apiKey = data?.data?.map((singleData) => {
                return singleData.token;
            });

            setCopyText(apiKey);

            const transformedData = data?.data?.map((singleData) => {
                return{
                    Name:singleData?.api,
                    CreationDate:new Date(singleData?.created_date).toLocaleDateString('en-US',options),
                    Restrictions:"none",
                };
            });
            
            setData([...transformedData,...transformedData,...transformedData,...transformedData]);
        } catch(error){
            setError(error.message);
        }

    };

    useEffect(()=>{
        fetchData();
    },[]);

    
     
     const copyToClipboard = () => {
        copy(copyText);
        alert(`You have copied "${copyText}"`);
     }


    return(
        <>
            <Table col={Data} isField={true} isOpen={isOpen} />
            {open&&<><BackDrop onClick={()=>{isOpen(false)}}/><Modal>
                <Text  fontWeight="400" fontSize="24px" lineHeight="40px">MAPS API KEY</Text>
                <Text fontWeight="500" fontSize="14px" lineHeight="22px">Use this key in your application by passing it with the key=API-KEY parameter</Text>
                <Input2 placeholder="api"type="text" value={copyText}></Input2> <AiOutlineCopy onClick={copyToClipboard}/>
                <Text fontWeight="500" fontSize="14px" lineHeight="22px">This key is unrestricted. To prevent unauthorized use, we recommend restricting where 
                    and for which APIs it can be used. Edit API key to add restrictions. Learn more</Text>
                <Text fontWeight="600" fontSize="14px" lineHeight="40px" fontColor="rgba(63, 104, 207, 1)" onClick={()=>{isOpen(false)}}>Close</Text>
            </Modal></>}
        </>
    )

};

export default CredentialsTable;