import React, { useState, useEffect } from 'react';
import styles from "./styles.module.css";

const UserCard = (props) => {

    // const [name, setName] = useState("Nill Armstrong");

  // this.setState({name: "black"});
  // const history = useHistory();

  // const loginHandler = () => {
  //   history.replace("/app");
  // };
  console.log(props) 

  if (props.userProfile.logined != 1) {
    <div className={styles.wrapper}>
      <h1>Please, log in or sign up</h1>
    </div>
  } else {
    return (
      <div className={styles.wrapper}>
        <div claclassNamess={styles.left}>
          <img src={props.userProfile.imgSource} alt="user" width="500"></img>
          {/* <img src="./logo192.jpg" alt="user" width="400" /> */}
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
  }
};

export default UserCard;
