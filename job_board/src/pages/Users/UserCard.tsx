import styled from "styled-components";
import { User } from "../../types/apis";
import { convertPassword, getFullName } from "../../utils/string";

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <Container>
      <Email>{user.email}</Email>
      <p>{getFullName(user.first_name, user.last_name)}</p>
      <p>{convertPassword(user.password)}</p>
    </Container>
  );
};

export default UserCard;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-bottom: 16px;
  border-radius: 4px;
  gap: 16px;
`;

const Email = styled.p`
  color: #4267b2;
  font-weight: 500;
`;
