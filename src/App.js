import React, { useState } from "react";
import "./index.css";
import { Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import Profile from "./Profile";

function App() {
  const [userData, setUserData] = useState([]);

  const getRequestHandler = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();

    const transformedUserData = data.results.map((data) => {
      return {
        name: data.name.first + " " + data.name.last,
        id: data.id.value,
        pic: data.picture.large,
      };
    });
    setUserData(transformedUserData);
    console.log(transformedUserData);
  };
  console.log(userData);

  return (
    <div>
      <div className="App">
        <h1>Plug APP Task</h1>
        <Button type="primary" shape="round">
          <GoogleOutlined />
          Sign in with Google &nbsp;
        </Button>
        <Button
          type="primary"
          size="large"
          block
          shape="round"
          onClick={getRequestHandler}
        >
          Sign up Anonymous
        </Button>
      </div>
      <div>{userData.length && <Profile userData={userData} />}</div>
    </div>
  );
}
export default App;
