"use client";
import React, { useEffect, useRef, useState } from "react";
import BIRDS from "vanta/dist/vanta.globe.min";
import * as THREE from "three";

export const MyComponent = ({ children }) => {
	const [vantaEffect, setVantaEffect] = useState(0);
	const vantaRef = useRef(null);

	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				BIRDS({
					el: vantaRef.current,
					THREE: THREE,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 600.0,
					minWidth: 600.0,
					scale: 1.0,
					scaleMobile: 1.0,
					color: 0x4a3fff,
				})
			);
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [vantaEffect]);
	return (
		<div className="relative w-full h-screen overflow-hidden">
			<div
				ref={vantaRef}
				className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
			/>
			<div className="relative z-10 min-h-screen max-h-screen overflow-y-auto">
				{children}
			</div>
		</div>
	);
};
