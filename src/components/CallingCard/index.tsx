import React from "react";
import { Avatar, Card, Button,  Space } from "antd";
import {
  UserOutlined,
  EditOutlined,
  DollarCircleOutlined,
  LoginOutlined,
} from "@ant-design/icons";

const { Meta } = Card;
interface CallingCardProps {
  avatar: string;
  name: string;
  score: string;
  onSignIn: () => void; // Assuming no arguments and no return value for simplicity
  onRecharge: () => void;
  onEditProfile: () => void;
}

const CallingCard : React.FC<CallingCardProps> = ({ avatar, name, score, onSignIn, onRecharge, onEditProfile }) => {
  return (
    <Card
      hoverable
      style={{ width: 300, textAlign: "center" }}
      cover={
        <Avatar
          size={100}
          src={avatar}
          icon={<UserOutlined />}
          style={{ margin: "20px auto" }}
        />
      }
    >
      <Meta
        title={name}
        description={`Score: ${score}`}
        style={{ marginBottom: 20 }}
      />
      <Space direction="vertical" size="middle" style={{ width: "100%" }}>
        <Button type="primary" icon={<LoginOutlined />} onClick={onSignIn}>
          Sign In
        </Button>
        <Button
          type="primary"
          icon={<DollarCircleOutlined />}
          onClick={onRecharge}
        >
          Recharge Score
        </Button>
        <Button type="primary" icon={<EditOutlined />} onClick={onEditProfile}>
          Edit Profile
        </Button>
      </Space>
    </Card>
  );
};

export default CallingCard;
