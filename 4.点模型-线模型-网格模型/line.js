import * as THREE from 'three';

const geometry = new THREE.BufferGeometry();

const vertices = new Float32Array([
    0, 0, 0,
    100, 0, 0,
    0, 100, 0,
    0, 0, 100,
    100, 100, 0,
    0, 50, 0,
])

const attributes = new THREE.BufferAttribute(vertices, 3);
geometry.setAttribute('position', attributes);

const material = new THREE.LineBasicMaterial({
    color: new THREE.Color('orange'),
})

// const line = new THREE.Line(geometry, material);
// const line = new THREE.LineLoop(geometry, material);
const line = new THREE.LineSegments(geometry, material);

export default line;

