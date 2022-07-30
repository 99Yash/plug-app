import React, { Fragment, useState } from "react";
import "./index.css";
import { Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import Profile from "./Profile";
import { db, signInWithGoogle } from "./Firebase";
import { ref } from "firebase/database";

function App() {
  const [userData, setUserData] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  // TODO logic for setting status
  const getRequestHandler = async () => {
    setLoggedIn(true);
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    console.log(data);

    const transformedUserData = data.results.map((data) => {
      return {
        name: data.name.first + " " + data.name.last,
        id: data.id.value,
        pic: data.picture.large,
      };
    });
    setUserData(transformedUserData);
  };
  console.log(userData);

  const handleSignInWithGoogle = () => {
    signInWithGoogle();
    setLoggedIn(true);
  };

  // const signInWithGoogle = async() => {
  //   try{

  //    const signIn= await signInWithPopup(auth, provider)
  //    const userRef=ref(db,'users/'+user.id)
  //     // .then((result) => {
  //     //   const name = result.user.displayName;
  //     //   const pic = result.user.photoURL;

  //       //redirect to profile page
  //     })
  //   }
  //     .catch((err) => console.log(err));
  // };

  const submitStatusHandler = (user) => {
    fetch(
      "https://react-http-fc3fd-default-rtdb.asia-southeast1.firebasedatabase.app/Plug-users.json",
      {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
  };

  return (
    <Fragment>
      {!loggedIn && (
        <div className="App">
          <Button onClick={handleSignInWithGoogle} type="primary" shape="round">
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
      )}
      <section>
        {userData.length && (
          <Profile onSubmitStatus={submitStatusHandler} userData={userData} />
        )}
      </section>
    </Fragment>
  );
}
export default App;
