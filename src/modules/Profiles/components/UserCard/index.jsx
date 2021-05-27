import React from 'react';
import styles from "./styles.module.css";

import { useSelector } from "react-redux";

const UserCard = () => {

  const currUser = useSelector((state) => state.currUser)

  const props = useSelector((state) => state.userInfo[currUser.currUserId - 1])


  return (
    <div className={styles.wrapper}>
      <div claclassNamess={styles.left}>
        <img src={props.userProfile.imgSource} alt="user" width="500"></img>
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
      </div>
    </div>
  );
};

export default UserCard;
