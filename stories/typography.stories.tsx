import React from 'react';
import Typography from 'components/Typography';

const { Text, Title } = Typography;

export default {
  title: 'Typography',
  component: Typography
};

export const TextLayout = () => (
  <>
    <Text>Medium text</Text>
    <br />
    <Text size={'small'}>Small text</Text>
    <br />
    <Text size={'large'}>Large text</Text>
    <br />
    <Title level={1}>Heading 1</Title>
    <br />
    <Title level={2}>Heading 2</Title>
    <br />
    <Title level={3}>Heading 3</Title>
    <br />
    <Title level={4}>Heading 4</Title>
    <br />
    <Title level={5}>Heading 5</Title>
    <br />
    <Title level={6}>Heading 6</Title>
    <br />
  </>
);

export const TextColors = () => (
  <>
    <Text color={'primary'}>Primary color</Text>
    <Text color={'black'}>Black color</Text>
    <Text color={'light'}>Light color</Text>

    <Title color={'primary'}>Primary color</Title>
    <Title color={'black'}>Black color</Title>
    <Title color={'light'}>Light color</Title>
  </>
);
