import user from '../reducers/user';
 
export const data = {
    profile: {
      id: 1,
      name: "Devesh Sharma",
      image:user.image,
      
      contacts: [
        {
          id: 2,
          name: "Eesha",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvXDiDtwm_fK1V-p54ctnUqE6qsnYxBUDp098IN9Hfkw&s",
          chatlog: [
            {
              text: "Hi Bro",
              timestamp: "11:21 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I am fine.",
              timestamp: "11:22 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am also good",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "lets meet",
              timestamp: "10:04 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Done!",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 3,
          name: " Vivek",
          image:"https://www.shutterstock.com/image-photo/guy-on-background-sky-260nw-497596165.jpg",
            chatlog: [
            {
              text: "Hi !",
              timestamp: "10:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I am fine Antoine , How are you!",
              timestamp: "10:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great,Dear.",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Or maybe not, let me check something and call you. Give me sometime",
              timestamp: "10:04 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Okay sure",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 4,
          name: "Uddesh",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBUsDSXdE67cNLPf4Gwafrhf0FEQipPTyaZ3Q1vouf6Q&s",
          chatlog: [
            {
              text: "Hi!",
              timestamp: "10:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I am fine Uddesh. How are you!",
              timestamp: "10:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great ,  Devesh.",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "r u busy??",
              timestamp: "10:04 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: " Yeah!!",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 5,
          name: "Aniket",
          image:
            "https://i.pinimg.com/550x/ff/04/8c/ff048c177573e962235b4aeac68ea1ac.jpg",
          chatlog: [],
        },
        {
          id: 6,
          name: "Hardik",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZMRMGfptVVq--Xuf2id3pd5oLrjeZVFl544RiWb0IXA&s",
          chatlog: [
            {
              text: "Hey Hardik, where is ur Big bro?",
              timestamp: "10:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I don't know anything about that, bro",
              timestamp: "10:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "Are you sure?",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Yes,  I am sure",
              timestamp: "10:04 AM",
              sender: "me",
              message_id: 4,
            },
            {
              text: "Okay i'll call you",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
       
      ],
    },
  };