import * as THREE from 'three';

// const arc = new THREE.EllipseCurve(0, 0, 100, 50);
const arc = new THREE.EllipseCurve(0, 0, 100, 100, 0, Math.PI / 2);
const pointLight = arc.getPoints(50);

const geometry = new THREE.BufferGeometry();
geometry.setFromPoints(pointLight);

const material = new THREE.LineBasicMaterial({
    color: new THREE.Color('orange'),
});

const points = new THREE.Line(geometry, material);

export default points;
