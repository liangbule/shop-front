import { Button, Form, Input } from "antd";
import React from "react";
import Layout from "./Layout";

export const Signin = () => {
  return (
    <Layout title={"登录"}>
      <Form>
        <Form.Item name="name" label="账户">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="密 码">
          <Input.Password />
        </Form.Item>
        <Form.Item name="number" label="登录">
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};
