import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  box-sizing: border-box;
  width: 429px;
  background: ${props => props.owner ? '#fff1e2': '#fff'};
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
  color: ${props => props.owner ? '#262626': '#fd8d2e'};
  font-size: 12px;
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

export const ChatCard = ({owner, message, time, name}) => (
  <Container owner={owner}>
    <Header>
      { owner ? <Name owner={owner}>You ({name})</Name>
        : <Name>{name}</Name> }
      <Time>{time}</Time>
    </Header>
    <Message>
      {message}
    </Message>
  </Container>
)
