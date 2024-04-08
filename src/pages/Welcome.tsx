import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { Card, Collapse, Tree, Typography, Modal, Form, Input, Button } from 'antd';
import { UserOutlined, PlusCircleOutlined, SmileOutlined, RocketOutlined, LikeOutlined } from '@ant-design/icons';
import { useSpring, animated, useTrail } from 'react-spring';

const { Panel } = Collapse;
const { Paragraph, Title } = Typography;

const AnimatedCard = animated(Card);
const AnimatedParagraph = animated(Paragraph);
const AnimatedTitle = animated(Title);
const AnimatedList = animated.li;

const Welcome: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newTodo, setNewTodo] = useState('');

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo('');
      setIsModalVisible(false);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setNewTodo('');
  };

  const cardSpring = useSpring({
    from: { opacity: 0, transform: 'scale(0.95)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 220, friction: 20 },
    delay: 100,
  });

  const typingSpring = useSpring({
    from: { width: '0%' },
    to: { width: '100%' },
    config: { duration: 2000 },
  });

  const [todos, setTodos] = useState([
    '🚀 Local deployment of LLM, vectorize datasets for large models to learn',
    '📤 Use Uppy to transfer large dataset files',
    '🤖 Integrate Data-Copilot: Large language models as your most attentive and efficient data assistant',
    '✨ Develop data augmentation techniques for improved model performance',
    '⚡ Implement real-time data streaming and processing capabilities',
    '🔒 Enhance data security and privacy features',
    '👥 Build a collaborative data annotation platform',
    '☁️ Integrate with cloud storage services for seamless data management',
  ]);

  const trail = useTrail(todos.length, {
    from: { opacity: 0, transform: 'translateX(-20px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    delay: 2000,
  });

  const treeData = [
    {
      title: (
        <span>
          Version 1.0 (2024-01-01) <SmileOutlined spin />
        </span>
      ),
      key: '0-0',
      children: [
        { title: 'Basic data processing', key: '0-0-0' },
        { title: 'Initial analysis capabilities', key: '0-0-1' },
        { title: 'Basic UI', key: '0-0-2' },
        { title: 'Data upload and management', key: '0-0-3' },
      ],
    },
    {
      title: (
        <span>
          Version 2.0 (2024-02-01) <RocketOutlined spin />
        </span>
      ),
      key: '0-1',
      children: [
        { title: 'Enhanced visual analysis', key: '0-1-0' },
        { title: 'Data mining features', key: '0-1-1' },
        { title: 'Collaboration and sharing', key: '0-1-2' },
        { title: 'Advanced data preprocessing', key: '0-1-3' },
      ],
    },
    {
      title: (
        <span>
          Version 3.0 (2024-06-01) <LikeOutlined spin />
        </span>
      ),
      key: '0-2',
      children: [
        { title: 'Automated data labeling', key: '0-2-0' },
        { title: 'Explainable AI capabilities', key: '0-2-1' },
        { title: 'Customizable data pipelines', key: '0-2-2' },
        { title: 'Integration with cloud services', key: '0-2-3' },
      ],
    },
  ];

  return (
    <PageContainer>
      <AnimatedCard style={{ ...cardSpring, marginBottom: 24, backgroundColor: '#f0f2f5' }}>
        <AnimatedTitle level={4} style={{ ...typingSpring, color: '#003a8c' }}>
          Website Background <SmileOutlined spin />
        </AnimatedTitle>
        <AnimatedParagraph style={cardSpring}>
          <RocketOutlined /> IntelliDataEngine is dedicated to providing cutting-edge data processing and analysis tools, helping businesses and individuals unlock the potential of their data. With the advent of large language models and advanced machine learning techniques, we aim to revolutionize the way data is handled and understood.
        </AnimatedParagraph>
        <AnimatedParagraph style={cardSpring}>
          <LikeOutlined /> Our platform offers a comprehensive suite of features, including local deployment of large language models, dataset vectorization, data augmentation, real-time data streaming, and advanced data security measures. We strive to empower our users with the latest technologies and tools to gain valuable insights from their data.
        </AnimatedParagraph>
        <AnimatedParagraph style={cardSpring}>
          <SmileOutlined /> Whether you're a business analyst, data scientist, or researcher, IntelliDataEngine provides a seamless and collaborative environment for data exploration, analysis, and model training. Join us on this journey of unlocking the true value of your data.
        </AnimatedParagraph>
      </AnimatedCard>
      <AnimatedCard style={{ ...cardSpring, marginBottom: 24, backgroundColor: '#f0f2f5' }}>
        <AnimatedTitle level={4} style={{ ...typingSpring, color: '#003a8c' }}>
          Author Introduction <RocketOutlined spin />
        </AnimatedTitle>
        <AnimatedParagraph style={cardSpring}>
          <SmileOutlined /> I'm a passionate front-end engineer and UI designer with over 10 years of experience in the industry. My journey began with a deep fascination for the intersection of technology and design, which led me to specialize in creating intuitive and visually appealing user interfaces.
        </AnimatedParagraph>
        <AnimatedParagraph style={cardSpring}>
          <LikeOutlined /> Throughout my career, I've had the privilege of working with various companies and organizations, tackling complex challenges and delivering innovative solutions. I thrive on exploring new trends and technologies, particularly in the realm of data visualization and user experience design.
        </AnimatedParagraph>
        <AnimatedParagraph style={cardSpring}>
          <RocketOutlined /> With IntelliDataEngine, I aim to combine my expertise in front-end development and design to create a seamless and engaging platform for data exploration and analysis. My goal is to empower users with powerful tools while ensuring a delightful and intuitive experience.
        </AnimatedParagraph>
      </AnimatedCard>
      <Collapse bordered={false} defaultActiveKey={['1']} style={{ marginBottom: 24, backgroundColor: '#f0f2f5' }}>
        <Panel header="Website Feature Iterations" key="1">
          <Tree
            showLine={{ showLeafIcon: false }}
            defaultExpandedKeys={['0-0-0']}
            treeData={treeData}
            icon={<UserOutlined />}
          />
        </Panel>
      </Collapse>
      <Card style={{ marginBottom: 24 }}>
        <Paragraph style={{ fontWeight: 'bold', color: '#003a8c', marginBottom: 24 }}>
          To-Do Items <SmileOutlined spin />
        </Paragraph>
        <ul>
          {trail.map((style, index) => (
            <AnimatedList key={todos[index]} style={{ ...style, color: '#003a8c' }}>
              {todos[index]}
            </AnimatedList>
          ))}
        </ul>
        <Button type="dashed" onClick={showModal} icon={<PlusCircleOutlined />} style={{ marginTop: 16 }}>
          Add New Todo <RocketOutlined spin />
        </Button>
      </Card>
      <Modal
        title="Add New Todo"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Add"
        cancelText="Cancel"
      >
        <Form.Item>
          <Input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Enter your new todo item"
          />
        </Form.Item>
      </Modal>
    </PageContainer>
  );
};

export default Welcome;
