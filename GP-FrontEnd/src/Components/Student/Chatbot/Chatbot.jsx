import { useState } from 'react'
import '../../../App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator, Avatar } from '@chatscope/chat-ui-kit-react';
import './Chatbot.css'

const API_KEY = process.env.API_KEY;

const systemMessage = { 
  "role": "system", 
  "content": "You are a supportive assistant for students using the UniHub E-Learning application. Provide clear explanations, help with navigating the platform, assist with understanding course materials, accessing assignments, and using interactive features like discussion forums. Avoid assigning roles or tasks beyond their responsibilities as students."
}



function StudentChatbot(profilePhotoUrl) {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm Chatbot! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT",
      avatar: "https://cdn-icons-png.flaticon.com/512/12222/12222560.png"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user",
      avatar: profilePhotoUrl.profilePhotoUrl || "https://i.imgur.com/HpF4BFG.jpg" 
    };

    const newMessages = [...messages, newMessage];
    
    setMessages(newMessages);

    // Initial system message to determine ChatGPT functionality
    // How it responds, how it talks, etc.
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) { // messages is an array of messages
    // Format messages for chatGPT API
    // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
    // So we need to reformat

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message}
    });


    // Get the request body set up with the model we plan to use
    // and the messages which we formatted above. We add a system message in the front to'
    // determine how we want chatGPT to act. 
    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,  // The system message DEFINES the logic of our chatGPT
        ...apiMessages // The messages from our chat with ChatGPT
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", 
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      setMessages([...chatMessages, {
        message: data.choices[0].message.content,
        sender: "ChatGPT",
        avatar: "https://cdn-icons-png.flaticon.com/512/12222/12222560.png"
      }]);
      setIsTyping(false);
    });
  }

 return (
    <div className="chatbot-container">
      <div className="message-list-container">
        <MainContainer>
          <ChatContainer>       
            <MessageList 
              scrollBehavior="smooth" 
              typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
            >
              {messages.map((message, i) => (
                <Message 
                  key={i} 
                  model={{
                    message: message.message,
                    sentTime: message.sentTime,
                    sender: message.sender,
                    direction: message.sender === "user" ? "outgoing" : "incoming",
                    position: "normal"
                  }}
                >
                  <Avatar src={message.avatar} name={message.sender} />
                </Message>
              ))}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />        
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}

export default StudentChatbot