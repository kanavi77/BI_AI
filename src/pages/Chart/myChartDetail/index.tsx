

import { getChartByIdUsingGet, updateChartUsingPost } from '@/services/xingbi/chartController';
import { Button, Card, Col, Divider, Form, Input, message, Modal, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import CsvTable from "@/components/CsvTable";
import './chartDetail.css';

const { Title, Text } = Typography;

/**
 * Chart Page
 */
const ChartDetail: React.FC = () => {
  const [chart, setChart] = useState<API.Chart>();
  const [editData, setEditData] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const GREEN_COLOR = '#52c41a';

  const chartData = async () => {
    try {
      const res = await getChartByIdUsingGet({ id });
      if (res.data) {
        setChart(res.data);
      } else {
        message.error(res.message);
      }
    } catch (e: any) {
      message.error('Failed to get chart details,' + e.message);
    }
  };

  const EditModal = ({ visible, onCancel, onEdit, chart }) => {
    const [form] = Form.useForm();

    const handleOk = () => {
      form
        .validateFields()
        .then((values) => {
          onEdit(values);
          form.resetFields();
        })
        .catch((errorInfo) => {
          console.log('Validation Failed:', errorInfo);
        });
    };

    return (
      <Modal title="Edit Chart" visible={visible} onCancel={onCancel} onOk={handleOk}>
        <Form form={form} initialValues={chart}>
          <Form.Item name="id" label="Chart ID">
            <Input readOnly />
          </Form.Item>
          <Form.Item
            name="chartName"
            label="Chart Name"
            rules={[{ required: false, message: 'Please enter chart name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="genResult" label="Analysis Conclusion" rules={[{ required: false }]}>
            <Input.TextArea rows={8} />
          </Form.Item>
        </Form>
      </Modal>
    );
  };

  const editChart = (data: any) => {
    setEditData(data);
    setIsModalVisible(true);
  };

  const handleEditConfirm = async (editedData: API.ChartUpdateRequest) => {
    try {
      const res = await updateChartUsingPost(editedData);
      if (res.data) {
        message.success('Successfully updated');
        chartData();
      } else {
        message.error(res.message);
      }
    } catch (e: any) {
      message.error('Update failed: ' + e.message);
    }
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    chartData();
  }, []);

  return (
    <div className="chart-detail-container">
      <div className="header">
        <Button type="primary" size="large" onClick={handleGoBack} className="back-button">
          Back
        </Button>
        <Title level={3}>Chart Details</Title>
      </div>

      <div className="content-container">
        <div className="left-section">
          <div className="section-title">
            <Divider style={{ color: GREEN_COLOR }}>Original Data</Divider>
          </div>
          <div className="data-container">
            {chart?.chartData && <CsvTable csvData={chart?.chartData} />}
          </div>
        </div>

        <div className="right-section">
          <div className="section-title">
            <Divider style={{ color: GREEN_COLOR }}>Chart Information</Divider>
          </div>
          <Card hoverable className="info-card">
            <div className="info-item">
              <Text strong>Chart ID:</Text> {chart?.id}
            </div>
            <div className="info-item">
              <Text strong>Analysis Goal:</Text> {chart?.goal}
            </div>
            <div className="info-item">
              <Text strong>Chart Type:</Text> {chart?.chartType}
            </div>
            <div className="info-item">
              <Text strong>Chart Name:</Text> {chart?.chartName}
            </div>
            <div className="info-item">
              <Text strong>Analysis Time:</Text>{' '}
              {new Date(chart?.createTime).toLocaleString('zh-CN')}
            </div>
          </Card>

          <div className="section-title">
            <Divider style={{ color: GREEN_COLOR }}>Analysis Conclusion</Divider>
          </div>
          <Card hoverable className="conclusion-card">
            <div className="conclusion-text">{chart?.genResult}</div>
            <Button
              type="primary"
              size="large"
              onClick={() => editChart(chart)}
              className="edit-button"
            >
              Edit Chart
            </Button>
          </Card>
        </div>
      </div>

      <EditModal
        visible={isModalVisible}
        onCancel={handleCancel}
        onEdit={handleEditConfirm}
        chart={editData}
      />
    </div>
  );
};

export default ChartDetail;
