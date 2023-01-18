import styled from 'styled-components'

const StyledButton = styled.div`
    padding: 5px;
    background-color: red;
`;

const Text = styled.p`
    color: white;
`;

const Button = () => {
  return (
    <div>
    <StyledButton>
      <Text>Mano Button</Text>
    </StyledButton>
    </div>
  )
}

export default Button
