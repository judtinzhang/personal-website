import s from 'styled-components'

export const NavStyle = s.nav`
  padding: 1rem 1.5rem 0rem 1.5rem;
  display: flex;
  width: 100%;
  max-height: 6rem;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(230, 230, 230, 0.8);
  align-items: center;
  justify-content: space-between;
  z-index: 100;
`

export const Text = s.p`
  font-size: ${({ size }) => size || '1rem'};
  font-weight: ${({ bold }) => (bold ? '500' : '350')};
  line-height: 1;
  overflow-wrap: break-word;
  color: '#4a4a4a';
  font-family: 'Be Vietnam Pro', sans-serif;
`

export const InLineText = s.p`
  font-size: ${({ size }) => size || '1rem'};
  font-weight: ${({ bold }) => (bold ? '500' : '350')};
  line-height: 1.25;
  overflow-wrap: break-word;
  color: 'black';
  font-family: 'Be Vietnam Pro', sans-serif;
`

export const Anchor = s.a`
  color: #4a4a4a;
  text-decoration: none!important;
  &:hover {
    text-decoration: none!important;
    color: #e54f6d;
  }
`

export const HyperLink = s.a`
  color: #e54f6d;
  text-decoration: none!important;
  &:hover {
    text-decoration: none!important;
    color: #4a4a4a;
  }
`

export const HeaderSpace = s.div`
  height: 6rem;
`

export const Card = s.div`
  border-radius: 10px;
  box-shadow: 0 0 8px 2px #d9d9d9;
  padding: 1.5rem 2rem;
  background-color: white;
  max-width: 50rem;
  margin: 30px
`

export const Row = s.div`
  display: flex;
  flex: 1 1 30%;
  align-items: center;
  justify-content: space-around;
`

export const ConnectTabs = s.div`
  display: flex;
  align-items: center;
`