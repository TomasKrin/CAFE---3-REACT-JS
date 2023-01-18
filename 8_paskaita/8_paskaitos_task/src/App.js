import './App.css';
import styled, {keyframes} from 'styled-components';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";

const glow = keyframes`
  from {
text-shadow:  0 0 5px #fff, 0 0 10px #fff, 0 0 20px #009688, 0 0    30px #009688, 0 0 40px #009688, 0 0 50px #009688, 0 0 60px #009688;
}
to {
text-shadow:  0 0 0px #fff, 0 0 10px #33ab9f, 0 0 20px #33ab9f, 0 0 30px #33ab9f, 0 0 40px #33ab9f, 0 0 50px #33ab9f, 0 0 60px #33ab9f;
}
`;

const MainContainer = styled.div`
  background-color: #e5e8eb;
  height: 100vh;
  display: flex;
  justify-content:center;
  align-items:center;
`;

const LogInPanel = styled.div`
  background-color:white;
  width: 80vw;
  height:80vh;
  display:flex;
`;

const FormContainer = styled.div`

`;

const Form = styled.form`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  flex:1;
  padding: 100px;
  width: 250px;
  gap: 10px;
`;

const ImageContainer = styled.div`
  display:flex;
  flex:1;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height:100%;
  border-bottom-left-radius:7%;
  border-top-left-radius:7%;
  position: relative;
  z-index:0;
`;

const Button = styled.button`
  width: 100%;
  cursor:pointer;
  padding: 10px 20px;
  background-color: ${props => props.background ? props.background : 'white'};
  color: ${props => props.color ? props.color : 'black'};
  border:1px solid lightgray;
  border-radius: 5px;
  &:hover{
   box-shadow: 0.5px 1px 5px gray;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

const P = styled.p`
  margin: 0;
  font-size:0.7em;
  color: gray;
  margin-bottom:10px;
  font-weight:500;
`;

const Input = styled.input`
  display:flex;
  padding: 10px 20px;
  border:1px solid lightgray;
  border-radius: 5px;
  min-width:83%;
  max-width:100%;
  `;

const A = styled.a`
  text-decoration:none;
  cursor:pointer;
  color: gray;
  font-weight:700;
  font-size: 1em;
`;

const H1= styled.h1`
  margin: 0;
  font-size:1.7em;
`;

const Seperator = styled.div`
  border-bottom:1px solid lightgray;
  width:100%;
  margin-top:20px;
  margin-bottom:20px;
  position: relative;
  z-index:0;
`;

const SeparatorText = styled.span`
  position: absolute;
  padding: 3px;
  z-index:10;
  bottom: -12px;
  background-color:white;
  right: 47%;
`;

const Logo = styled.span`
  position: absolute;
  z-index: 10;
  top:45%;
  right:36%;
  color: white;
  font-size:2em;
  animation: ${glow} 1s linear infinite;
`;

function App() {
  return (
    <MainContainer>
      <LogInPanel>
        <FormContainer>
            <Form>
              <span>LOGO</span>
              <H1>Welcome Back</H1>
              <P>Please enter your details</P>
              <Input type="email" name="email" placeholder='Enter your email' />
              <Button background='black' color='white'>Continue</Button>
              <Seperator>
                <SeparatorText>OR</SeparatorText>
              </Seperator>
              <Button><FcGoogle style={{marginRight:'14px', fontSize:'1.5em'}} />Continue with Google</Button>
              <Button> <FaFacebook style={{marginRight:'14px', fontSize:'1.5em', color: 'blue'}}/> Continue with Facebook</Button>
              <Button> <FaApple style={{marginRight:'14px', fontSize:'1.5em'}}/> Continue with Apple</Button>
              <P>Don't have an account? <A href="/">Sign up</A></P>
            </Form>
        </FormContainer>
        <ImageContainer>
          <Image src='https://w.wallhaven.cc/full/zy/wallhaven-zyxvqy.jpg' alt='pic'></Image>
          <Logo>UNTITLED UI</Logo>
        </ImageContainer>
      </LogInPanel>
    </MainContainer>
  );
}

export default App;
