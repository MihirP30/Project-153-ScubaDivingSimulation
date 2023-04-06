AFRAME.registerComponent("ocean", {
    schema:{
        speed: {type:"number", default:0}
    },
    init: function(){
        window.document.addEventListener("keydown", (e)=>{
            if (e.key === "a"){
                this.data.speed = -0.5
            }
            else if (e.key === "d"){
                this.data.speed = 0.5
            }
        })
        window.document.addEventListener("keyup", (e)=>{
            this.data.speed = 0
        })
    },
    tick: function(){
        var map_rotation = this.el.getAttribute("rotation");
        map_rotation.y += this.data.speed;
        this.el.setAttribute("rotation", {
            x: map_rotation.x,
            y: map_rotation.y,
            z: map_rotation.z
        })
    }
})