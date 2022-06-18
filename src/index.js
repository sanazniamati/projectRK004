import React from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Line } from "react-konva";

const App = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Line
          x={0}
          y={5}
          points={[5, 70, 140, 23, 250, 60, 300, 20]}
          stroke={"red"}
          strokeWidth={15}
          lineCap={"round"}
          lineJoin={"round"}
        />
        {/*    dashed Line*/}
        <Line
          x={0}
          y={55}
          points={[5, 70, 140, 23, 250, 60, 300, 20]}
          stroke={"green"}
          strokeWidth={2}
          lineJoin={"round"}
          dash={[33, 10]}
        />
        {/*  complex dashed and dotted line */}
        <Line
          x={0}
          y={105}
          points={[5, 70, 140, 23, 250, 60, 300, 20]}
          stroke={"blue"}
          strokeWidth={10}
          lineCap={"round"}
          lineJoin={"round"}
          dash={[29, 20, 0.001, 20]}
          /*
           * line segments with a length of 29px with a gap
           * of 20px followed by a line segment of 0.001px (a dot)
           * followed by a gap of 20px
           */
        />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
