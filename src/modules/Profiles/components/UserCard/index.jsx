import React, { useState } from "react";

import Button from "@material-ui/core/Button";


import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import UserUpdate from "../UserUpdate"


const UserCard = () => {

  const currUser = useSelector((state) => state.currUser)

  const props = useSelector((state) => state.userInfo[currUser.currUserId - 1])

  const [open, setOpen] = useState(false);

  // const handleClick = () => {
  //   console.log("Clicked!!");
  // }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <div claclassNamess={styles.left}>
        <img src="https://i.imgur.com/bxgzvrp.jpg" alt="user" width="500"></img>
        <div className={styles.underImageText}>
          <h4>{props.userProfile.fullName}</h4>
          <p>{props.userProfile.status}</p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.info}>
          <h3>Information</h3>
          <div className={styles.info_data}>
            <div className={styles.data}>
              <h4>Email</h4>
              <p>{props.userProfile.email}</p>
            </div>
            <div className={styles.data}>
              <h4>Phone</h4>
              <p>{props.userProfile.phone}</p>
            </div>
          </div>
        </div>

        <div className={styles.projects}>
          <h3>Expeditions</h3>
          <div className={styles.projects_data}>

            {props.userProfile.expeditions.map((item) => (
              <div className={styles.data} key={item.userName}>
              <h4>{item.expeditionName}</h4>
              <p>
            {item.description}
              </p>
              </div>
            ))}
          </div>
          <div>
            <h3>About</h3>
            <div className={styles.data}>
              <p>
              {props.userProfile.about}
              </p>
            </div>            
          </div>
        </div>
        <Button
            color="primary"
            fullWidth
            variant="contained"
            onClick={handleClickOpen}
          >
            Click me to modify the Profile
          </Button>
        < UserUpdate 
          open={open}
          handleClose={handleClose
          }/>
      </div>

    </div>
  );
};

export default UserCard;
