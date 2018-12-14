import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  box-sizing: border-box;
  width: 429px;
  background: #fff;
  border-radius: 12px;
  margin-bottom: 22px;
`

const Header = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ececec;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
  padding-bottom: 10px;
  margin-left: 11px;
  margin-right: 11px;
  margin-bottom: 10px;
`

const Name = styled.div`
  color: #fd8d2e;
  font-size: 14px;
  font-weight: bold;
`

const Time = styled.div`
  color: #5a5a5a;
  font-size: 11px;
  font-weight: bold;
`

const Message = styled.p`
  box-sizing: border-box;
  font-size: 13px;
  line-height: 20px;
  text-align: left;
  color: #262626;
  padding-bottom: 36px;
  padding-left: 14px;
  padding-right: 14px;
`

export function ChatCard () {
  return (
    <Container>
      <Header>
        <Name>Stella Willson</Name>
        <Time>00:39AM</Time>
      </Header>
      <Message>
       Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical interface of the versions, therefore it has remained Microsoft’s product. Although, Lycoris, Red Hat, Mandrake, Suse, Knoppix, Slackware and Lindows make up some of the 
      </Message>
    </Container>
  )
} 