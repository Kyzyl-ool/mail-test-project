import React from 'react';
import Grid, { Row, Col } from 'components/Grid';
import Typography from 'components/Typography';
import { boolean, number, withKnobs } from '@storybook/addon-knobs';

const { Text, Title } = Typography;

export default {
  title: 'Grid',
  component: Grid,
  decorators: [withKnobs]
};

export const OneRow = () => (
  <Row>
    <Col span={1} style={{ backgroundColor: '#ddd' }}>
      <Text>1</Text>
    </Col>
    <Col span={11} style={{ backgroundColor: '#ddd' }}>
      <Text>2</Text>
    </Col>
    <Col span={1} style={{ backgroundColor: '#ddd' }}>
      <Text>3</Text>
    </Col>
    <Col span={11} style={{ backgroundColor: '#ddd' }}>
      <Text>4</Text>
    </Col>
  </Row>
);

export const GapedRow = () => {
  return (
    <>
      <Row
        gap={number('Gap', 90, {
          min: 8,
          max: 80,
          step: 8
        })}
      >
        <Col span={6} style={{ backgroundColor: '#ddd' }}>
          <Text>1</Text>
        </Col>
        <Col span={6} style={{ backgroundColor: '#ddd' }}>
          <Text>2</Text>
        </Col>
        <Col span={6} style={{ backgroundColor: '#ddd' }}>
          <Text>3</Text>
        </Col>
        <Col span={6} style={{ backgroundColor: '#ddd' }}>
          <Text>4</Text>
        </Col>
      </Row>
      <Row gap={8}>
        <Col span={6} style={{ backgroundColor: '#ddd' }}>
          <Text>1</Text>
        </Col>
        <Col span={6} style={{ backgroundColor: '#ddd' }}>
          <Text>2</Text>
        </Col>
        <Col span={6} style={{ backgroundColor: '#ddd' }}>
          <Text>3</Text>
        </Col>
        <Col span={6} style={{ backgroundColor: '#ddd' }}>
          <Text>4</Text>
        </Col>
      </Row>
    </>
  );
};
