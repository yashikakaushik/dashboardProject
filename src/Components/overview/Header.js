import { Container } from "../../utils/Container.style";
import novaeAvenue from "../../images/novaeAvenue.png";
import { FlexRow } from "../../utils/Flex.style";
import {Text} from '../../utils/Text.style';
import vector from '../../images/Vector.png';
import setting from '../../images/Setting.png';


function Header(){

    return(
        <div  style={{backgroundColor:"rgba(9, 30, 50, 1)"}}>
            <FlexRow justify="space-between" items="center" ml="10px">
                <img src={novaeAvenue} style={{height:"30px"}}/>
                <FlexRow items="center" gap="1rem" mr="10px">
                    <img src={vector} style={{height:"20px"}}/>
                    <img src={setting} style={{height:"20px"}}/>
                    <Text fontColor="white">UserName</Text>
                </FlexRow>
                
            </FlexRow>
        </div>
    )

};

export default Header;