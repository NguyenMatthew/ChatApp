import { Avatar } from "@material-ui/core";
import { collection, query, where } from "firebase/firestore";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import styled from "styled-components";
import { auth, db } from "../firebase";
import getRecipientEmail from "../utils/getRecipientEmail";

function Chat({ id, users }) {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const [recipeintSnapshot] = useCollection(
    query(
      collection(db, "users"),
      where("email", "==", getRecipientEmail(users, user))
    )
  );

  const enterChat = () => {
    router.push(`/chat/${id}`);
  };

  // Unwrap the user from the snapshot to get all the data
  const recipient = recipeintSnapshot?.docs?.[0]?.data();
  const recipientEmail = getRecipientEmail(users, user);

  return (
    <Container onClick={enterChat}>
      {recipient ? (
        // If the recipient exists, show the avatar
        <UserAvatar src={recipient?.photoURL} />
      ) : (
        // If the user doesn't have a photo, use the first letter of their email
        <UserAvatar>{recipientEmail[0]}</UserAvatar>
      )}
      <p>{recipientEmail}</p>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;

  :hover {
    background-color: #e9eaeb;
  }
`;

const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;
