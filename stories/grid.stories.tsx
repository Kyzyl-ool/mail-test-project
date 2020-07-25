import React from 'react';
import Grid, { Row, Col } from 'components/Grid';
import Typography from 'components/Typography';

const { Text, Title } = Typography;

export default {
  title: 'Grid',
  component: Grid
};

export const OneRow = () => (
  <Row>
    <Col span={1}>
      <Text>1</Text>
    </Col>
    <Col span={11}>2</Col>
    <Col span={1}>3</Col>
    <Col span={11}>4</Col>
  </Row>
);

export const GapedRow = () => {
  return (
    <>
      <Row gap={90}>
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
