import React, { useState, useEffect } from "react";

const HelloWorld = () => {
  const [data, setData] = useState([]);
  const BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BACKEND_SERVER + "helloworld");
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
          <div key={item.row_id}>
            <p>ID: {item.row_id}</p>
            <p>Number: {item.num}</p>
            <p>Name: {item.nameth}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HelloWorld;
