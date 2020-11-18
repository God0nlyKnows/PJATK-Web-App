let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera (75, window.innerWidth / window.innerHeight, 0.1, 10000);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


window.addEventListener('resize', function()
{
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
})

//const controls = new THREE.OrbitControls(camera, renderer.domElement);
camera.position.z = 15;
camera.position.x = 10;
camera.position.y = 7;

scene.background = new THREE.Color(0x000000);

let welcomeText = document.createElement('div');
welcomeText.innerHTML += "Witaj na stronie gdańskiego Google Development Student Club.";
welcomeText.className = "welcomeText";
document.body.appendChild(welcomeText);

let secondText = document.createElement('div');
secondText.innerHTML += "Jeszcze nie wiem co ale cos tu napisze";
secondText.className = "secondText";
document.body.appendChild(secondText);

// TEXT FORMATTING //
//Nie mam pojęcia co tu sie dzieje ale znalazłem to sobie wziąłem i działa
var textWrapper = document.querySelector('.welcomeText');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: 1})
  .add({
    targets: '.welcomeText .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  })
  /*.add({
    targets: '.welcomeText',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  */

//-------------------//

let dotArray= [];
function addDots(n){

    for(var j=0;j<n;j++){
        const dotGeometry = new THREE.SphereGeometry(0.01,12,12);
        const dotMaterial = new THREE.MeshBasicMaterial({color: 0xFFFFFF, side: THREE.DoubleSide});
        const dot = new THREE.Mesh(dotGeometry,dotMaterial);
        scene.add(dot);
        dotArray.push(dot);
        let randomNum1 = Math.random()* 25;
        let randomNum2 = Math.random()* 10;
        let randomNum3 = (Math.random()* 15)+ 10;
        dot.position.set(randomNum1,randomNum2,randomNum3);
    }
}

function updateDots(){
    let array = dotArray;
    for(var i=0;i<array.length;i++){
        array[i].position.x += 0.01;
        array[i].position.y += 0.01;
        array[i].position.z -= 0.01; 

        let randomNum1 = Math.random()* 25;
        let randomNum2 = Math.random()* 10;
        let randomNum3 = (Math.random()* 15)+ 10;
        
        if(array[i].position.x>20 || array[i].position.y>15 || array[i].position.z<0){
            array[i].position.x = randomNum1;
            array[i].position.y = randomNum2;
            array[i].position.z = randomNum3;
        }
    }
}

let update = function (){
    updateDots();
};

let render = function (){
    renderer.render(scene,camera);
};

let mainLoop = function (){
    requestAnimationFrame(mainLoop);
    update();
    render();
}
addDots(2000);
mainLoop();