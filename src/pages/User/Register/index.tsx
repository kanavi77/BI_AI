import Footer from '@/components/Footer';
import { listChartVoByPageUsingPost } from '@/services/xingbi/chartController';
import { userRegisterUsingPost } from '@/services/xingbi/userController';
import { Link } from '@@/exports';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormText } from '@ant-design/pro-components';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { Helmet, history, useModel } from '@umijs/max';
import { message, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';

const Register: React.FC = () => {
  //const [] = useState<API.LoginResult>({});
  const [type, setType] = useState<string>('account');
  const { refresh } = useModel('@@initialState');
  const containerClassName = useEmotionCss(() => {
    return {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    };
  });

  useEffect(() => {
    listChartVoByPageUsingPost({}).then((res) => {
      console.log('res', res);
    });
  });

  const handleSubmit = async (values: API.UserLoginRequest) => {
    try {
      // Register
      const res = await userRegisterUsingPost(values);
      console.log(res);
      if (res.code === 0) {
        const defaultLoginSuccessMessage = 'Registration successful!';
        message.success(defaultLoginSuccessMessage);

        //if (!history) return;
        history.push({
          pathname: '/user/login',
        });
        refresh();
        return;
      } else {
        message.error(res.message);
      }
      // If failed, set user error message
    } catch (error) {
      const defaultLoginFailureMessage = 'Registration failed, please try again!';
      console.log(error);
      message.error(defaultLoginFailureMessage);
    }
  };

  return (
    <div className={containerClassName}>
      <Helmet>
        <title>{'Register'} -</title>
      </Helmet>
      <div
        style={{
          flex: '1',
          padding: '32px 0',
        }}
      >
        <LoginForm
          contentStyle={{
            minWidth: 280,
            maxWidth: '75vw',
          }}
          logo={<img alt="logo" src="/logo.svg" />}
          title="IntelliDataEngine"
          subTitle={'IntelliDataEngine is still under development'}
          submitter={{
            searchConfig: {
              submitText: 'Register',
            },
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.UserRegisterRequest);
          }}
        >
          <Tabs
            activeKey={type}
            onChange={setType}
            centered
            items={[
              {
                key: 'account',
                label: 'User Registration',
              },
            ]}
          />

          {type === 'account' && (
            <>
              <ProFormText
                name="userAccount"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined />,
                }}
                placeholder={'Enter username'}
                rules={[
                  {
                    required: true,
                    message: 'Username is required!',
                  },
                ]}
              />
              <ProFormText.Password
                name="userPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                placeholder={'Enter password'}
                rules={[
                  {
                    required: true,
                    message: 'Password is required!',
                  },
                ]}
              />
              <ProFormText.Password
                name="checkPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                placeholder={'Confirm password'}
                rules={[
                  {
                    required: true,
                    message: 'Confirm password is required!',
                  },
                ]}
              />
            </>
          )}
          <div
            style={{
              marginRight: 10,
              marginBottom: 10,
            }}
          >
            <Link to={'/user/login'}>Already have an account? Click to login</Link>
          </div>
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};

export default Register;