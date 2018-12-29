import React from 'react'
import styled, { ThemeProvider } from 'styled-components';

const Card = styled.div`
  width: 286px;
  height: 98px;
  box-sizing: border-box;
  display: flex;
  justify-content: start;
  line-height: 20px;
  align-items: center;
  background: ${props => props.select ? props.theme.color.primaryBackground 
    : props.theme.color.textIcon};

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`
const ProfilPict = styled.div`
  background: ${props => props.imgUrl ? `url(${props.imgUrl})` : '#ccc'};
  background-size: cover;
  background-position: center;
  width: 50px;
  height: 50px;
  margin-left: 13px;
  margin-right: 9px;
  border-radius: 100%;
  border: 1px solid ${props => props.theme.color.secondaryBackground};
  box-sizing: border-box;
`

const Name = styled.div`
  display: flex;
  color: ${props => props.theme.color.primaryText};
  flex-direction: row;
  justify-content: space-between;
  font-size: 14px;
`

const PersonDetail = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  width: 150px;
  box-sizing: border-box;
`

const Topic = styled.p`
  color: ${props => props.theme.color.secondaryText};
  font-size: 13px;
`

const Time = styled.div`
  font-size: 12px;
  color: ${props => props.theme.color.secondaryText};
  align-self: flex-start;
  margin-right: 13px;
  margin-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props.notif ? `color: ${props.theme.color.primary}; font-weight: bold` : ''};  
`

const Message = styled.p`
  font-size: 14px;
  color: ${props => props.theme.color.divider};
`

const NotifMessage = styled.div`
  background: ${props => props.theme.color.primary};
  color: ${props => props.theme.color.textIcon};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  width: 19px;
  height: 19px;
  margin-left: 30px;
  margin-right: 7px;
  border-radius: 100%;
`

const Right = styled.div`
  height: 100%;
  display: grid;
  grid-auto-rows: 50% 50%;
`

export const InboxCard = ({select, name, imgUrl, time, notif, messageCount, topic, lastMessage, handleClick}) => (
  <Card select={select} onClick={handleClick}>
    <ProfilPict imgUrl={imgUrl}  />
    <PersonDetail>
      <Name>
        <span>{name}</span>
      </Name>
      <Topic>{topic}</Topic>
      <Message>{lastMessage}</Message>
    </PersonDetail>
    <Right>
      <Time notif={notif}>{time}</Time>
      {notif && <NotifMessage>{messageCount}</NotifMessage>}
    </Right>
  </Card>
)