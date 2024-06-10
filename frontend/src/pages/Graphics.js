import React, { useState, useEffect } from "react";

const Graphics = () => {
  const [data, setData] = useState([]);
  const BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BACKEND_SERVER + "graphics");
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
    <div>
      {data.length > 0 ? (
        data.map((item) => (
          <div
            key={item.row_id}
            id={item.num}
            style={{
              zIndex: item.layer,
              height: `${item.height}px`,
              width: `${item.width}px`,
              position: 'absolute',
              left: `${item.xaxis}px`,
              top: `${item.yaxis}px`,
              borderWidth: `${item.borderweight}px`,
              borderColor: `rgb(${item.bordercolor.join(", ")})`,
              borderRadius: `${item.borderradius}px`,
              borderStyle: 'solid',
            }}
          >
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Graphics;
