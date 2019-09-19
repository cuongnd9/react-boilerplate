import React, { useEffect } from 'react';
import { Row, Col, Breadcrumb, Icon, Typography, Spin } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';

const { Title, Text } = Typography;

function Repo({ onFetchRepo, onClearRepo, repo, match }) {
  useEffect(() => {
    onFetchRepo(match.params.name);
    return () => onClearRepo();
  }, [onFetchRepo, match.params.name, onClearRepo]);

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

Repo.defaultProps = {
  repo: {},
};

Repo.propTypes = {
  onFetchRepo: PropTypes.func.isRequired,
  onClearRepo: PropTypes.func.isRequired,
  repo: PropTypes.shape({
    name: PropTypes.string,
    html_url: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default Repo;
