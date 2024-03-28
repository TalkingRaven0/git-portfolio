'use client'
import BackgroundCanvas from "../BackgroundCanvas/BackgroundCanvas"

const CoolGraphics = () => {
    let cubeVertices = {
        trb:{x:100,y:100,z:-100},
        trf:{x:100,y:100,z:100},
        tlb:{x:-100,y:100,z:-100},
        tlf:{x:-100,y:100,z:100},
        brb:{x:100,y:-100,z:-100},
        brf:{x:100,y:-100,z:100},
        blb:{x:-100,y:-100,z:-100},
        blf:{x:-100,y:-100,z:100},
    }
    
    const draw = (ctx:CanvasRenderingContext2D, frameCount: number) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        const center = {x:ctx.canvas.width/2,y:ctx.canvas.height/2}

        ctx.strokeStyle = "white"
        ctx.stroke()
    }
    return <BackgroundCanvas draw={draw} />
}

export default CoolGraphics