import styles from "../../styles.module.css";

const signin = () => {
  return (
    <div className={styles.mainAuth}>
      {/* <label for="inputPassword5" class="form-label">
        Password
      </label> */}
      <div className={styles.childDiv}>
        <input
          type="password"
          id="inputPassword5"
          class="form-control"
          style={{ width: "100px", height: "100px" }}
          aria-labelledby="passwordHelpBlock"
        />
        {/* <div id="passwordHelpBlock" class="form-text">
        Your password must be 6-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </div> */}
      </div>
    </div>
  );
};

export default signin;
