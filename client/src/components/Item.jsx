import { useGLTF } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import { useMemo } from "react";

export const Item = ({ item }) => {
    const { name, gridPosition, size, rotation } = item;
    const { scene } = useGLTF(`models/items/${name}.glb`);
    const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
    const width = rotation === 1 || rotation === 3 ? size[1] : size[0];
    const height = rotation === 1 || rotation === 3 ? size[0] : size[1];
    console.log(gridPosition)
    console.log("width", width)
    console.log("height", height)
    return <primitive
        object={clone}
        position={[
            height / 0.48 / 2 + gridPosition[0],
            0,
            width / 0.48 / 2 + gridPosition[1] / 0.48,
        ]}
        rotation-y={Math.PI / 4}

    />
}