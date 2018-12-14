import React, { useState  } from "react"
import styled from "styled-components"

const Root = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #fbfbfb;
`

const Layout = styled.main`
  display: grid;
  grid-template-columns: 56px 286px 500px 240px;
  height: 100vh;  
`

const ProfilPict = styled.div`
  background: #ccc;
  width: 36px;
  height: 36px;
  border-radius: 100%;
`

const LeftMenu = styled.div`
  background: #ff711c;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 14px;
`

const Inbox = styled.div`
  background: blue;
`

const ChatRoom = styled.div`
  background: blue;
`

const SubjectList = styled.div`
  background: orange;
`

export function Message() {
  return (
    <Root>
    <Layout>
      <LeftMenu>
        <ProfilPict />
        <p style={{fontSize: '10px', color: '#fff'}}>Message</p>
      </LeftMenu>
      <Inbox />
      <ChatRoom />
      <SubjectList />
    </Layout>
    </Root>
  )
} 
