import React, { useRef } from 'react'

const ContactsContent = () => {
  
  const emailRef = useRef<null | HTMLAnchorElement>(null);
  const phoneRef = useRef<null | HTMLAnchorElement>(null);

  function copyToClipboard(reference:any) {

    navigator.clipboard.writeText(reference.current.innerHTML);
    alert("copied to clipboard")
  }

  return (
    <div className='center-shadow flex-none flex h-fit bg-sky-950 border-t-2 border-cyan-400 px-5 py-5 font-mono text-sky-200'>
      <div className='flex-auto font-mono text-3xl text-center content-center drop-shadow-glow text-sky-300'>CONTACT ME:</div>
      <div className='flex flex-auto '>
        <div className='flex-none grid grid-cols-1 gap-1 gap-y-3'>
          <div className='text-blue-300'>Full Name:</div>
          <div className='text-blue-300'>Current Title: </div>
        </div>
        <div className='flex-auto relative h-full ml-3'>
          <div className='mb-3'>Den Arwin G. Salazar</div>
          <div className='m-auto'>Junior Graduate Developer</div>
        </div>
      </div>

      <div className='flex flex-auto '>
        <div className='flex-none grid grid-cols-1 gap-1 gap-y-3'>
          <div className='text-blue-300'>Email Address:</div>
          <div className='text-blue-300'>Mobile Number:</div>
        </div>
        <div className='flex-auto relative h-full ml-3'>
          <div className='mb-3'><a ref={emailRef} target="_blank" href='mailto:densalazar1022@gmail.com' onClick={()=>copyToClipboard(emailRef)}>densalazar1022@gmail.com</a></div>
          <div className='m-auto'><a ref={phoneRef} href='#' onClick={()=>copyToClipboard(phoneRef)}> +63 935 722 1558 </a></div>
        </div>
      </div>

      <div className='flex flex-auto '>
        <div className='flex-none grid grid-cols-1 gap-1 gap-y-3'>
          <div className='text-blue-300'>Github Account:</div>
          <div className='text-blue-300'>LinkedIn:</div>
        </div>
        <div className='flex-auto relative h-full ml-3'>
          <div className='mb-3'> <a target="_blank" href='https://github.com/TalkingRaven0'>TalkingRaven0</a></div>
          <div className='m-auto'> <a target="_blank" href='https://www.linkedin.com/in/den-salazar/'>Den Arwin Salazar</a> </div>
        </div>
      </div>
    </div>
  )
}

export default ContactsContent