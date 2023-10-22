import { Environment, Grid, OrbitControls, useCursor } from "@react-three/drei";
import { useState } from "react";
import { Item } from "./Item";
import { Room } from "./Room";

const Experience = () => {
  const [onFloor, setOnFloor] = useState(false);


  const items = {
    sofa: {
      name: "sofa",
      size: [1.92, 1.92],
    },
    carpet: {
      name: "carpet",
      size: [2.88, 2.88],
    },
    vase: {
      name: "vase",
      size: [0.48, 0.48],
    },
    bed: {
      name: "bed",
      size: [2.4, 2.88],
    }
  }

  const map = {
    size: [4.8, 4.8],
    items: [
      {
        ...items.vase,
        gridPosition: [0, Math.sqrt(2) / 10],
        rotation: 1,
      }
    ]
  }
  return (

    <>
      <Environment preset="sunset" />
      <ambientLight intensity={0.3} />
      <OrbitControls />

      {map.items.map((item, idx) => (
        <Item key={`${item.name}-${idx}`} item={item} />
      ))}
      {/* <Room name={"room"} /> */}
      <mesh
        rotation-x={-Math.PI / 2}
        position-y={-0.001}
        onPointerEnter={() => setOnFloor(true)}
        onPointerLeave={() => setOnFloor(false)}
        rotation-z={-Math.PI / 4}
        position-z={Math.sqrt(2) / 10}
        onClick={(e) => console.log(e)}
      >
        <planeGeometry args={[4.8, 4.8]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>
      <Grid
        infiniteGrid
        fadeStrength={6}
        sectionSize={2.4}
        cellSize={0.48}
        rotation-y={Math.PI / 4}
        position-z={Math.sqrt(2) / 10}
      />

    </>
  );
}

export default Experience;
