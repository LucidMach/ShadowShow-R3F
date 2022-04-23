import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import BoxCanvas from "./BoxCanvas";
import Text from "./Text";

const App = () => {
  const msg = "ALUCIDMACHCREATION";
  const [color, setColor] = useState("#00fc70");
  const [content, setContent] = useState<string>();

  useEffect(() => {
    let i = 0;
    setInterval(() => {
      setColor("#" + Math.floor(Math.random() * 16777215).toString(16));
      i < msg.length ? setContent(msg[i++]) : (i = 0);
    }, 500);
  }, []);

  return (
    <>
      <Canvas
        shadows
        style={{ height: window.innerHeight, background: color + "77" }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight
          intensity={0.9}
          color={color}
          castShadow
          position={[0, 0, 10]}
        />
        <Text content={content} />
        <BoxCanvas />
      </Canvas>
      <a
        style={{
          display: "block",
          textAlign: "center",
          position: "absolute",
          bottom: "3vh",
          right: "2vh",
          color: color,
        }}
        href="https://twitter.com/lucidmach"
      >
        @lucidmach
      </a>
    </>
  );
};

export default App;
