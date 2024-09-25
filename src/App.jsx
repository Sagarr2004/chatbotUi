import { useState, useEffect } from 'react';
import './App.css';
import { Layout, theme } from 'antd';
import Logo from './Components/Logo';
import MenuList from './Components/MenuList';
import { Button } from 'antd';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator
} from "@chatscope/chat-ui-kit-react";
import useMessage from 'antd/es/message/useMessage';

const { Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(window.innerWidth < 768);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  const { token: { colorBgContainer } } = theme.useToken();

  // Handle resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth < 768;
      setIsSmallScreen(isSmall);
      setCollapsed(isSmall);
    };

    window.addEventListener('resize', handleResize);   
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Adjust content margin based on sidebar state
  const contentMarginLeft = collapsed ? (isSmallScreen ? 0 : 80) : 250;
  
  const[typing, setTyping] = useState(false)

  const [messages,setMessages] = useState([
     {
        message : "Hello I Am EduBot",
        sender : "ChatBot",
        direction:"incoming"
     }
  ])
  
  const handleSend = async (message) =>{
    const newMessage = {
      message: message,
      sender: "user",
      // direction: "outgoing"
      direction : typing ? "incoming" : "outgoing"
    }
  const newMessages=[...messages,newMessage]; //all the old messages + the new message
  console.log(newMessages);
  setMessages(newMessages);//update our messages state

  setTyping(!typing) // Typing State (chatbot is typing or not)
  // await botResponse(newMessages);
}  

  // async function botResponse(chatMessages){
    
  //   // chatMessages has all the que and ans 
  //   // send the latest prompt/mesage of the user from chatMessages to backend to get the response
  //   //  

  //     // setMessages(
  //     //   [...chatMessages, {
  //     //     message:"",
  //     //     sender: "CHatBoT"        
  //     //   }]
  //     // );

  //     setTyping(typing);
  // }



  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsed={collapsed}
        collapsible
        trigger={null}
        className="sidebar"
        width={250}
        style={{ display: isSmallScreen && collapsed ? 'none' : 'block' }}
      >
        <Logo collapsed={collapsed} />
        <MenuList />
      </Sider>

      <Layout className="main-content" style={{ marginLeft: contentMarginLeft }}>
        <Button
          type="text"
          className="toggle"
          onClick={() => setCollapsed(!collapsed)}
          icon={
            collapsed ? (
              <AiOutlineMenuUnfold className="menu-icon" />
            ) : (
              <AiOutlineMenuFold className="menu-icon" />
            )
          }
        />

        <Content className="content-area" >
          {/* <MainContainer> */}
          <ChatContainer>
            <MessageList 
              typingIndicator={typing ? <TypingIndicator content="CHaTBoT is typing"/>: null} > 
                {messages.map((message,i)=>{
                   return <Message key={i} model={message} />
                })}
            </MessageList>
            <MessageInput
               placeholder='Enter Prompt Here' onSend={handleSend}/>
          </ChatContainer>
          {/* </MainContainer> */}
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
