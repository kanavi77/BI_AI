import { analysisByAsyncMqUsingPost } from '@/services/xingbi/chartController';
import { getUserByIdUsingGet } from '@/services/xingbi/scoreController';
import { useModel } from '@@/exports';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, message, Select, Space, Upload } from 'antd';
import { useForm } from 'antd/es/form/Form';
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// 动画效果
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(20px); }
`;

const StyledCard = styled(Card)`
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-in-out;

  &.ant-card-bordered {
    border: none;
  }

  .ant-card-head {
    background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%);
    color: #fff;
    border: none;

    .ant-card-head-title {
      font-weight: 700;
      font-size: 18px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }

  .ant-card-body {
    padding: 24px;
  }
`;

const StyledButton = styled(Button)`
  background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%);
  border: none;
  color: #fff;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

const StyledInput = styled(Input)`
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    border-color: #6a11cb;
    box-shadow: 0 0 0 2px rgba(106, 17, 203, 0.2);
  }
`;

const StyledTextArea = styled(Input.TextArea)`
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    border-color: #6a11cb;
    box-shadow: 0 0 0 2px rgba(106, 17, 203, 0.2);
  }
`;

const StyledSelect = styled(Select)`
  .ant-select-selector {
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    transition: all 0.3s ease;

    &:hover,
    &:focus {
      border-color: #6a11cb;
      box-shadow: 0 0 0 2px rgba(106, 17, 203, 0.2);
    }
  }
`;

const StyledUpload = styled(Upload)`
  .ant-upload.ant-upload-select-picture-card {
    border-radius: 4px;
    border: 1px dashed #d9d9d9;
    transition: all 0.3s ease;

    &:hover {
      border-color: #6a11cb;
    }
  }
`;

/**
 * Chart Analysis (Asynchronous)
 */
const addChartAsync: React.FC = () => {
  // For handling the form
  const [form] = useForm();
  // State of submission, default is not submitted
  const [submitting, setSubmitting] = useState<boolean>(false);
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState ?? [];

  const onFinish = async (values: any) => {
    // Prevent repeated submissions
    if (submitting) {
      return;
    }
    setSubmitting(true);

    // Destructure here first to get the required parameters
    const params = {
      ...values,
      file: undefined,
    };
    try {
      const scoreRes = await getUserByIdUsingGet();
      console.log('Score: ' + scoreRes.data);
      if (scoreRes.data < 5) {
        message.error('Insufficient points, please contact the administrator!');
      } else {
        const res = await analysisByAsyncMqUsingPost(params, {}, values.file.file.originFileObj);
        if (!res?.data) {
          message.error('Analysis failed:' + res.message);
        } else {
          message.success('Analysis successful, you can check it on my chart page later');
          // Clear the form after successful analysis
          form.resetFields();
        }
      }
    } catch (e: any) {
      message.error('Analysis failed' + e.message);
    }
    // Set to false after finishing
    setSubmitting(false);
  };

  const formItemLayout = {
    labelAlign: 'left',
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };

  return (
    <div className="add-chart-async">
      <StyledCard
        title={'Intelligent Analysis'}
        headStyle={{ borderRadius: '4px 4px 0 0' }}
        bodyStyle={{ padding: '24px' }}
      >
        <Form
          form={form}
          name="add-chart"
          {...formItemLayout}
          onFinish={onFinish}
          initialValues={{
            'input-number': 3,
            'checkbox-group': ['A', 'B'],
            rate: 3.5,
            'color-picker': null,
          }}
          style={{ maxWidth: 800 }}
        >
          <Form.Item
            label={<span style={{ fontWeight: 500 }}>Analysis Target</span>}
            name={'goal'}
            rules={[{ required: true }]}
          >
            <StyledTextArea
              placeholder={'Please enter your analysis demand, e.g., analyze the sales of products'}
              rows={4}
            />
          </Form.Item>

          <Form.Item
            label={<span style={{ fontWeight: 500 }}>Chart Name</span>}
            name="chartName"
            rules={[{ required: true }]}
          >
            <StyledInput placeholder={'Please enter your chart name'} />
          </Form.Item>

          <Form.Item name="chartType" label={<span style={{ fontWeight: 500 }}>&nbsp;&nbsp;&nbsp;Chart Type</span>}>
            <StyledSelect
              options={[
                { value: 'Line Chart', label: 'Line Chart' },
                { value: 'Bar Chart', label: 'Bar Chart' },
                { value: 'Scatter Chart', label: 'Scatter Chart' },
                { value: 'Pie Chart', label: 'Pie Chart' },
                { value: 'Radar Chart', label: 'Radar Chart' },
              ]}
            ></StyledSelect>
          </Form.Item>

          <Form.Item
            name="file"
            label={<span style={{ fontWeight: 500 }}>Original Excel Data</span>}
            rules={[{ required: true, message: 'Please upload a file' }]}
          >
            <StyledUpload name="file" maxCount={1} accept={'.xls,.xlsx'}>
              <Button icon={<UploadOutlined />}>Upload Excel File</Button>
            </StyledUpload>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
            <Space>
              <StyledButton
                type="primary"
                htmlType="Submit"
                loading={submitting}
                disabled={submitting}
              >
                Submit
              </StyledButton>
              <Button htmlType="reset">Reset</Button>
            </Space>
          </Form.Item>
        </Form>
      </StyledCard>
    </div>
  );
};

export default addChartAsync;
