import React, { Component } from 'react';
import { Typography, Badge, Icon, Input } from 'antd';
import { Link } from '@reach/router';
import './style.css';

const { Text } = Typography;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleSearch: false,
    };
  }

  handleToggleSearchInput = () => {
    this.setState(state => ({ visibleSearch: !state.visibleSearch }));
  };

  render() {
    const { visibleSearch } = this.state;
    return (
      <nav className="menu">
        {!visibleSearch && (
          <Link to="/" className="logo">
            <img
              alt="React Boilerplate"
              src={`${process.env.PUBLIC_URL}/favicon.png`}
              className="logo-img"
            />
            <Text className="logo-text">
              <span className="logo-text-highlight">React</span>
              Boilerplate
            </Text>
          </Link>
        )}
        {!visibleSearch && (
          <div className="menu-items">
            <Link className="menu-item menu-item-active" to="/">
              React
            </Link>
            <Link className="menu-item" to="/">
              Redux
            </Link>
            <Link className="menu-item" to="/">
              Hooks
            </Link>
            <Link className="menu-item" to="/">
              Graphql
            </Link>
            <Link className="menu-item" to="/">
              Ant Design
            </Link>
          </div>
        )}
        <div className="menu-icons" style={{ width: visibleSearch ? '100%' : '40%' }}>
          {visibleSearch && (
            <>
              <Icon
                type="search"
                className="menu-icons-item"
                style={{ marginLeft: '0px', marginRight: '20px' }}
              />
              <Input
                type="text"
                placeholder="Enter your keyword..."
                size="large"
                className="search-input"
                required
              />
            </>
          )}
          <Icon
            type={visibleSearch ? 'close' : 'search'}
            className="menu-icons-item"
            style={{ color: visibleSearch && '#f27c52' }}
            onClick={this.handleToggleSearchInput}
          />
          <Badge dot>
            <Link to="/login">
              <Icon type="ant-design" className="menu-icons-item" />
            </Link>
          </Badge>
        </div>
      </nav>
    );
  }
}

export default Navbar;
