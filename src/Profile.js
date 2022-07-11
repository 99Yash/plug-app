import React from "react";
import { nanoid } from "nanoid";
import { Button } from "antd";

const Profile = (props) => {
  return (
    <div>
      {props.userData.map((item) => {
        return (
          <li key={nanoid()}>
            <img src={item.pic} alt="anonymous user" />
            <h3>{item.name}</h3>;
            <textarea name="create Status" id="" cols="90" rows="10"></textarea>
          </li>
        );
      })}
      <Button type="primary" size="large">
        Set Status
      </Button>
    </div>
  );
};

export default Profile;
