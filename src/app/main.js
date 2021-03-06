import THREE from 'three';

//require('./../../public/style.css');

let camera, scene, renderer;
var geometry, material, mesh;

window.onload = () => {
    init();
    animate();
};

window.onresize = setRendererSize;

function init() {
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1000;

    scene = new THREE.Scene();

    geometry = new THREE.BoxGeometry(200, 200, 200);
    material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true});

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer();
    setRendererSize();

    document.body.appendChild(renderer.domElement);
}

function setRendererSize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    renderer.render(scene, camera);
}
