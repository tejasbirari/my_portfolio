import React from 'react'
import { styled } from 'styled-components';

const Contact = () => {
  return (
    <Wrapper>
        <Title>Contact Me</Title>

        <Row>

            <Group>
                <Label>Email</Label>
                <Text>tejasbirari2435@gmail.com</Text>
            </Group>

            <Group>
                <Label>Contact Number</Label>
                <Text>9325851819</Text>
            </Group>



        </Row>

    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 40px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;

  @media only screen and (max-width: 500px) {
    font-size: 22px;
  }
`;

const Row = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Group = styled.div``;

const Label = styled.label`
  color: #888;
  font-weight: 500;
`;

const Text = styled.p``;

export default Contact