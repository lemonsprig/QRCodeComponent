import React from "react";
import qrcode from "../../Assets/images/image-qr-code.png";
import style from "../styles.module.css";

function App() {
  return (
    <div class={style.card}>
      <img src={qrcode}></img>
      <p class={style.strapline}>
        Improve your front-end skills by building projects
      </p>
      <p class={style.instructions}>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}

export default App;