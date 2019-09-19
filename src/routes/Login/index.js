import React from 'react';
import { navigate } from '@reach/router';
import { Form, Icon, Input, Button, Checkbox, Typography } from 'antd';
import ReactCanvasNest from 'react-canvas-nest';
import './style.css';

const { Text } = Typography;

function Login({ form }) {
  function handleSubmit(event) {
    event.preventDefault();
    form.validateFields().then(() => navigate('/'));
  }
  const { getFieldDecorator } = form;

  return (
    <div className="login-container">
      <div className="login-logo">
        <img
          alt="React Boilerplate"
          src={`${process.env.PUBLIC_URL}/favicon.png`}
          className="login-logo-img"
        />
        <Text className="login-logo-text">
          <span className="login-logo-text-highlight">React</span>
          Boilerplate
        </Text>
      </div>
      <Form className="login" onSubmit={handleSubmit}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input.Password
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <a href="https://github.com/x-store">Forgot password</a>
          </div>
          <Button type="primary" htmlType="submit" style={{ display: 'block', width: '100%' }}>
            Log in
          </Button>
          Or <a href="https://github.com/x-store">register now!</a>
        </Form.Item>
      </Form>
      <ReactCanvasNest
        config={{ lineColor: ' 242, 125, 82 ', pointColor: ' 24, 144, 255 ', count: '50' }}
        style={{ backgroundColor: '#f9f6f2' }}
      />
    </div>
  );
}

export default Form.create({ name: 'login' })(Login);
