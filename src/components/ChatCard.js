import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { theme } from "../theme";

const Container = styled.div`
  box-sizing: border-box;
  width: 429px;
  background: ${props => props.owner ? props.theme.color.primaryLight: props.theme.color.textIcon};
  border-radius: 12px;
  margin-bottom: 22px;
`

const Header = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.color.divider};
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
  padding-bottom: 10px;
  margin-left: 11px;
  margin-right: 11px;
  margin-bottom: 10px;
`

const Name = styled.div`
  color: ${props => props.owner ? props.theme.color.primaryText: props.theme.color.primary};
  font-size: 12px;
  font-weight: bold;
`

const Time = styled.div`
  color: ${props => props.theme.color.secondaryText};
  font-size: 11px;
  font-weight: bold;
`

const Message = styled.p`
  box-sizing: border-box;
  font-size: 13px;
  line-height: 20px;
  text-align: left;
  color: ${props => props.theme.color.primaryText};
  overflow-wrap: break-word;
  padding-bottom: 11px;
  padding-left: 14px;
  padding-right: 14px;
`

export const ChatCard = ({owner, message, time, name}) => (
  <ThemeProvider theme={theme}>
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
  </ThemeProvider>
)
