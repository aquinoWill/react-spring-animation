import React from 'react';
import { useTransition, config } from 'react-spring';
import {
  Container,
  Item,
  Title,
  Description,
  Button,
  Avatar,
  Section,
} from './styles';
import data from './data';

const HomePage = () => {
  const transitions = useTransition(data, item => item.id, {
    from: { bottom: -200 },
    enter: { bottom: 0 },
    config: config.wobbly,
  });

  const src = 'https://farm8.staticflickr.com/7328/9000198669_57003f7505_n.jpg';

  return (
    <Section>
      <Container>
        {transitions.map(({ item, props, key }) => (
          <Item key={key} style={props}>
            <img src={src} alt="imagem" />

            <Avatar src={item.avatar} alt="Avatar" />
            <Title>{item.name}</Title>
            <Description>{item.description}</Description>
            <Button>View Profile</Button>
          </Item>
        ))}
      </Container>
    </Section>
  );
};

export default HomePage;
