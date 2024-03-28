import { useEffect, useRef} from "react"

const BackgroundCanvas = (props:any) => {

    const {draw} = props

    const canvasRef = useRef<any>()
    const framesPerSecond = 45
    const frameTiming = 1000/framesPerSecond
    let frameCount = 0
  
    useEffect(() => {
        
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        let animationFrameId : any

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // This is a recurring thing for frame updates
        setInterval(()=>{
            frameCount++
            //Our draw came here
            const render = () => {
                draw(context, frameCount)
                animationFrameId = window.requestAnimationFrame(render)
                }
                render()
        },frameTiming)
        
        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <div className="size-full fixed pointer-events-none -z-10">
            <canvas className="size-full" ref={canvasRef}></canvas>
        </div>
    )
}

export default BackgroundCanvas