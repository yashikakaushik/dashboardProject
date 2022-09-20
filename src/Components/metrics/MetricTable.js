import { useState } from "react";
import { useEffect } from "react";
import Table from "../overview/Table";

function MetricTable(){
    const [Data , setData] = useState([]);
    const [Error,setError] = useState(null);

    async function fetchData(){
        try{
            const response = await fetch('https://receiver.paplilabs.com/receiver/availableApis/' , {
                headers:{
                    Authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk3NTY3MTAyLCJqdGkiOiI1Yzc2NGJlZjhlYWY0NGUyODllZGUwOWNiNzcxYzBhMiIsInVzZXJfaWQiOiJ0ZXN0QG1haWwuY29tIn0.E9n9MEeL42fe4CzLMRRUPSwoJ4NmDz0Z76Z-4ZGfcTk"
                }     
            });
            // console.log(response);
            if(!response.ok)
            {
                throw new Error("Something is wrong");
            }
            const data = await response.json();
            // console.log(data.data);

            const transformedData = data?.data?.map((singleData) => {
                return{
                    API:singleData?.name,
                    Requests:singleData?.requests,
                    Error:singleData?.requestsFailed,
                    AverageLatency:singleData?.avgLatencyMs,
                    "99%Latency":"-"

                };
            });
            // console.log(transformedData);
            setData(transformedData);
            // console.log(transformedData);
        } catch(error){
            setError(error.message);
        }

    };

    useEffect(()=>{
        fetchData();
    },[]);

    return(
        <Table col={Data}></Table>
    )
};

export default MetricTable;