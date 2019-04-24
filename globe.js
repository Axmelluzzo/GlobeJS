  <!DOCTYPE html>
  <html>
    <head>
      <title>Earth 3D</title>
      <script type="text/javascript" src="js/three.js"></script>
      <script type="text/javascript" src="js/OrbitControls.js"></script>
      <script type="text/javascript" src="js/WebGL.js"></script>
    </head>
    <body>

<div id="ThreeJS"></div>
<script>



  var camera, controls, scene, renderer, geometry;


  init();

  animate();

  function init() {
    // Three.js initialization
    renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container = document.getElementById( 'ThreeJS' );
    container.appendChild(renderer.domElement);


    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, .1, 10000);
    camera.position.z = 6050;

    controls = new THREE.OrbitControls( camera, renderer.domElement );
                    controls.enableDamping = true; 
                    controls.dampingFactor = .95;
                    controls.screenSpacePanning = false;
                    controls.update();
                    controls.autoRotate = true;
                    controls.autoRotateSpeed = 5.5;
                    controls.enableDamping = true;

    // controls.keys = [ 65, 83, 68 ];

    controls.addEventListener('change', render);

    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x000000 );

    var lightz = new THREE.AmbientLight( 0xffffff,10);
                scene.add( lightz );




    // Node geometry
    geometry = new THREE.SphereGeometry(30);
    



  /**
   *  Creates a graph with random nodes and edges.
   *  Number of nodes and edges can be set with
   *  numNodes and numEdges.
   */


  /**
   *  Create a node object and add it to the scene.
   */





  /**
   *  Create an edge object (line) and add it to the scene.
   */
//   function drawEdge(source, target) {
//       material = new THREE.LineBasicMaterial({ color: 0x606060 });

//       var tmp_geo = new THREE.Geometry();
//       tmp_geo.vertices.push(source.data.draw_object.position);
//       tmp_geo.vertices.push(target.data.draw_object.position);

//       line = new THREE.LineSegments( tmp_geo, material );
//       line.scale.x = line.scale.y = line.scale.z = 1;
//       line.originalScale = 1;

//       // NOTE: Deactivated frustumCulled, otherwise it will not draw all lines (even though
//       // it looks like the lines are in the view frustum).
//       line.frustumCulled = false;

//       geometries.push(tmp_geo);

//       scene.add( line );
//   }



  }




setTimeout(drawNode(),100);





    
//   texture = THREE.ImageUtils.loadTexture('js/earth.jpg', {}, function() {
//                     renderer.render(scene);
//                 });

//                 setTimeout(function(){
//                     texture = THREE.ImageUtils.loadTexture('js/earth.jpg', {}, function() {
//                     renderer.render(scene);
//                 });
//                 },500);

                    
//                 var test = new THREE.SphereGeometry(50,15,15);
//                 var material = new THREE.MeshBasicMaterial({map: texture});
//                 // var material = new THREE.MeshLambertMaterial({color:0x008080, reflectivity: 5});


//                 var mesh = new THREE.Mesh(test,material);
                
//                 mesh.position.x = 0;
//                 mesh.position.y = 0;
//                 mesh.position.z = 0;



//                 scene.add(mesh);









                function drawNode() {










                  
      texture = THREE.ImageUtils.loadTexture('js/earth.jpg', {}, function() {
      renderer.render(scene);
      });
    var geometry = new THREE.SphereGeometry(500,32,32);
    var draw_object = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { map: texture } ) );

    var area = 500;
    draw_object.position.x = 0;
    draw_object.position.y = 0;
    draw_object.position.z = 0;

    scene.add( draw_object );
  };














  // function drawNode() {
  //   var geometry = new THREE.SphereGeometry(30);
  //   var draw_object = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( {  color: Math.random() * 0xe0e0e0, opacity: 0.8 } ) );

  //   var area = 500;
  //   draw_object.position.x = Math.floor(Math.random() * (area + area + 1) - area);
  //   draw_object.position.y = Math.floor(Math.random() * (area + area + 1) - area);
  //   draw_object.position.z = Math.floor(Math.random() * (area + area + 1) - area);

  //   scene.add( draw_object );
  // };


for (i=0; i<100; i++){

    var geometry = new THREE.SphereGeometry(5,1,1);
     var draw_object = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( {  color: 0xffffff} ) );

     var area = 5000;
    draw_object.position.x = Math.floor(Math.random() * (area + area + 1) - area);
    draw_object.position.y = Math.floor(Math.random() * (area + area + 1) - area);
    draw_object.position.z = Math.floor(Math.random() * (area + area + 1) - area);

    scene.add( draw_object );


};























  function animate() {
    requestAnimationFrame( animate );
    controls.update();
    render();
  }


  function render() {
    // render scene
    renderer.render( scene, camera );
  }


  


</script>
</body>
</html>
