import React, { useRef } from 'react'

const ContactsContent = () => {
  
  const emailRef = useRef<null | HTMLAnchorElement>(null);
  const phoneRef = useRef<null | HTMLAnchorElement>(null);

  function copyToClipboard(reference:any) {

    navigator.clipboard.writeText(reference.current.innerHTML);
    alert("copied to clipboard")
  }

  return (
    <div className='center-shadow flex-none flex h-fit bg-sky-950 border-t-2 border-cyan-400 px-10 py-3 font-mono text-sky-200'>
      <div className='flex-[1] font-mono text-3xl text-center content-center drop-shadow-glow text-sky-300'>CONTACT ME:</div>
      <div className='flex-[2] flex h-full'>
        <div className='grid grid-cols-3 gap-1 my-auto w-full'>
          <div className='text-blue-300'>Full Name:         </div> <div className=' col-span-2'>Den Arwin G. Salazar</div>
          <div className='text-blue-300'>Current Job Title: </div> <div className=' col-span-2'>Junior Graduate Developer</div>
        </div>
      </div>
      <div className='flex-[2] grid grid-cols-3 gap-1'>
        <div className='text-blue-300' >Email Address:   </div> <div className=' col-span-2 underline drop-shadow-glow text-sky-400'> <a ref={emailRef} target="_blank" href='mailto:densalazar1022@gmail.com' onClick={()=>copyToClipboard(emailRef)}>densalazar1022@gmail.com</a></div>
        <div className='text-blue-300' >Mobile Number:   </div> <div className=' col-span-2 underline drop-shadow-glow text-sky-400'> <a ref={phoneRef} href='#' onClick={()=>copyToClipboard(phoneRef)}> +63 935 722 1558 </a></div>
        <div className='text-blue-300' >Github Account:  </div> <div className=' col-span-2 underline drop-shadow-glow text-sky-400'> <a target="_blank" href='https://github.com/TalkingRaven0'>TalkingRaven0</a></div>
        <div className='text-blue-300' >LinkedIn:        </div> <div className=' col-span-2 underline drop-shadow-glow text-sky-400'> <a target="_blank" href='https://www.linkedin.com/in/den-salazar/'>Den Arwin Salazar</a> </div>
      </div>
    </div>
  )
}

export default ContactsContent