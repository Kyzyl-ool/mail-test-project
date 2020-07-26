import React from 'react';
import { renderWithoutCrash } from 'testing/shortcuts';
import { Col, Row } from 'components/Grid/index';

describe('Col component', () => {
  it('should render without crash', renderWithoutCrash(<Col span={1} />));
});

describe('Row component', () => {
  it('should render without crash', renderWithoutCrash(<Row />));
});
