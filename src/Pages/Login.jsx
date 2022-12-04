import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';


export default function Login() {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

  return (
    <div>
        <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="你的名字"
        name="username"
        rules={[
          {
            required: true,
            message: '[*]无名之人',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="通行密码"
        name="password"
        rules={[
          {
            required: true,
            message: '[*]你不打算加个密码?',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>难道真的忘记?</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Join US
        </Button>
      </Form.Item>
    </Form>
    </div>
  )
}
