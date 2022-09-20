import { Container } from "../utils/Container.style";
import {FlexRow} from '../utils/Flex.style';
import SignInLeft from '../Components/signIn/SignInLeft';
import SignInRight from '../Components/signIn/SignInRight';


function SignIn()
{
    return(
        <>
            <FlexRow>
                <SignInLeft/>
                <SignInRight/>
            </FlexRow>
        </>
    )

};

export default SignIn;