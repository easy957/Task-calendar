import styles from "./TestPage.module.css";
//import TestJs from "../../test";
import Auth from "../../Auth.js";
import Button from "../common/Button/Button";

//const name = TestJs().name();

export default function TestPage() {
  return (
    <>
      <h1 className={styles.title}>Test page</h1>
      <Auth />
      <Button text="Back" active />
      <Button text="Forward" />
      <Button text="Confirm" />
      <p></p>
    </>
  );
}
