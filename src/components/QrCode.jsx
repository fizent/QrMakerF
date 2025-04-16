import React, { useState, useRef } from "react";
import QRCode from "qrcode";

export default function QrCodeMaker() {
  const [text, setText] = useState("");
  const [qrl, setQrl] = useState("");
  const [logo, setLogo] = useState(null);
  const canvasRef = useRef(null);

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(URL.createObjectURL(file));
    }
  };

  const generateQr = async () => {
    if (text.trim() === "") return;

    const canvas = canvasRef.current;
    await QRCode.toCanvas(canvas, text, {
      width: 300,
      margin: 2,
      color: {
        dark: "#000",
        light: "#fff",
      },
    });

    if (logo) {
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.src = logo;

      img.onload = () => {
        const size = 60; // اندازه لوگو
        const x = (canvas.width - size) / 2;
        const y = (canvas.height - size) / 2;
        ctx.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI * 2, false); // ایجاد دایره برای لوگو
        ctx.clip(); // این قسمت باعث می‌شود که تصویر داخل دایره بریده شود
  
        ctx.drawImage(img, x, y, size, size);

        setQrl(canvas.toDataURL());
      };
    } else {
      setQrl(canvas.toDataURL());
    }
  };

  return (
    <div className="bodyPage">
      <div className="container_Qr">
        <h1>اینجا QrCode خودت رو بساز</h1>
        <input
          className="input_write"
          type="text"
          placeholder="متن یا لینک خود را وارد کنید"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* دکمه انتخاب فایل لوگو */}
        <input
          type="file"
          accept="image/*"
          id="logoUpload"  // اضافه کردن id
          className="logoUpload"
          onChange={handleLogoUpload}
          style={{ display: "none" }}
        />
        <label htmlFor="logoUpload" className="custom-button">
          انتخاب لوگو
        </label>


        <button onClick={generateQr}>بساز</button>
      </div>

      <canvas ref={canvasRef} style={{ display: "none" }} />

      {qrl && (
        <div className="back-ready">
          <h2>QR شما آماده است</h2>
          <img src={qrl} alt="qr-code" />
          <a className="download" href={qrl} download={`${text}_QRCode.png`}>
            دانلود کن
          </a>
        </div>
      )}
    </div>
  );
}
