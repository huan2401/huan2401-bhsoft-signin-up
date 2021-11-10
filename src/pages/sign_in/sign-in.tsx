import React from "react";
import "./sign-in.scss";
import { Link } from "react-router-dom";
import { loadProfile } from "../../actions/user";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Form, Input, Button, Checkbox } from "antd";

const SignIn: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const login = useSelector((state: any) => state.user);

  const history = useHistory();
  if (localStorage.getItem("token")) {
    history.push("/");
    localStorage.setItem("activeId", "0");
  }
  const dispatch = useDispatch();

  const onFinish = async (values: any) => {
    setEmail(values.email);
    setPassword(values.password);
    await dispatch(loadProfile(email, password));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="register">
      <div className="title">
        <h1>Sign In</h1>
        <Link to="/signup">Need an account ?</Link>
      </div>
      <div className="form-group-antd">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default SignIn;
