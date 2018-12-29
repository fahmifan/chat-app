import styled from 'styled-components'

export const PanelTitle = styled.div`
  height: 52px;
  background: ${props => props.theme.color ? props.theme.color.textIcon : '#fff'};
  font-size: 18px;
  text-align: left;
  color: ${props => props.theme.color ? props.theme.color.primaryText : '#262626'};
  display: flex;
  justify-content: space-between;
  padding-right: 13px;
  padding-left: 13px;
  align-items: center;
  box-sizing: border-box;
`
