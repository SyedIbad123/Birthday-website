import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

let audioRef = new Audio("./happybirthday.mp3");
   
const BirthdayWish = () => {
  const mountRef = useRef(null);
  const flameRef = useRef(null);

  const name = localStorage.getItem("name").toUpperCase() || "Friend";

  useEffect(() => {
    audioRef.loop = true;

    const playAudio = async () => {
      try {
        await audioRef.play();
      } catch (error) {
        console.log("Audio playback failed: ", error);
      }
    };

    playAudio();

    const scene = new THREE.Scene();

    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const context = canvas.getContext("2d");

    const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "#ff7e5f");
    gradient.addColorStop(1, "#feb47b");

    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;

    scene.background = texture;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xff9900, 2, 50);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    const createCake = () => {
      const bottomLayerGeometry = new THREE.CylinderGeometry(2.5, 2.5, 1, 32);
      const bottomLayerMaterial = new THREE.MeshStandardMaterial({
        color: 0xffcc00,
      });
      const bottomLayer = new THREE.Mesh(
        bottomLayerGeometry,
        bottomLayerMaterial
      );
      bottomLayer.position.set(0, 0, 0);
      scene.add(bottomLayer);

      const middleLayerGeometry = new THREE.CylinderGeometry(2, 2, 0.7, 32);
      const middleLayerMaterial = new THREE.MeshStandardMaterial({
        color: 0xff69b4,
      });
      const middleLayer = new THREE.Mesh(
        middleLayerGeometry,
        middleLayerMaterial
      );
      middleLayer.position.set(0, 0.85, 0);
      scene.add(middleLayer);

      const topLayerGeometry = new THREE.CylinderGeometry(1.5, 1.5, 0.5, 32);
      const topLayerMaterial = new THREE.MeshStandardMaterial({
        color: 0x87cefa,
      });
      const topLayer = new THREE.Mesh(topLayerGeometry, topLayerMaterial);
      topLayer.position.set(0, 1.55, 0);
      scene.add(topLayer);

      const fontLoader = new FontLoader();
      fontLoader.load(
        "https://threejs.org/fonts/helvetiker_regular.typeface.json",
        (font) => {
          const textGeometry = new TextGeometry(`Happy Birthday ${name}`, {
            font: font,
            size: 1.5,
            height: 0.1,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.05,
            bevelSize: 0.05,
            bevelOffset: 0,
            bevelSegments: 5,
          });

          const textMaterial = new THREE.MeshStandardMaterial({
            color: 0xff0000,
          });
          const textMesh = new THREE.Mesh(textGeometry, textMaterial);

          textMesh.geometry.computeBoundingBox();
          const textWidth =
            textMesh.geometry.boundingBox.max.x -
            textMesh.geometry.boundingBox.min.x;
          textMesh.position.set(-textWidth / 2, 1.1, 1.5);
          scene.add(textMesh);
        }
      );

      const candleGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 32);
      const candleMaterial = new THREE.MeshStandardMaterial({
        color: 0xffff00,
      });
      const candle = new THREE.Mesh(candleGeometry, candleMaterial);
      candle.position.set(0, 2.2, 0);
      scene.add(candle);

      const flameGeometry = new THREE.SphereGeometry(0.1, 16, 16);
      const flameMaterial = new THREE.MeshBasicMaterial({ color: 0xff4500 });
      const flame = new THREE.Mesh(flameGeometry, flameMaterial);
      flame.position.set(0, 2.7, 0);
      flameRef.current = flame;
      scene.add(flame);
    };

    createCake();

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);

      if (flameRef.current) {
        const flicker = 0.1 + Math.random() * 0.1;
        flameRef.current.scale.set(1, 1 + flicker, 1);
        flameRef.current.material.color.setHSL(
          Math.random() * 0.1 + 0.05,
          1,
          0.5
        );
      }
    };
    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={mountRef} style={{ width: "100vw", height: "100vh" }}>
      <h1
        style={{
          color: "white",
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "3rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Happy Birthday <span className="text-red-600">{name}!</span>
      </h1>
    </div>
  );
};

export default BirthdayWish;
