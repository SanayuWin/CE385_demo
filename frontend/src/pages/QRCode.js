import React, { useState, useEffect } from "react";
import {QRCodeSVG} from 'qrcode.react';

const ShowQRCode = () => {
  const [data, setData] = useState([]);
  const BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BACKEND_SERVER + "qrcode");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchData();
  }, [BACKEND_SERVER]); 

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 300, width: 300, margin: 'auto' }}>
      {data.msg ? (
        <QRCodeSVG
          size={300}
          style={{ width: '239.48px', height: '239.48px' }}
          value={data.msg}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>

  );
};

export default ShowQRCode;