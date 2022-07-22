import React, { Fragment, useState } from "react";
import "./index.css";
import { Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import Profile from "./Profile";
import { signInWithGoogle } from "./Firebase";

function App() {
  const [userData, setUserData] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const getRequestHandler = async () => {
    setLoggedIn(true);
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
    <Fragment>
      {!loggedIn && (
        <div className="App">
          <Button onClick={signInWithGoogle} type="primary" shape="round">
            <GoogleOutlined />
            Sign in with Google &nbsp;
            {/*  //! after this, set status */}
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
      )}
      <section>{userData.length && <Profile userData={userData} />}</section>
    </Fragment>
  );
}
export default App;
