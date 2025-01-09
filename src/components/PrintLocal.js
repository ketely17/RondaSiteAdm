import React from "react";
// import "../styles/localPage.css"
import QRCode from "react-qr-code";
import QRArt from "../assets/images/QRArt.png";

const PrintLocal = ({ idLocal }) => {
  return (
    <div id="container" className="container">
      <div id="image-container">
        <img src={QRArt} />
      </div>
      <div id="qrcode" className="qrcode">
        <QRCode size={256} value={idLocal} viewBox={`0 0 256 256`} />
      </div>
    </div>
  );
};

export default PrintLocal;
