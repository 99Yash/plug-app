import React from "react";
import { nanoid } from "nanoid";
import { Avatar, Button } from "antd";
import { useRef } from "react";

const Profile = (props) => {
  const statusInputRef = useRef();

  const submitStatusHandler = () => {
    // const response = await fetch(
    //   "https://react-http-fc3fd-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",
    //   {
    //     method: "POST",
    //     body: JSON.stringify(user),
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //   }
    // );
    // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
    // const data = await response.json();
    // console.log(data);
  };
  return (
    <div>
      {props.userData.map((item) => {
        return (
          <li key={nanoid()} style={{ listStyleType: "none" }}>
            <Avatar size={42} src={item.pic} />
            <h3>{item.name}</h3>;
            <textarea
              name="create Status"
              id=""
              placeholder="Enter Status"
              cols="90"
              rows="10"
              ref={statusInputRef}
            ></textarea>
          </li>
        );
      })}
      {/* <Button onClick={sendStatusHandler} type="primary" size="large"> */}
      {/* Set Status */}
      {/* </Button> */}
    </div>
  );
};

export default Profile;
