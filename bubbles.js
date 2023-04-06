AFRAME.registerComponent("bubbles", {
    schema:{
        position: {type:"number", default:0}
    },
    init: function(){
        this.data.position = this.el.getAttribute("position")
        var pos = this.data.position
        window.document.addEventListener("keydown", (e)=>{
            if (e.key === "a"){
                if (pos.x > -2){
                    pos.x-= 0.1
                }
            }
            if (e.key === "d"){
                if (pos.x < 2){
                    pos.x+= 0.1
                }
            }
        })
    },
    tick: function(){
        this.data.position = this.el.getAttribute("position")
        var pos = this.data.position
        pos.y+=0.05
        if (pos.y >= 0){
            pos.y = -5
        }
        this.el.getAttribute("position", pos)
    }
})