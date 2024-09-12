import styled from 'styled-components'
import LogoImg from './HeaderLogo/logo.png'
export default function HeaderComponent() {
  return (
    <HeaderBox>
      <Logo src={LogoImg} />
    </HeaderBox>
  )
}

const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 3.8rem 16.2rem;
  border-bottom: 1px solid #dbdbdb;
`
const Logo = styled.img`
  max-width: 15rem;
  max-height: 2.4rem;
`
