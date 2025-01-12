import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const Hero = () => {
    return (
        <div className="h-screen relative">
            <div className="absolute inset-0">
                <Canvas>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <Boxes />
                </Canvas>
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-center">
                <div>
                    <h1 className="text-8xl font-bold tracking-wider mb-4">
                        HSENG HURK
                    </h1>
                    <p className="text-gray-400 tracking-wide">
                        SOFTWARE ENGINEER, BACKEND & RED TEAM.
                    </p>
                </div>
            </div>
        </div>
    )
}

// Simple 3D boxes component
function Boxes() {
    return (
        <group>
            <mesh position={[0, 0, 0]} rotation={[0.5, 0.5, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="#444" />
            </mesh>
            <mesh position={[2, 0, -2]} rotation={[0.2, 0.2, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="#333" />
            </mesh>
        </group>
    )
}

export default Hero