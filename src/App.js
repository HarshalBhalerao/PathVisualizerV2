import React, { useState, useEffect } from 'react';
import './index.css';
import Pathfinding from './components/Pathfinding';
import DotLoader from "react-spinners/DotLoader";
import { css } from "@emotion/react";


const override = css`
  display: block;
  border-color: #ffffff;
  margin-left: auto;
  margin-right: auto;
`;

function App() {
  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
  return (
    <div className='App'>
      {
        loading ?
          <>
            <div className='background'>
              <div className="CenterElement">
                Pathfinding Visualizer
              </div>
              <DotLoader color={color} loading={loading} css={override} size={100} />
            </div>
          </>
          :
          <Pathfinding />
      }


    </div>
  );
}

export default App;