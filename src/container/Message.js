import React, { useState  } from "react"
import styled from "styled-components"

import { icSearch, icMessage, icSendEnable, bgChat, icNewSubject } from '../icons'

import {
  InboxCard, ChatCard, SubjectCard  
} from '../components'

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

const Inbox = styled.div`
  background: #f9f9f9;
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
  flex-flow: column-reverse;
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

const SearchBox = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 269px;
  margin: 9px;
  background: #fff;
  border-radius: 6px;
`

const SearchIcon = styled.img`
  height: 13px;
  width: 12px;
  padding: 10px;
`

const SearchInput = styled.input`
  box-sizing: border-box;
  width: 256px;
  border: none;
  height: 28px;
  &:focus {
    outline: none;
  }
`

const LeftIcon = styled.img`
  margin-top: 42px;
  margin-bottom: 7px;
`

export function Message() {
  return (
    <Root>
    <Layout>

      <LeftMenu>
        <ProfilPict />
        <LeftIcon src={icMessage} />
        <p style={{fontSize: '10px', color: '#fff'}}>Message</p>
      </LeftMenu>

      <Inbox>
        <PanelTitle>Inbox</PanelTitle>

        <SearchBox>
          <SearchIcon src={icSearch} />
          <SearchInput placeholder="Search Proofn" />
        </SearchBox>

        <InboxCard />      
        <InboxCard select />
        <InboxCard notif messageCount={2} />
        <InboxCard />
      </Inbox>

      <ChatPanel>
        <PanelTitle>Life Advice Looking Thorugh Window</PanelTitle>

        <ChatList>
          <ChatCard owner />
          <ChatCard />
          <ChatCard />
          <ChatCard />
        </ChatList>

        <ChatInputBox>
         <ChatInput />
         <img src={icSendEnable} type="button" />
        </ChatInputBox>

      </ChatPanel>

      <SubjectList>
        <PanelTitle><span>Subject List</span> <img src={icNewSubject} /></PanelTitle>
        
        <SubjectCard />
        <SubjectCard select />
        <SubjectCard notif messageCount={2} />

      </SubjectList>

    </Layout>
    </Root>
  )
} 
