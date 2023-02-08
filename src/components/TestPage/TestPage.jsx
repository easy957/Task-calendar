import styles from "./TestPage.module.css";
//import TestJs from "../../test";
import Auth from "../../Auth.js";

//const name = TestJs().name();

export default function TestPage() {
  return (
    <>
      <h1 className={styles.title}>Test page</h1>
      <Auth />
      <p></p>
    </>
  );  
}
