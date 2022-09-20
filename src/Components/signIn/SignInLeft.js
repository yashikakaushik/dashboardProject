import { Button } from "../../utils/Button.style";
import { Text } from "../../utils/Text.style";
import { FlexCol, FlexRow } from "../../utils/Flex.style";
import {AiOutlineArrowRight} from 'react-icons/ai';
import { useState } from "react";
import { Container } from "../../utils/Container.style";
import { Input } from "../../utils/Input.style";
import {Link} from "react-router-dom"



function SignInLeft()
{
    const [phone , setPhone] = useState(true);

    const togglePhone = () => {
        setPhone(!phone);
    }

    return(
        <Container width="33%" height="80%" mt="50px">
            <Text fontWeight="500" fontSize="34px" lineHeight="44px">Sign In</Text>
            <Container width="100%">
                <Text fontWeight="400" fontSize="12px" lineHeight="16px">Email or Phone</Text>
                {phone?<Input type="number" onClick={togglePhone} placeholder="8800768368"/> :<Input type="text" onClick={togglePhone} placeholder="Enter Email"/>}

                <Text fontWeight="400" fontSize="12px" lineHeight="16px">Password</Text>
                <Input type="password" placeholder="Input Text"/>
            </Container>
            <FlexRow justify="flex-end">
                <Text fontWeight= "700"fontSize= "14px" lineHeight= "18px">Forgot Password?</Text>
            </FlexRow>
            <FlexRow justify="space-between">
                <Text fontWeight= "700"fontSize= "14px" lineHeight= "18px" fontColor="#2979FF">create account</Text>
                <Link to="/overview"><Button>Next<AiOutlineArrowRight/></Button></Link>
            </FlexRow>
            
        </Container>

    )

}

export default SignInLeft;