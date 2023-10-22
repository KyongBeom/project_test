import { useGLTF } from "@react-three/drei"

export const Room = ({
    name,
}) => {
    const { scene } = useGLTF(`models/rooms/${name}.glb`);
    return <primitive object={scene} position-y={-0.22} />;
}