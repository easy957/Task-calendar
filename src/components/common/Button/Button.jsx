import style from "./Button.module.css";

function Button({ text, active }) {
  return (
    <>
      <button className={`${style.item} ${active && style.active}`}>
        {text}
      </button>
      <div></div>
    </>
  );
}

export default Button;
