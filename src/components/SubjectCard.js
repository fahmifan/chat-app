import React from 'react'
import styled from 'styled-components';

const Card = styled.div`
  width: 240px;
  padding: 13px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.select ? props.theme.color.primary : '#fff'};
  border-top: 1px solid #eee;
  line-height: 20px;

  &:hover {
    cursor: pointer;
  }
`

const Time = styled.p`
  font-size: 12px;
  text-align: left;
  ${props => props.notif ? 'color: #fd8c2e; font-weight: bold' : ''};  
  color: ${props => props.select ? '#fff' : '#bfbfbf'};  
`

const Topic = styled.p`
  font-size: 14px;
  font-weight: ${props => props.select ? 'reguler' : 'bold'};
  color: ${props => props.select ? '#fff' : '#262626'};  
  text-align: left;
  text-overflow: ellipsis;
`

const NotifMessage = styled.div`
  background: ${props => props.theme.color.primary};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  width: 19px;
  height: 19px;
  margin-right: 7px;
  border-radius: 100%;
`

const Desc = styled.p`
  color: ${props => props.select ? '#fff':'#9d9ea2' };
  font-size: 13px;
  max-width: 180px;
  text-overflow: ellipsis;
`
const Detail = styled.div`

`

export const SubjectCard = ({select, unreadMessageCount, handleClick, topic, desc, time}) => (
  <Card select={select} onClick={handleClick}>
    <Detail>
      <Topic select={select}>{topic}</Topic>
      <Desc select={select}>{desc}</Desc>
      <Time select={select}>{time}</Time>
    </Detail>
    {unreadMessageCount && <NotifMessage>{unreadMessageCount}</NotifMessage>}
  </Card>
)