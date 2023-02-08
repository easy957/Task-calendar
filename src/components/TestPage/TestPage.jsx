import styles from "./TestPage.module.css";
import TestJs from "../../test"

const name = TestJs().name();

export default function TestPage() {
  return (
    <>
      <h1 className={styles.title}>Test page</h1>
      <p>{name}</p>
      <p></p>
    </>
  );
}
