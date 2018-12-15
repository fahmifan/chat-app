import React from 'react'
import styled from 'styled-components';

const Card = styled.div`
  width: 286px;
  height: 98px;
  box-sizing: border-box;
  display: flex;
  justify-content: start;
  align-items: center;
  background: ${props => props.select ?'#eaeaea' : '#fff'};

  &:hover {
    cursor: pointer;
  }
`
const ProfilPict = styled.div`
  background: #ccc;
  width: 50px;
  height: 50px;
  margin-left: 13px;
  margin-right: 9px;
  border-radius: 100%;
  box-sizing: border-box;
`

const Name = styled.div`
  display: flex;
  color: #262626;
  flex-direction: row;
  justify-content: space-between;
  font-size: 14px;
`

const PersonDetail = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  width: 160px;
  box-sizing: border-box;
`

const Topic = styled.p`
  color: #414141;
  font-size: 13px;
`

const Time = styled.div`
  font-size: 12px;
  color: #bfbfbf;
  align-self: flex-start;
  margin-right: 13px;
  margin-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props.notif ? 'color: #fd8c2e; font-weight: bold' : ''};  
`

const Message = styled.p`
  font-size: 14px;
  color: #9d9ea2;
`

const NotifMessage = styled.div`
  background: #fd9b2e;
  color: #fff;
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

export const InboxCard = ({select, name, time, notif, messageCount, topic, message, handleClick: clickHandler}) => (
  <Card select={select} onClick={clickHandler}>
    <ProfilPict />
    <PersonDetail>
      <Name>
        <span>{name}</span>
      </Name>
      <Topic>{topic}</Topic>
      <Message>{message}</Message>
    </PersonDetail>
    <Right>
      <Time notif={notif}>{time}</Time>
      {notif && <NotifMessage>{messageCount}</NotifMessage>}
    </Right>
  </Card>
)