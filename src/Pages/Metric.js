import MetricTable from "../Components/metrics/MetricTable";
import Header from "../Components/overview/Header";
import SideBar from "../Components/overview/SideBar";
import { FlexCol, FlexRow } from "../utils/Flex.style";
import Example from "../Components/metrics/Graphclass";
import {Text} from "../utils/Text.style";



function Metric (){

    return(
        <>
            <Header/>
            <FlexRow>
                <SideBar/>
                <FlexCol width="100%" justify="center" items="center" >
                    <Text fontWeight="700" fontSize="20px" lineHeight="40px">Metrics</Text>
                    <Example/>
                    <Text fontWeight="700" fontSize="20px" lineHeight="40px">APIs</Text>
                    <MetricTable/>
                </FlexCol>
            </FlexRow>
            
            
           
        </>
    )

};

export default Metric;