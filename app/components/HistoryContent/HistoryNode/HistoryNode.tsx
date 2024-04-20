import React, { ReactNode, useRef, useState } from 'react'

const HistoryNode = ({noSpacer,children,header="P R E S E N T"}:{noSpacer?:boolean,children?:ReactNode,header?:string}) => {
    const mainDiv = useRef<HTMLDivElement|null>(null);
    const [showDetail,setShowDetail] = useState(false);

    let offsetter:any;
    let popUpper:any;
    
    if(mainDiv.current != null){
        mainDiv.current.onmouseover = () => {
            setShowDetail(true);
        }
        
        mainDiv.current.onmouseleave = () => {
            // setShowDetail(false);
            setShowDetail(false);
        }
    }
    if(showDetail){
        popUpper={
            '--tw-scale-y':'100%',
            'height':'fit-content'
        };
        offsetter={
            '--tw-translate-y':'-70%'
        }
    }else{
        popUpper={
            '--tw-scale-y': '0%',
            'height':'0px'
        };
        offsetter={
            '--tw-translate-y':'0%'
        }
    }

        return (
        <>
            <div ref={mainDiv} className=' anchor flex-none relative w-1'>
                <div className=' fold absolute-centered transition-all' style={offsetter}>
                    <h1 className='text-center text-6xl font-bold bg-black bg-opacity-70'>{header}</h1>
                    <div className='overflow-hidden transition-all h-fit origin-top transform' style={popUpper}>
                        <div className=' border-sky-400 border-2 bg-blue-950 p-3 px-5'>
                            {children}
                        </div>
                    </div>
                    <div className={' h-[10%] '+(showDetail? '':'hidden')}></div>
                </div>
            </div>
            {!noSpacer ? <div className=' invisible flex-auto min-w-[500px]'>spacer</div>:<></>}
        </>
        )
}

export default HistoryNode