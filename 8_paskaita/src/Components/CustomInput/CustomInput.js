import styled from 'styled-components';

const CustomInput = styled.input`
    padding: ${(props) => {
        if(props.size === 'sm') return  '10px'
        if(props.size === 'lg') return '15px'
        return '200px'
    }};
    margin: 0.5em;
    color: ${props => props.inputColor || 'palevioletred'};
    background-color: papayawhip;
    border: none;
    border-radius: 3px;
`;

export default CustomInput;