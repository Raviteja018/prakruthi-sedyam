import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Leaf color palette - greens + golden autumn leaves
const LEAF_COLORS = [
  0x2a5a32, // deep forest green
  0x1b3f22, // dark forest
  0x469253, // medium green
  0x387642, // muted green
  0x5c8f40, // lime green
  0xd4a373, // golden leaf
  0x8f6233, // amber autumn
];

function createLeafGeometry() {
  // Organic curved leaf shape using Bezier curves
  const shape = new THREE.Shape();
  shape.moveTo(0, -0.65);
  shape.bezierCurveTo(0.38, -0.38, 0.44, 0.22, 0, 0.68);
  shape.bezierCurveTo(-0.44, 0.22, -0.38, -0.38, 0, -0.65);
  return new THREE.ShapeGeometry(shape, 12);
}

export default function NatureCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const W = container.clientWidth;
    const H = container.clientHeight;

    // --- SCENE SETUP ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(65, W / H, 0.1, 100);
    camera.position.set(0, 0, 12);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // --- LIGHTING ---
    // Warm ambient light
    scene.add(new THREE.AmbientLight(0xfff5e0, 0.65));

    // Warm sunlight from upper right
    const sunLight = new THREE.DirectionalLight(0xfff0c0, 1.3);
    sunLight.position.set(8, 12, 6);
    scene.add(sunLight);

    // Cool forest rim light
    const rimLight = new THREE.DirectionalLight(0x2a5a32, 0.45);
    rimLight.position.set(-8, -4, -3);
    scene.add(rimLight);

    // Subtle gold point light from bottom
    const goldLight = new THREE.PointLight(0xd4a373, 0.35, 18);
    goldLight.position.set(0, -4, 4);
    scene.add(goldLight);

    // --- LEAVES ---
    const leafGeom = createLeafGeometry();
    const leafObjects = [];
    const LEAF_COUNT = 45;

    for (let i = 0; i < LEAF_COUNT; i++) {
      const color = LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)];
      const material = new THREE.MeshPhongMaterial({
        color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.6 + Math.random() * 0.35,
        shininess: 25,
      });

      const mesh = new THREE.Mesh(leafGeom, material);

      // Random position, spread across screen at different depths (parallax)
      mesh.position.set(
        (Math.random() - 0.5) * 26,
        6 + Math.random() * 16, // start above viewport
        (Math.random() - 0.5) * 7
      );
      mesh.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      );
      const s = 0.18 + Math.random() * 0.6;
      mesh.scale.setScalar(s);

      scene.add(mesh);
      leafObjects.push({
        mesh,
        fallSpeed: 0.006 + Math.random() * 0.018,
        driftX: (Math.random() - 0.5) * 0.004,
        rx: (Math.random() - 0.5) * 0.022,
        ry: (Math.random() - 0.5) * 0.018,
        rz: (Math.random() - 0.5) * 0.028,
        swayAmp: 0.12 + Math.random() * 0.55,
        swayFreq: 0.3 + Math.random() * 1.1,
        swayPhase: Math.random() * Math.PI * 2,
      });
    }

    // --- POLLEN PARTICLE SYSTEM ---
    const POLLEN_COUNT = 160;
    const pPos = new Float32Array(POLLEN_COUNT * 3);
    const pVel = new Float32Array(POLLEN_COUNT * 2); // only x,y velocity

    for (let i = 0; i < POLLEN_COUNT; i++) {
      pPos[i * 3 + 0] = (Math.random() - 0.5) * 26;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 7;

      pVel[i * 2 + 0] = (Math.random() - 0.5) * 0.005;
      pVel[i * 2 + 1] = 0.002 + Math.random() * 0.006; // float upward
    }

    const pollenGeom = new THREE.BufferGeometry();
    pollenGeom.setAttribute('position', new THREE.BufferAttribute(pPos, 3));

    const pollenMat = new THREE.PointsMaterial({
      color: 0xd4a373,
      size: 0.065,
      transparent: true,
      opacity: 0.45,
      sizeAttenuation: true,
    });
    const pollenSystem = new THREE.Points(pollenGeom, pollenMat);
    scene.add(pollenSystem);

    // --- LARGE GLOWING POLLEN (dust motes) ---
    const MOTE_COUNT = 40;
    const mPos = new Float32Array(MOTE_COUNT * 3);
    const mVel = new Float32Array(MOTE_COUNT * 2);

    for (let i = 0; i < MOTE_COUNT; i++) {
      mPos[i * 3 + 0] = (Math.random() - 0.5) * 26;
      mPos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      mPos[i * 3 + 2] = (Math.random() - 0.5) * 4;
      mVel[i * 2 + 0] = (Math.random() - 0.5) * 0.007;
      mVel[i * 2 + 1] = 0.001 + Math.random() * 0.004;
    }

    const moteGeom = new THREE.BufferGeometry();
    moteGeom.setAttribute('position', new THREE.BufferAttribute(mPos, 3));
    const moteMat = new THREE.PointsMaterial({
      color: 0xfaebdf,
      size: 0.14,
      transparent: true,
      opacity: 0.22,
      sizeAttenuation: true,
    });
    const moteSystem = new THREE.Points(moteGeom, moteMat);
    scene.add(moteSystem);

    // --- ANIMATION LOOP ---
    let animId;
    let t = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      t += 0.016;

      // Update leaves
      leafObjects.forEach(leaf => {
        const sway = Math.sin(t * leaf.swayFreq + leaf.swayPhase) * leaf.swayAmp;
        leaf.mesh.position.y -= leaf.fallSpeed;
        leaf.mesh.position.x += leaf.driftX + sway * 0.01;
        leaf.mesh.rotation.x += leaf.rx;
        leaf.mesh.rotation.y += leaf.ry;
        leaf.mesh.rotation.z += leaf.rz;

        // Respawn above viewport when fallen below
        if (leaf.mesh.position.y < -10) {
          leaf.mesh.position.y = 11 + Math.random() * 8;
          leaf.mesh.position.x = (Math.random() - 0.5) * 26;
        }
        if (leaf.mesh.position.x > 14) leaf.mesh.position.x = -14;
        if (leaf.mesh.position.x < -14) leaf.mesh.position.x = 14;
      });

      // Update pollen
      for (let i = 0; i < POLLEN_COUNT; i++) {
        const i3 = i * 3;
        const swayX = Math.sin(t * 0.6 + i * 0.4) * 0.003;
        pPos[i3] += pVel[i * 2] + swayX;
        pPos[i3 + 1] += pVel[i * 2 + 1];
        if (pPos[i3 + 1] > 8) pPos[i3 + 1] = -8;
        if (pPos[i3] > 14) pPos[i3] = -14;
        if (pPos[i3] < -14) pPos[i3] = 14;
      }
      pollenGeom.attributes.position.needsUpdate = true;

      // Update dust motes
      for (let i = 0; i < MOTE_COUNT; i++) {
        const i3 = i * 3;
        const swayX = Math.sin(t * 0.3 + i * 0.7) * 0.004;
        mPos[i3] += mVel[i * 2] + swayX;
        mPos[i3 + 1] += mVel[i * 2 + 1];
        if (mPos[i3 + 1] > 8) mPos[i3 + 1] = -8;
        if (mPos[i3] > 14) mPos[i3] = -14;
        if (mPos[i3] < -14) mPos[i3] = 14;
      }
      moteGeom.attributes.position.needsUpdate = true;

      // Gentle camera breathe — like looking through swaying branches
      camera.position.x = Math.sin(t * 0.11) * 0.35;
      camera.position.y = Math.cos(t * 0.08) * 0.22;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      leafGeom.dispose();
      pollenGeom.dispose();
      moteGeom.dispose();
      pollenMat.dispose();
      moteMat.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
