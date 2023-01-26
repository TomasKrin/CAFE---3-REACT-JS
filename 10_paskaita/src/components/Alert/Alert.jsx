import styled from "styled-components";
import {
  AiFillExclamationCircle,
  AiFillQuestionCircle,
  AiFillInfoCircle,
  AiFillCheckCircle,
} from "react-icons/ai";

const DangerAlert = styled.div`
  width: 90%;
  height: fit-content;
  background-color: #f44336;
  padding: 15px;
  border-radius: 5px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
const WarningAlert = styled.div`
  width: 90%;
  height: fit-content;
  background-color: #ffc107;
  padding: 15px;
  border-radius: 5px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
const InfoAlert = styled.div`
  width: 90%;
  height: fit-content;
  background-color: #2196f3;
  padding: 15px;
  border-radius: 5px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
const SuccessAlert = styled.div`
  width: 90%;
  height: fit-content;
  background-color: #00bfa5;
  padding: 15px;
  border-radius: 5px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const CloseIcon = styled.span`
  opacity: 0.5;
  box-shadow: 50px 50px 50px white;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
`;

const Alert = ({ children, type, onClick }) => {
  if (type === "danger") {
    return (
      <DangerAlert>
        <div style={{ display: `flex`, gap: "10px", alignItems: `center` }}>
          <AiFillExclamationCircle /> {children}
        </div>
        <CloseIcon onClick={onClick}>&#10005;</CloseIcon>
      </DangerAlert>
    );
  }
  if (type === "warning") {
    return (
      <WarningAlert>
        <div style={{ display: `flex`, gap: "10px", alignItems: `center` }}>
          <AiFillQuestionCircle /> {children}
        </div>
        <CloseIcon onClick={onClick}>&#10005;</CloseIcon>
      </WarningAlert>
    );
  }
  if (type === "info") {
    return (
      <InfoAlert>
        <div style={{ display: `flex`, gap: "10px", alignItems: `center` }}>
          <AiFillInfoCircle /> {children}
        </div>
        <CloseIcon onClick={onClick}>&#10005;</CloseIcon>
      </InfoAlert>
    );
  }
  if (type === "success") {
    return (
      <SuccessAlert>
        <div style={{ display: `flex`, gap: "10px", alignItems: `center` }}>
          <AiFillCheckCircle /> {children}
        </div>
        <CloseIcon onClick={onClick}>&#10005;</CloseIcon>
      </SuccessAlert>
    );
  }
};

export default Alert;
