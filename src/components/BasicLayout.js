import React from 'react';
import { Row, Col } from 'antd';
import { Navbar } from 'components';

function BasicLayout({ children }) {
  return (
    <Row>
      <Navbar />
      <Col span={20} offset={2} style={{ paddingTop: '50px' }}>
        {children}
      </Col>
    </Row>
  );
}

export default BasicLayout;
