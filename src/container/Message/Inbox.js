import React, { useState  } from 'react'
import styled from 'styled-components'

import { icSearch } from '../../icons'

import { PanelTitle  } from '../../components'

import {
  InboxCard  
} from '../../components'


const Container = styled.div`
  background: #f9f9f9;
  border-right: 1px solid #eee;
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

export class Inbox extends React.Component {
  render() {
    const { inboxes } = this.props
    return (
      <Container>
        
        <PanelTitle>Inbox</PanelTitle>
  
        <SearchBox>
            <SearchIcon src={icSearch} />
            <SearchInput placeholder="Search Proofn" />
          </SearchBox>
  
          {inboxes && inboxes.map(inbox => (
            <InboxCard key={inbox.id} 
              name={inbox.name}
              topic={inbox.topic}
              time={inbox.time}
              lastMessage={inbox.lastMessage}
              // click will be handle in parent
              handleClick={() => this.props.inboxClickHandler(inbox.id)}
              messageCount={inbox.messageCount} />
          ))}

      </Container>
    )
  }
} 