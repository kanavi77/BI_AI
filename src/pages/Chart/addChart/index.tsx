import { analysisBySynchronizeUsingPost } from '@/services/xingbi/chartController';
import { getUserByIdUsingGet } from '@/services/xingbi/scoreController';
import { UploadOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  message,
  Row,
  Select,
  Space,

  Upload,
} from 'antd';
import ReactECharts from 'echarts-for-react';
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

const StyledDivider = styled(Divider)`
  margin: 24px 0;
  border-color: #d9d9d9;
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 5px solid #6a11cb;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

/**
 * Chart Analysis (Synchronous)
 */
const addChart: React.FC = () => {
  // Used to store chart information
  const [chart, setChart] = useState<API.BiResponse>();
  // Submitting status, default is not submitted
  const [submitting, setSubmitting] = useState<boolean>(false);

  const onFinish = async (values: any) => {
    // Avoid duplicate submissions
    if (submitting) {
      return;
    }
    setSubmitting(true);
    // Clear page data after resubmitting
    setChart(undefined);
    // Here, we first destructure to get the required parameters
    const params = {
      ...values,
      file: undefined,
    };
    try {
      const scoreRes = await getUserByIdUsingGet();
      console.log('Score: ' + scoreRes.data);
      if (scoreRes.data < 5) {
        message.error('Insufficient score, please contact the administrator!');
      } else {
        const res = await analysisBySynchronizeUsingPost(
          params,
          {},
          values.file.file.originFileObj,
        );
        if (!res?.data) {
          message.error('Analysis failed: ' + res.message);
        } else {
          message.success('Analysis successful');
          setChart(res.data);
        }
      }
    } catch (e: any) {
      message.error('Analysis failed' + e.message);
    }
    // Set to false after completion
    setSubmitting(false);
  };

  const formItemLayout = {
    labelAlign: 'left',
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };

  return (
    <div className="add-chart">
      <Row gutter={[24, 24]}>
        <Col xs={24} md={16}>
          <StyledCard
            title={'Intelligent Analysis'}
            headStyle={{ borderRadius: '4px 4px 0 0' }}
            bodyStyle={{ padding: '24px' }}
          >
            <Form
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
                label={
                  <span style={{ fontWeight: 500 }}>Analysis Target</span>
                }
                name={'goal'}
                rules={[{ required: true }]}
              >
                <StyledTextArea
                  placeholder={'Please enter your analysis request, e.g., analyze product sales'}
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

              <Form.Item
                name="chartType"
                label={<span style={{ fontWeight: 500 }}>&nbsp;&nbsp;&nbsp;Chart Type</span>}
              >
                <StyledSelect
                  options={[
                    { value: 'Line Chart', label: 'Line Chart' },
                    { value: 'Bar Chart', label: 'Bar Chart' },
                    { value: 'Scatter Plot', label: 'Scatter Plot' },
                    { value: 'Pie Chart', label: 'Pie Chart' },
                    { value: 'Stacked Chart', label: 'Stacked Chart' },
                    { value: 'Radar Chart', label: 'Radar Chart' },
                  ]}
                ></StyledSelect>
              </Form.Item>

              <Form.Item
                name="file"
                label={
                  <span style={{ fontWeight: 500 }}>Original Excel Data</span>
                }
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
        </Col>
        <Col xs={24} md={8}>
          <StyledCard
            title={'Analysis Conclusion'}
            headStyle={{ borderRadius: '4px 4px 0 0' }}
            bodyStyle={{ padding: '24px' }}
          >
            {chart?.genResult ?? (
              <div style={{ color: '#888', fontStyle: 'italic' }}>
                Please submit the form on the left
              </div>
            )}
            {submitting && (
              <LoadingOverlay>
                <LoadingSpinner />
              </LoadingOverlay>
            )}
          </StyledCard>
          <StyledDivider />
          <StyledCard
            title={'Generated Chart'}
            headStyle={{ borderRadius: '4px 4px 0 0' }}
            bodyStyle={{ padding: '24px', position: 'relative' }}
          >
            {chart?.genChart ? (
              <ReactECharts option={chart?.genChart} />
            ) : (
              <div style={{ color: '#888', fontStyle: 'italic' }}>
                Please submit the form on the left
              </div>
            )}
            {submitting && (
              <LoadingOverlay>
                <LoadingSpinner />
              </LoadingOverlay>
            )}
          </StyledCard>
        </Col>
      </Row>
    </div>
  );
};

export default addChart;
