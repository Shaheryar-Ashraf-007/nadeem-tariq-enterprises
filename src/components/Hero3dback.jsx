import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Hero3DBackground({ children, className = "" }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // ---- scene / camera / renderer ----
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // ---- a few slowly rotating wireframe shapes for depth ----
    const shapes = [];
    const shapeDefs = [
      { geo: new THREE.IcosahedronGeometry(4, 0), color: "#a855f7", pos: [-11, 6, -2] },
      { geo: new THREE.TorusGeometry(3.5, 1, 8, 24), color: "black", pos: [13, 2, -30] },
    ];

    shapeDefs.forEach(({ geo, color, pos }) => {
      const mat = new THREE.MeshBasicMaterial({
        color,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(...pos);
      // Store original positions and scale for responsive adjustments
      mesh.userData.originalPos = { x: pos[0], y: pos[1], z: pos[2] };
      scene.add(mesh);
      shapes.push(mesh);
    });

    // ---- resize handling & RESPONSIVE LOGIC ----
    const handleResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);

      // Responsive adjustments for mobile devices
      const isMobile = w < 768; // Tailwind's 'md' breakpoint
      const scaleFactor = isMobile ? 0.6 : 1; // Scale down shapes on mobile
      const xFactor = isMobile ? 0.5 : 1; // Bring shapes closer to center on mobile

      shapes.forEach((mesh) => {
        const orig = mesh.userData.originalPos;
        // Adjust X position to keep shapes visible on narrow screens
        mesh.position.x = orig.x * xFactor;
        // Adjust Scale so shapes don't overwhelm the screen
        mesh.scale.set(scaleFactor, scaleFactor, scaleFactor);
      });
    };

    // Call once to set initial responsive state
    handleResize();
    window.addEventListener("resize", handleResize);

    // ---- animation loop ----
    let frameId;
    const clock = new THREE.Clock();

    const renderStaticFrame = () => {
      renderer.render(scene, camera);
    };

    const animate = () => {
      const t = clock.getElapsedTime();

      shapes.forEach((mesh, i) => {
        mesh.rotation.x = t * (0.08 + i * 0.02);
        mesh.rotation.y = t * (0.06 + i * 0.015);
        
        // FIX: Changed from += to absolute position to prevent shapes 
        // from slowly drifting off-screen over time
        const origY = mesh.userData.originalPos.y;
        mesh.position.y = origY + Math.sin(t * 0.5 + i) * 0.5;
      });

      camera.position.x = Math.sin(t * 0.05) * 2;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    if (prefersReducedMotion) {
      renderStaticFrame();
    } else {
      animate();
    }

    // ---- cleanup ----
    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      shapeDefs.forEach(({ geo }) => geo.dispose());
      shapes.forEach((mesh) => mesh.material.dispose());
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className={`relative w-full overflow-hidden bg-white ${className}`}>
      <div
        ref={mountRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}