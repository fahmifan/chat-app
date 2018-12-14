import styled from 'styled-components'

export * from './InboxCard'
export * from './ChatCard'
export * from './SubjectCard'

export const ProfilPict = styled.div`
  background: #ccc;
  width: 36px;
  height: 36px;
  border-radius: 100%;
`

export const LeftMenu = styled.div`
  /* background shoul be gradient: #ff711c --> #ff9b4b */
  background: #ff711c;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 14px;
`

export const Inbox = styled.div`
  background: blue;
`

export const ChatRoom = styled.div`
  background: blue;
`

export const SubjectList = styled.div`
  background: orange;
`
