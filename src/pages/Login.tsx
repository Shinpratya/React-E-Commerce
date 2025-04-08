import { Button, Card, Input, Form } from "antd";
import { css } from "@emotion/css";

const Login = () => {
  const [form] = Form.useForm();
  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <Card
        className={css`
          width: 30%;
        `}
        title="Login"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Email"
            name={"email"}
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input></Input>
          </Form.Item>
          <Form.Item
            label="Password"
            name={"password"}
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              className={css`
                margin-bottom: 10px;
              `}
            ></Input>
            <a>Forgotten Password</a>
          </Form.Item>
        </Form>

        <Button
          className={css`
            width: 100%;
            margin-top: 10px;
          `}
          type="primary"
        >
          Login
        </Button>
        <div
          className={css`
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <p>
            Don't have an account? <a href="/register">Sign up</a>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Login;
