import React, { useEffect } from 'react';
import { Row, Col, Typography, Card, Spin } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';

const { Title } = Typography;

function Repos({ onFetchRepos, repos }) {
  useEffect(() => {
    onFetchRepos();
  }, [onFetchRepos]);

  return (
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
  );
}

Repos.defaultProps = {
  repos: [],
};

Repos.propTypes = {
  onFetchRepos: PropTypes.func.isRequired,
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ),
};

export default Repos;
