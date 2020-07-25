import React from 'react';
import './App.scss';
import { Col, Row } from 'components/Grid';
import { Button } from 'components/Button';
import { Checkbox } from 'components/Checkbox';

const App: React.FC = () => {
  return (
    <>
      <Row gap={8}>
        <Col span={3}>
          <Button buttonType={'secondary'} fillAvailable>
            <Checkbox>Выбрать все</Checkbox>
          </Button>
        </Col>
        <Col span={3}>
          <Button fillAvailable>Удалить выбранные</Button>
        </Col>
      </Row>
    </>
  );
};

export default App;
