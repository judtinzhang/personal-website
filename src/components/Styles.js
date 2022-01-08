import s from 'styled-components'

export const NavStyle = s.nav`
  padding: 1rem 1.5rem 0rem 1.5rem;
  display: flex;
  width: 100%;
  max-height: 8rem;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(247, 247, 247, 0.9);
  align-items: center;
  justify-content: space-between;
  z-index: 100;
`

export const Text = s.p`
  font-size: ${({ size }) => size || '1rem'};
  font-weight: ${({ bold }) => (bold ? '500' : '350')};
  line-height: 1.25;
  overflow-wrap: break-word;
  color: '#4a4a4a';
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
  height: 8rem;
`

export const Card = s.div`
  border-radius: 10px;
  box-shadow: 0 0 8px 2px #d9d9d9;
  padding: 1.5rem 2rem;
  background-color: white;
  margin-bottom: 2rem;
  max-width: 50rem;
  margin: 30px
`

export const Column = s.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`