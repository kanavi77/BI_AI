import { css } from '@emotion/react';

// 背景和整体布局样式
export const containerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: auto;
  background-image: url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr');
  background-size: cover;
  transition: background 0.5s ease;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

// 表单卡片样式
export const formCardStyle = css`
  min-width: 280px;
  max-width: 400px;
  margin: auto;
  padding: 40px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// 输入框和图标动画样式
export const inputStyle = css`
  .ant-form-item-control-input-content {
    position: relative;

    .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
      border-color: #1890ff;
    }

    .ant-input-affix-wrapper:focus,
    .ant-input-affix-wrapper-focused {
      box-shadow: none;
      border-color: #40a9ff;
    }

    .anticon {
      color: #1890ff;
      transition: transform 0.3s ease;
    }

    input:focus + .anticon {
      transform: scale(1.1);
    }
  }
`;

// 按钮和链接样式
export const actionStyle = css`
  .ant-btn-primary {
    background-color: #1890ff;
    border-color: #1890ff;
    transition: background-color 0.3s ease, border-color 0.3s ease;

    &:hover,
    &:focus {
      background-color: #40a9ff;
      border-color: #40a9ff;
    }
  }

  .registerLink {
    display: block;
    text-align: center;
    margin-top: 20px;
    color: #1890ff;
    transition: color 0.3s ease;

    &:hover {
      color: #40a9ff;
    }
  }
`;

