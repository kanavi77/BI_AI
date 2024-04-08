import { checkInUsingPost, getUserByIdUsingGet } from '@/services/xingbi/scoreController';
import { uploadUsingPost } from '@/services/xingbi/tongyongjiekou';
import { getLoginUserUsingGet, updateMyUserUsingPost } from '@/services/xingbi/userController';
import { UploadOutlined } from '@ant-design/icons';
import { Avatar, Button, Form, Input, message, Modal, Upload } from 'antd';
import { useEffect, useState } from 'react';
import CallingCard from "@/components/CallingCard";
import styles from './UserProfile.css';
import styled from "styled-components";
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
const UserProfile = () => {
  const [form] = Form.useForm();

  const [isModalVisible, setModalVisible] = useState(false);
  const [userData, setUserData] = useState<API.BaseResponseLoginUserVO_>();
  const [score, setScore] = useState<API.BaseResponseLong_>();
  const [avatarUrl, setAvatarUrl] = useState<string>();

  const fetchData = async () => {
    try {
      const [userRes, scoreRes] = await Promise.all([
        getLoginUserUsingGet(),
        getUserByIdUsingGet(),
      ]);

      if (userRes.data) {
        setUserData(userRes);
      } else {
        message.error(userRes.message);
      }

      if (scoreRes.data) {
        setScore(scoreRes);
      } else {
        message.error(scoreRes.message);
      }
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  /**
   * Sign-in logic
   */
  const handleSignIn = async () => {
    const res = await checkInUsingPost();
    if (res.data === 'Sign-in successful') {

      fetchData();
      message.success(res.data);
    } else {
      message.error(res.message);

    }
  };

  const handleRecharge = () => {
    message.info('Coming soon');
  };

  const handleEditProfile = () => {
    setModalVisible(true);
    form.setFieldsValue({ userName: userData?.data?.userName });
  };

  const handleSaveProfile = async () => {
    try {
      const updatedUserInfo: API.UserUpdateMyRequest = {
        userAvatar: avatarUrl,
        userName: form.getFieldValue('userName'),
      };
      const updateUserInfo = await updateMyUserUsingPost(updatedUserInfo);

      if (updateUserInfo.data) {
        message.success('Saved successfully!');
        fetchData(); // Get the latest user information and score
        setModalVisible(false);
      } else {
        message.error(updateUserInfo.message);
      }
    } catch (e) {
      throw new Error(e);
    }
  };

  /**
   * Upload avatar to Aliyun Object Storage service and return the corresponding URL
   * @param info
   */
  const handleAvatarChange = async (info) => {
    try {
      const res = await uploadUsingPost(info);
      if (res.data) {
        setAvatarUrl(res.data);
        // Update the display of the avatar
        // Use setUserData to update user data to ensure Avatar component can get the latest avatar URL in time
        // setUserData((userData) => ({
        //     ...userData,
        //     data: {
        //         ...userData?.data,
        //         userAvatar: res.data,
        //     },
        // }));
      }
    } catch (error) {
      console.error('Error in handleAvatarChange:', error);
    }
  };



  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <CallingCard
          avatar={userData?.data?.userAvatar}
          name={userData?.data?.userName}
          score={score?.data}
          onSignIn={handleSignIn}
          onRecharge={handleRecharge}
          onEditProfile={handleEditProfile}
        />
      </div>
      <Modal
        title="Edit Profile"
        visible={isModalVisible}
        onOk={handleSaveProfile}
        onCancel={() => setModalVisible(false)}
        className={styles.modal}
        footer={null}
      >
        <div className={styles.modalContent}>
          <Form form={form} layout="vertical">
            <Form.Item label="Nickname" name="userName">
              <Input/>
            </Form.Item>
            <Form.Item label="Avatar">
              <Upload
                showUploadList={false}
                beforeUpload={() => false}
                onChange={handleAvatarChange}
                className={styles.avatarUpload}
              >
                {userData?.data?.userAvatar ? (
                  <Avatar
                    size={80}
                    src={avatarUrl ? avatarUrl : userData?.data?.userAvatar}
                    className={styles.avatar}
                  />
                ) : (
                  <div className={styles.uploadButton}>
                    <UploadOutlined/>
                    <div>Upload</div>
                  </div>
                )}
              </Upload>
            </Form.Item>
          </Form>
          <div className={styles.modalActions}>
            <Button onClick={() => setModalVisible(false)} className={styles.cancelButton}>
              Cancel
            </Button>
            <Button onClick={handleSaveProfile} type="primary" className={styles.saveButton}>
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};


export default UserProfile;
