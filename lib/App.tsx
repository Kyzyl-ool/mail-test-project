import React from 'react';
import './App.scss';
import { Col, Row } from 'components/Grid';
import { Button } from 'components/Button';
import { Checkbox } from 'components/Checkbox';
import { useArrayData } from 'hooks/useData';
import { DataEntry } from './mocks/data';
import { Avatar } from 'components/Avatar';
import Typography from 'components/Typography';

const { Text, Title } = Typography;

const App: React.FC = () => {
  const [data, remove] = useArrayData<DataEntry>('http://example.com');

  return (
    <div className={'ux-app'}>
      <Row gap={8} className={'ux-app__head'}>
        <Col span={3}>
          <Button buttonType={'secondary'} fillAvailable>
            <Checkbox>Выбрать все</Checkbox>
          </Button>
        </Col>
        <Col span={3}>
          <Button fillAvailable>Удалить выбранные</Button>
        </Col>
      </Row>
      <div className={'ux-app__content'}>
        {data.map(value => (
          <Row key={value.id}>
            <Col span={1}>
              <Checkbox />
            </Col>
            <Col span={1}>
              <Avatar src={value.avatar} rounded />
            </Col>
            <Col span={4}>
              <Text>{value.sender}</Text>
            </Col>
            <Col
              span={17}
              style={{
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden'
              }}
            >
              <Text>{value.theme}</Text>&nbsp;&nbsp;&nbsp;&nbsp;
              <Text color={'light'}>{value.snippet}</Text>
            </Col>
          </Row>
        ))}
      </div>
    </div>
  );
};

export default App;
