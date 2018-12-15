import React, { useState  } from "react"
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
  background: #ccc;
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
  justify-content: flex-end;
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

const ChatInput = styled.input`
  box-sizing: border-box;
  width: 452px;
  border: none;
  height: 50px;

  &:focus {
    outline: none;
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
    inboxes: [
      {
        id: 1,
        topic: 'Life Advice Looking Thorugh Window',
        time: "12:08PM",
        lastMessage: "Sony laptops are among the most well",
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
        
          }
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
        topic: 'Linux Or Windows Which..',
        lastMessage: "There are advances being.. made in science and...",
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
    }
  }

  inboxClickHandler = (inboxId) => {
    console.log("inboxId", inboxId);

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

  render() {
    const { chatsToShow, inboxes, subjectListToShow, selected } = this.state
    const myUserId = 9
    return (
      <Root>
      <Layout>
  
        <LeftMenu>
          <ProfilPict />
          <LeftIcon src={icMessage} />
          <p style={{fontSize: '10px', color: '#fff'}}>Message</p>
        </LeftMenu>
  
        {inboxes && <Inbox selectedInboxId={selected.inboxId} inboxes={inboxes} inboxClickHandler={(inboxId) => this.inboxClickHandler(inboxId)} />}
  
        <ChatPanel>
          <PanelTitle>Life Advice Looking Thorugh Window</PanelTitle>
  
          <ChatList>
            {chatsToShow && chatsToShow.map(chat => (
              <ChatCard key={chat.id} 
                name={chat.name}
                owner={chat.userId === myUserId}
                userId={chat.userId}
                message={chat.message}
                time={chat.time}
              />
            ))}
          </ChatList>
  
          <ChatInputBox>
           <ChatInput />
           <img src={icSendEnable} type="button" />
          </ChatInputBox>
  
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

const $globData = [
  {
    userId: 9,
    inboxes: [
      {
        id: 1,
        topic: 'Life Advice Looking Thorugh Window',
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
        
          }
        ]  
      },
      {
        id: 2,
        topic: 'Linux Or Windows Which..',
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
        ]  
      },
      {
        id: 3,
        topic: 'What is hdpc',
        chats: [
          {
            id: 99,
            userId: 77,
            name: 'Cameron Webster',
            time: '05:18AM',
            message: 'Photographs are a way of.. preserving a moment in our lives for the rest of our lives.'
          }
        ]  
      },
    ]
  }
]
