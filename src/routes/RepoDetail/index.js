import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Breadcrumb, Icon, Typography, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { fetchAction, clearAction } from 'models/repo/actions';
import './style.css';

const { Title, Text } = Typography;

function RepoDetail({ match }) {
  const dispatch = useDispatch();

  const repo = useSelector(state => state.repo);

  useEffect(() => {
    dispatch(fetchAction(match.params.name));
    return () => dispatch(clearAction());
  }, [dispatch, match.params.name]);

  return (
    <Row>
      <Col span={20} offset={2} style={{ paddingTop: '50px' }}>
        <Breadcrumb>
          <Link to="/">
            <Breadcrumb.Item href="">
              <Icon type="home" />
            </Breadcrumb.Item>
          </Link>
          <Breadcrumb.Item>Repo</Breadcrumb.Item>
        </Breadcrumb>
        <Title level={4} style={{ marginTop: '20px' }}>
          {repo.name}
        </Title>
        {Object.keys(repo).length === 0 && <Spin />}
        {Object.keys(repo).length > 0 && (
          <>
            <p className="text-primary">{repo.full_name}</p>
            <p className="text-secondary">{repo.description}</p>
            <Text mark className="text-warning">
              {repo.language}
            </Text>
          </>
        )}
      </Col>
    </Row>
  );
}

export default RepoDetail;
