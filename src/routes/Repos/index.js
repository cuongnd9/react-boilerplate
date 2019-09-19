import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Typography, Card, Spin } from 'antd';
import { Link } from '@reach/router';
import { Navbar } from 'components';
import { fetchAction } from 'models/repos/actions';
import './style.css';

const { Title } = Typography;

function Repos() {
  const dispatch = useDispatch();
  const repos = useSelector(state => state.repos);

  useEffect(() => {
    dispatch(fetchAction());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Row>
        <Col span={20} offset={2} style={{ paddingTop: '50px' }}>
          <Title level={4}>My Repos</Title>
          {repos.length === 0 && <Spin />}
          <Row gutter={16}>
            {repos.length !== 0 &&
              repos.map(repo => (
                <Col key={repo.id} span={12}>
                  <Card
                    title={repo.name}
                    extra={<Link to={`/${repo.name}`}>More</Link>}
                    style={{ marginBottom: '15px' }}
                  >
                    <p>{repo.description}</p>
                  </Card>
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Repos;
