import { Button, Card, message } from "antd";
import axios from "axios";
import styled from "styled-components";

function Login() {
  const [messageApi, contextHolder] = message.useMessage();
  const error = () => {
    messageApi.open({
      type: "error",
      content: "Login failed",
    });
  };

  const loginEmail = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:5000/login");
      console.log("Logging");
      if (res.data.message === "success") {
        console.log("Login");
        localStorage.setItem('auth', true)
        window.location.replace('/');
        window.location.reload()
      }
    } catch (e) {
      error();
      console.log(e);
    }
  };
  return (
    <>
      {contextHolder}
      <Container>
        <Card
          style={{
            width: 300,
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Button onClick={loginEmail} type="primary">
            Login Email
          </Button>
        </Card>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used.jpg");
`;
export default Login;
