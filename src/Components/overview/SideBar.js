import { Container } from "../../utils/Container.style";
import { FlexCol, FlexRow } from "../../utils/Flex.style";
import {Text} from "../../utils/Text.style";
import {Link} from "react-router-dom";


function SideBar(){

    return(
        
        <FlexCol width="20%" br="1px solid #C9C9C9" height="calc(100vh - 51px)" justify="space-between" ml="20px">
            <div>
                <div>
                    <Text fontWeight="500" fontSize="14px" lineHeight="22px">Overview</Text>
                    <Text fontWeight="500" fontSize="14px" lineHeight="22px" padding="0px" fontColor="#6B7384">APIs</Text>
                    <Link to="/metric"><Text fontWeight="500" fontSize="14px" lineHeight="22px">Metric</Text></Link>
                    <Text fontWeight="500" fontSize="14px" lineHeight="22px">Quotas</Text>
                    <Link to="/credential"><Text fontWeight="500" fontSize="14px" lineHeight="22px">Credential</Text></Link>
                    <Text fontWeight="500" fontSize="14px" lineHeight="22px">Support</Text>
                    <Text fontWeight="500" fontSize="14px" lineHeight="22px">Solution Library</Text>
                    <Text fontWeight="500" fontSize="14px" lineHeight="22px">Map Management</Text>
                    <Text fontWeight="500" fontSize="14px" lineHeight="22px">Map Styles</Text>
                </div>

            </div>
            <div>
                <Text fontWeight="500" fontSize="14px" lineHeight="22px">India</Text>
                <Text fontWeight="500" fontSize="14px" lineHeight="22px">English (United Kingdom)</Text>
            </div>
        </FlexCol>
       
    )

};

export default SideBar;