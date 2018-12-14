import React, { useState  } from "react"
import styled from "styled-components"

import { icSearch } from '../icons'

import {
  InboxCard  
} from '../components'

const Root = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Rubik');
  font-family: 'Rubik', sans-serif;
  width: 100%;
  display: flex;
  justify-content: center;
  background: #f9f9f9;
`

const Layout = styled.main`
  display: grid;
  grid-template-columns: 56px 286px 500px 240px;
  height: 100vh;
  box-sizing: border-box;
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
`

const Inbox = styled.div`
  background: #f9f9f9;
`

const ChatRoom = styled.div`
  background: blue;
`

const SubjectList = styled.div`
  background: orange;
`

const InboxHeader = styled.div`
  height: 52px;
  background: #fff;
  font-size: 18px;
  text-align: left;
  color: #262626;
  display: flex;
  padding-left: 13px;
  align-items: center;
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

const Input = styled.input`
  box-sizing: border-box;
  width: 256px;
  border: none;
  height: 28px;
`

export function Message() {
  return (
    <Root>
    <Layout>
      <LeftMenu>
        <ProfilPict />
        <p style={{fontSize: '10px', color: '#fff'}}>Message</p>
      </LeftMenu>
      <Inbox>
        <InboxHeader>Inbox</InboxHeader>
        <SearchBox>
          <SearchIcon src={icSearch} />
          <Input placeholder="Search Proofn" />
        </SearchBox>
        <InboxCard />      
        <InboxCard select />
        <InboxCard notif messageCount={2} />
        <InboxCard />
      </Inbox>
      <ChatRoom />
      <SubjectList />
    </Layout>
    </Root>
  )
} 
