import React, { useState  } from "react"
import ReactDOM from 'react-dom'
import styled from "styled-components"

import { icSearch, icMessage, icSendEnable, bgChat, icNewSubject } from '../../icons'

import {
  ChatCard, SubjectCard  
} from '../../components'

import { Inbox  } from './Inbox'

const Root = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Rubik');
  font-family: 'Rubik', sans-serif;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: #f9f9f9;
`

const Layout = styled.main`
  display: grid;
  grid-template-columns: 56px 286px 500px 240px;
  box-sizing: border-box;
  padding-bottom: 30px;
  padding-top: 6px;
`

const ProfilPict = styled.div`
  background: ${props => props.imgUrl ? `url(${props.imgUrl})` : '#ccc'};
  background-size: cover;
  background-position: center;
  width: 36px;
  height: 36px;
  border-radius: 100%;
`

const LeftMenu = styled.div`
  /* background shoul be gradient: #ff711c --> #ff9b4b */
  background: linear-gradient(to bottom, #ff9b4b 0%,#ff711c 100%);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 14px;
  border-right: 1px solid #eee;
`

const ChatPanel = styled.div`
  background: #eeeff1;
  box-sizing: border-box;
  border-right: 1px solid #eee;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`

const ChatList = styled.div`
  background: url(${bgChat});
  box-sizing: border-box;
  width: 100%;
  height: 80vh;
  overflow-y: scroll;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ChatInputBox = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
  width: 100%;
  background: #fff;
  height: 58px;
  border-top: 1px solid #eaeaea;
`

const ChatInput = styled.textarea`
  box-sizing: border-box;
  font-family: 'Rubik', sans-serif;
  width: 452px;
  border: none;
  height: 50px;
  font-size: 15px;
  padding-top: 16px;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: #b8b8b8;
  }
`

const ChatSend = styled.img`
  border: none;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`

const SubjectList = styled.div`
  background: #fff;
`

const PanelTitle = styled.div`
  height: 52px;
  background: #fff;
  font-size: 18px;
  text-align: left;
  color: #262626;
  display: flex;
  justify-content: space-between;
  padding-right: 13px;
  padding-left: 13px;
  align-items: center;
  box-sizing: border-box;
`

const LeftIcon = styled.img`
  margin-top: 42px;
  margin-bottom: 7px;
`

export class Message extends React.Component {
  state = {
    userId: 9,
    imgUrl: 'https://loremflickr.com/cache/resized/4828_44426255220_98bf676844_320_240_nofilter.jpg',
    username: 'Bondan',
    inboxes: [
      {
        id: 1,
        name: 'Stella Willson',
        imgUrl: 'https://loremflickr.com/cache/resized/4882_45134269935_82fc1799e9_320_240_nofilter.jpg',
        topic: 'Life Advice Looking Thorugh Window',
        time: "12:08PM",
        lastMessage: "Sony laptops are ",
        chats: [
          {
            id: 89,
            userId: 2,
            time: '00:39AM',
            name: 'Stella Willson',
            message: 'Do you want to download free song for ipod? If so, reading this article could save you from getting in to a lot of trouble! Downloading music to your Ipod has more than one pitfall associated with it, and this article will tell you the best ',
          },
          {
            id: 90,
            userId: 9,
            name: 'Bondan',
            time: '00:39AM',
            message: 'Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical interface of the versions, therefore it has remained Microsoft’s product. Although, Lycoris, Red Hat, Mandrake, Suse, Knoppix, Slackware and Lindows make up some of the different versions of LINUX. '
          },
        ],
        subjectList: [
          { 
            id: 12,
            topic: 'Popular Uses Of The Internet',
            desc: 'The Myspace page defines',
            time: '05:16PM',
            unreadMessageCount: 2,
          },
          {
            id: 1,
            topic: 'Life Advice Looking Through..',
            desc: 'Audio player software',
            time: '06:40PM',
          }
        ]
      },
      {
        id: 2,
        name: 'Isaiah Sharp',
        imgUrl: 'https://loremflickr.com/cache/resized/4806_46034232831_217137d386_320_240_nofilter.jpg',
        topic: 'Linux Or Windows Which..',
        lastMessage: "There are advances being...",
        time: "01:01AM",
        chats: [
          {
            id: 91,
            userId: 13,
            time: '01:01AM',
            name: 'Ervin Howell',
            message: 'There are advances being.. made in science and technology everyday, and a good example of this is the LCD monitor. LCD monitors have several benefits over the old chunky computer monitors that most users are familiar with. Old computer monitors, take up quite a bit of desktop space, put out a ton of heat, drain a ton of energy, and most often have low picture quality and resolution ',
          },
          {
            id: 92,
            userId: 9,
            name: 'Bondan',
            time: '01:01AM',
            message: 'Oke '        
          }
        ],
        subjectList: []
      },
      {
        id: 3,
        name: 'Cameron Webster',
        imgUrl: 'https://loremflickr.com/cache/resized/4892_45120447565_bcae0ea975_n_320_240_nofilter.jpg',
        topic: 'What is hdpc',
        lastMessage: "Photographs are a way of.. ",
        time: "12:08PM",        
        chats: [
          {
            id: 99,
            userId: 77,
            name: 'Cameron Webster',
            time: '05:18AM',
            message: 'Photographs are a way of.. preserving a moment in our lives for the rest of our lives.'
          }
        ],
        subjectList: []
      },
    ],
    chatsToShow: [],
    subjectListToShow: [],
    selected: {
      inboxId: -1,
      subjectListId: -1,
    },
    inboxSearch: '',
    chatInput: '',
  }

  componentDidMount() {
    this.scrollToBottom()
  }

  inboxClickHandler = (inboxId) => {
    const inbox = this.state.inboxes.filter(inbox => inbox.id === inboxId)[0]
    console.log("inbox", inbox)
    this.setState({
      selected: {
        ...this.state.selected,
        inboxId: inboxId,
        subjectListId: inboxId,
      },
      chatsToShow: [...inbox.chats],
      subjectListToShow: [...inbox.subjectList],
    })
  }

  searchInputHandler = (event) => {
    this.setState({inboxSearch: event.target.value})
  }

  chatInputHandler = (event) => {
    this.setState({chatInput: event.target.value})
  }

  chatSendHandler = () => {
    const inboxId = this.state.selected.inboxId
    const currInbox = this.state.inboxes.filter(inbox => inbox.id === inboxId)[0]
    const currChats = [...currInbox.chats]
    const newChat = {
      id: currChats[currChats.length - 1].id + 1,
      name: this.state.username,
      userId: this.state.userId,
      time: currChats[currChats.length - 1].time,
      message: this.state.chatInput,
    }

    const updatedInboxes = [...this.state.inboxes].map(inbox => {
      if(inbox.id === currInbox.id) {
        inbox.chats = [...inbox.chats, newChat]
      }

      return inbox
    })  

    this.setState({
      inboxes: updatedInboxes,
      chatInput: '',
    })

    this.inboxClickHandler(inboxId)
  }

  scrollToBottom = () => {
    const { chatList } = this.refs
    const scrollHeight = chatList.scrollHeight
    const height = chatList.clientHeight
    const maxScrollTop = scrollHeight - height
    ReactDOM.findDOMNode(chatList).scrollTop = maxScrollTop > 0 ? maxScrollTop : 0 
  }

  render() {
    const { 
      userId, 
      chatsToShow, 
      inboxes, 
      subjectListToShow, 
      selected, 
      inboxSearch,
      chatInput, 
      imgUrl,
    } = this.state

    return (
      <Root>
      <Layout>
  
        <LeftMenu>
          <ProfilPict imgUrl={imgUrl}  />
          <LeftIcon src={icMessage} />
          <p style={{fontSize: '10px', color: '#fff'}}>Message</p>
        </LeftMenu>
  
        {inboxes && <Inbox 
          selectedInboxId={selected.inboxId} 
          inboxes={inboxes} 
          inboxClickHandler={(inboxId) => this.inboxClickHandler(inboxId)} 
          searchInputHandler={(e) => this.searchInputHandler(e)}
          searchValue={inboxSearch}
        />}
  
        <ChatPanel>
          <PanelTitle>Life Advice Looking Thorugh Window</PanelTitle>
  
          <ChatList ref="chatList">
            {chatsToShow && chatsToShow.map(chat => (
              <ChatCard key={chat.id} 
                name={chat.name}
                owner={chat.userId === userId}
                userId={chat.userId}
                message={chat.message}
                time={chat.time}
              />
            ))}
          </ChatList>
  
          {/* inboxId -1 should be invalid, so it will hide the chat input */}
          {selected.inboxId !== -1 && <ChatInputBox>
            <ChatInput placeholder="Write message..."
              onChange={(e) => this.chatInputHandler(e)} value={chatInput} />
            <ChatSend src={icSendEnable} 
              onClick={() => this.chatSendHandler()} />
          </ChatInputBox> }  
        </ChatPanel>
  
        <SubjectList>
          <PanelTitle><span>Subject List</span> <img src={icNewSubject} /></PanelTitle>
          
          {subjectListToShow && subjectListToShow.map(subject => (
            <SubjectCard
              key={subject.id}
              select={selected.subjectListId === subject.id}
              topic={subject.topic}
              desc={subject.desc}
              time={subject.time}
              unreadMessageCount={subject.unreadMessageCount}
            />
          )) }
  
        </SubjectList>
  
      </Layout>
      </Root>
    )
  }
} 
