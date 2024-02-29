import React from "react";
import { useParams } from "react-router";
import "../../stylesheets/rightSidebar.css";
import MessageBox from "./MessageBox";
function ConversationList(props) {
  console.log("runnung");
  const { contacts } = props;
  const { id } = useParams();
  const userId = parseInt(id);
  const user = contacts.find((contact) => contact.id === userId);
  console.log("user id:",user);
  return <>{user && <MessageBox user={user} />}</>;
}

export default ConversationList;