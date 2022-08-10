AFRAME.registerComponent("bullets", {
    init: function () {
      this.shootBullet();
      this.redDot();
    },
    shootBullet: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "z") {
          var bullet = document.createElement("a-entity");
  
          bullet.setAttribute("geometry", {
            primitive: "sphere",
            radius: 0.1,
          });
  
          bullet.setAttribute("material", "color", "black");
  
          var cam = document.querySelector("#camera");
  
          pos = cam.getAttribute("position");
  
          bullet.setAttribute("position", {
            x: pos.x,
            y: pos.y,
            z: pos.z,
          });
  
          var camera = document.querySelector("#camera").object3D;
  
          //get the camera direction as Three.js Vector
          var direction = new THREE.Vector3();
          camera.getWorldDirection(direction);
  
          //set the velocity and it's direction
          bullet.setAttribute("velocity", direction.multiplyScalar(-10));
  
          var scene = document.querySelector("#scene");
  
          scene.appendChild(bullet);
        }
        const boxId = [
            "box"
        ]
       redDot: function() {
            const id = this.el.getAttribute("id");
            const placesId = ["box"];
            if (placesId.includes(id)) {
              const placeContainer = document.querySelector("#places-container");
              placeContainer.setAttribute("cursor-listener", {
                selectedItemId: id
              });
              this.el.setAttribute("material", {
                color:"#690c08",
                opacity: 1
              });
            }
          },
      });
    },
  });