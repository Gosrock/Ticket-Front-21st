import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { login } from '../../../actions/auth';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './loginpage.css';

function LoginPage(props) {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const { authenticated, errorMessage, pending } = useSelector(
    state => state.auth
  );

  const onSubmitHandler = values => {
    // event.preventDefault();
    let body = {
      userId: values.email,
      password: values.password
    };
    console.log(body);

    // login 요청
    dispatch(login(body)).then(res => {
      console.log(authenticated, errorMessage, pending, res);

      if (!errorMessage) {
        navigate('/');
      } else {
        alert(errorMessage);
      }
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        flexDirection: 'column'
      }}
    >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true
        }}
        onFinish={onSubmitHandler}
      >
        <h2> 관리자 로그인</h2>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: '아이디 입력해 주세요'
            }
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '비밀번호입력해주세요'
            }
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            style={{ float: 'right' }}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            로그인{' '}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginPage;
