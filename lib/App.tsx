import React, { MouseEvent } from 'react';
import './App.scss';
import { Col, Row } from 'components/Grid';
import { Button } from 'components/Button';
import { Checkbox } from 'components/Checkbox';
import { useArrayData } from 'hooks/useData';
import { DataEntry } from './mocks/data';
import { Avatar } from 'components/Avatar';
import Typography from 'components/Typography';
import { useSet } from 'hooks/useSet';

const { Text, Title } = Typography;

const App: React.FC = () => {
  const [data, removeSelectedData] = useArrayData<DataEntry>('http://example.com');
  const { set, add, remove } = useSet([]);

  const onSelectAllClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (data.every(value => set.has(value.id))) {
      data.forEach(value => remove(value.id));
    } else {
      data.forEach(value => add(value.id));
    }
  };

  const removeSelected = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    removeSelectedData(Array.from(set));
    set.clear();
  };

  return (
    <>
      <div className={'ux-app'}>
        <Row gap={8} className={'ux-app__head'}>
          <Col span={3}>
            <Button buttonType={'secondary'} fillAvailable onClick={onSelectAllClick} disabled={!data.length}>
              <Checkbox checked={data.every(value => set.has(value.id))} readOnly>
                Выбрать все
              </Checkbox>
            </Button>
          </Col>
          <Col span={3}>
            <Button fillAvailable onClick={removeSelected} disabled={!set.size}>
              Удалить выбранные
            </Button>
          </Col>
        </Row>
        <div className={'ux-app__content'}>
          {data && data.length ? (
            data.map(value => (
              <Row key={value.id}>
                <Col span={1}>
                  <Checkbox
                    checked={set.has(value.id)}
                    onChange={() => (set.has(value.id) ? remove(value.id) : add(value.id))}
                  />
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
            ))
          ) : (
            <Title color={'light'}>Почтовый ящик пуст</Title>
          )}
        </div>
      </div>
      <br />
      <Row>
        <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
          <a href={'storybook-static/index.html'}>
            <Button buttonType={'secondary'} uxSize={'medium'}>
              <Text>Открыть StoryBook</Text>
            </Button>
          </a>
        </Col>
      </Row>
    </>
  );
};

export default App;
