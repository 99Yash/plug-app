import React from "react";
import { nanoid } from "nanoid";
import { Avatar, Button } from "antd";
import { useRef } from "react";
import TextArea from "antd/lib/input/TextArea";
import { get, getDatabase, set, ref } from "firebase/database";
import { collection } from "firebase/firestore";

const Profile = (props) => {
  const statusInputRef = useRef();
  const submitStatusHandler = (e) => {
    e.preventDefault();
    writeStatus();
  };

  const writeStatus = (id, name, pic) => {
    const db = getDatabase();
    set(ref(db, "users/" + id), {
      name,
      id,
      pic,
    });

    const user = {
      id: props.userData.id ? props.userData.id : nanoid(),
      name: props.userData.name,
      pic: props.userData.pic,
    };
    props.onSubmitStatus(user);
  };
  return (
    <div>
      {props.userData.map((item) => {
        return (
          <li
            key={nanoid()}
            style={{ listStyleType: "none", marginTop: "2.3rem" }}
          >
            <Avatar size={42} src={item.pic} />
            <h3>{item.name}</h3>;
            <TextArea
              name="create Status"
              id=""
              placeholder="Enter Status"
              cols="90"
              rows="10"
              ref={statusInputRef}
            ></TextArea>
          </li>
        );
      })}
      <Button onClick={submitStatusHandler} type="primary" size="large">
        Set Status
      </Button>
    </div>
  );
};

export default Profile;
