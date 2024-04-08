import Footer from '@/components/Footer';
import { getLoginUserUsingGet, userLoginUsingPost } from '@/services/xingbi/userController';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormText } from '@ant-design/pro-components';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { Helmet, history, useModel } from '@umijs/max';
import { message, Tabs } from 'antd';
import React, { useState } from 'react';
import { flushSync } from 'react-dom';
import { Link } from 'umi';
import Settings from '../../../../config/defaultSettings';

const Login: React.FC = () => {
  const [type, setType] = useState<string>('account');
  const { refresh, setInitialState } = useModel('@@initialState');
  const containerClassName = useEmotionCss(() => ({
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: '#f0f2f5', // 使用淡灰色作为背景色
  }));

  const loginFormClassName = useEmotionCss(() => ({
    maxWidth: 360,
    margin: 'auto', // 水平居中
    padding: 40,
    backgroundColor: '#fff',
    borderRadius: 8,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // 添加阴影
    animation: 'fadeIn 0.5s ease', // 添加淡入动画
    '@keyframes fadeIn': {
      '0%': { opacity: 0, transform: 'translateY(-20px)' }, // 从上方淡入
      '100%': { opacity: 1, transform: 'translateY(0)' },
    },
  }));



  const fetchUserInfo = async () => {
    //const userInfo = await initialState?.fetchUserInfo?.();
    const userInfo = await getLoginUserUsingGet();
    if (userInfo) {
      flushSync(() => {
        // @ts-ignore
        setInitialState((s) => ({
          ...s,
          currentUser: userInfo,
        }));
      });
    }
  };

  const handleSubmit = async (values: API.UserLoginRequest) => {
    try {
      // Login
      const res = await userLoginUsingPost(values);
      console.log(res);
      if (res.code === 0) {
        const defaultLoginSuccessMessage = 'Login successful!';
        message.success(defaultLoginSuccessMessage);
        await fetchUserInfo();
        // // Redirect to the previous page before login
        const urlParams = new URL(window.location.href).searchParams;
        history.push(urlParams.get('redirect') || '/');
        refresh();
        return;
      } else {
        message.error(res.message);
      }
    } catch (error) {
      const defaultLoginFailureMessage = 'Login failed, please try again!';
      console.log(error);
      message.error(defaultLoginFailureMessage);
    }
  };

  return (
    <div className={containerClassName}>
      <Helmet>
        <title>
          {'Login'} - {Settings.title}
        </title>
      </Helmet>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <LoginForm
          className={loginFormClassName}
          logo={<img alt="logo" src="/logo.svg" style={{ maxWidth: 150, marginBottom: 24 }} />}
          title="Welcome to IntelliDataEngine"
          subTitle="Please log in to continue"
          onFinish={async (values) => {
            await handleSubmit(values as API.UserLoginRequest);
          }}
        >
          <Tabs
            activeKey={type}
            onChange={setType}
            centered
            items={[
              {
                key: 'account',
                label: 'Account Login',
              },
            ]}
          />

          {type === 'account' && (
            <>
              <ProFormText
                name="userAccount"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined style={{ color: '#8c8c8c' }} />,
                  style: { marginBottom: 16 },
                }}
                placeholder="Username"
                initialValue="guest"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your username!',
                  },
                ]}
              />
              <ProFormText.Password
                name="userPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined style={{ color: '#8c8c8c' }} />,
                }}
                placeholder="Password"
                initialValue="12345678"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your password!',
                  },
                ]}
              />
            </>
          )}

          <div style={{ marginTop: 24, textAlign: 'center' }}>
            <Link to={'/user/register'} style={{ color: '#1890ff' }}>
              Create an account
            </Link>
          </div>
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};
export default Login;
