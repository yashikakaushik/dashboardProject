import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default class Example extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            Data:[{latency:"130" , date:"2022-09-09T06:56:42.069756Z"},{latency:"13" , date:"2022-09-09T06:56:42.069756Z"}] ,
            Error:null
        }
    }

    

    async fetchData(){
        try{
            const response = await fetch('https://receiver.paplilabs.com/receiver/userAvailableApis/' , {
                headers:{
                    Authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk3NTY3MTAyLCJqdGkiOiI1Yzc2NGJlZjhlYWY0NGUyODllZGUwOWNiNzcxYzBhMiIsInVzZXJfaWQiOiJ0ZXN0QG1haWwuY29tIn0.E9n9MEeL42fe4CzLMRRUPSwoJ4NmDz0Z76Z-4ZGfcTk"
                }     
            });
            console.log(response);
            if(!response.ok)
            {
                throw new Error("Something is wrong");
            }
            const data = await response.json();

            console.log(data);

            const options = {year: 'numeric', month: 'long', day: 'numeric' };

            const transformedData = data?.data?.map((singleData) => {
                return{
                    latency:singleData?.avgLatencyMs,
                    date: new Date(singleData?.created_date).toLocaleDateString('en-Us',options) ,
                };
            });

            this.setState({
                Data:[...transformedData , ...transformedData]
            })
            console.log(transformedData);
        } catch(error){
            this.setState({
                error:error.message,
            })
        }

    };

    componentDidMount(){
        this.fetchData();
    }

    render() {
      return (
        <ResponsiveContainer width="100%" height="50%">
          <AreaChart
            width={500}
            height={100}
            data={this.state.Data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis/>
            <Tooltip />
            <Area type="monotone" dataKey="latency" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      );
    }
  }
  