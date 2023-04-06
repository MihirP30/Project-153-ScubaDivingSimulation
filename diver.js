AFRAME.registerComponent("diver", {
    schema:{
        rotation: {type:"number", default:0}
    },
    init: function(){
        this.data.rotation = this.el.getAttribute("rotation")
        var rotate = this.data.rotation

        window.document.addEventListener("keydown", (e)=>{
            if (e.key === "w"){
                if (rotate.x > -40){
                    rotate.x-= 0.5
                    this.el.setAttribute("rotation", rotate)
                }
            }
            if (e.key === "s"){
                if (rotate.x < 20){
                    rotate.x+= 0.5
                    this.el.setAttribute("rotation", rotate)
                }
            }
            if (e.key === "a"){
                if (rotate.z > -10){
                    rotate.z-= 0.5
                    rotate.y+= 0.5
                    this.el.setAttribute("rotation", rotate)
                }
            }
            if (e.key === "d"){
                if (rotate.z < 10){
                    rotate.z+= 0.5
                    rotate.y-= 0.5
                    this.el.setAttribute("rotation", rotate)
                }
            }
        })
    }
})