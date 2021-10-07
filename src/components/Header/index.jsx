import logoImg from '../../assets/logo.svg';

import { Container, Content } from './style';

export function Header(props){
  return(
    <Container>
        <Content>
          <img src={logoImg} alt="Dt Money" />
          <button > Nova transação </button>
        </Content>
    </Container>
  )
}