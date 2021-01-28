import styled from 'styled-components';
import db from '../db.json'
import { Widget, Header, Content } from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Header>
            <h1>{db.title}</h1>
          </Header>

          <Content>
            <p>{db.description}</p>
          </Content>
        </Widget>

        <Widget>
          <Content>
            <h1>Quizes da Galera</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi molestias error repellat officiis minus mollitia porro adipisci nostrum doloribus? Vero animi voluptates cupiditate? Praesentium ab ipsum ea quae voluptatem aliquid.</p>
          </Content>
        </Widget>
        <Footer />  
      </QuizContainer>
    </QuizBackground>
  )
}
