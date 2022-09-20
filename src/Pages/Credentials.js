import CredentialsTable from "../Components/credentials/CredentialsTable";
import Header from "../Components/overview/Header";
import SideBar from "../Components/overview/SideBar";
import { FlexCol, FlexRow } from "../utils/Flex.style";
import { Text } from "../utils/Text.style";


function Credentials(){

    return(
        <>
            <Header/>
            <FlexRow>
                <SideBar/>
                <FlexCol width="100%"  justify="center" items="center">
                    <Text fontWeight="700" fontSize="32px" lineHeight="40px" justify="flex-start">Credentials compatible with this API</Text>
                    <Text fontWeight="400" fontSize="24px" lineHeight="40px">To view all credentials visit Credentials in APIs & Services </Text>
                    <CredentialsTable/>

                </FlexCol>
                
            </FlexRow>
            

        </>
    )

};

export default Credentials;