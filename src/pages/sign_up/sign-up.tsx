import React from "react";
import "./sign-up.scss";
import { Link } from "react-router-dom";
import { register } from "../../actions/user";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Form, Input, Button } from "antd";

const SignUp: React.FC = () => {
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  if (localStorage.getItem("token")) {
    history.push("/");
    localStorage.setItem("activeId", "0");
  }

  const onFinish = async (values: any) => {
    setUserName(values.username);
    setEmail(values.email);
    setPassword(values.password);
    await dispatch(register(username, email, password));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="register">
      <div className="title">
        <h1>Sign Up</h1>
        <Link to="/signin">Have an account ?</Link>
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
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
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

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              ????ng nh???p
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default SignUp;
