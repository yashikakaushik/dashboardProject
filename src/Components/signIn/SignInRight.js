import { Container } from '../../utils/Container.style';
import {Text} from '../../utils/Text.style';
import artwork from '../../images/artwork.png';
import phone from '../../images/phone.png';


function SignInRight(){

    return(
        <Container width="67%" backgroundColor="#E5E5E5">
            <Text fontWeight="700" fontSize="44px" lineHeight= "54px" margin="0" marginTop="50px">Record Potholes from Smartphone!</Text>
            <Text fontWeight="500" fontSize="24px" lineHeight= "36px" margin="0" marginTop="15px">Application is available on Play Store.</Text>
            <img src = {artwork} style={{marginTop: "50px"}}/>
            <img src = {phone} style={{marginTop: "70px"}}/>
        </Container>
    )

};

export default SignInRight;