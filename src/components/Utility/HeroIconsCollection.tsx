import React from 'react'

const HeroIconsCollection = () => {
  return (
    <div className='hidden iconResponce:block'>
      <img src="/JavaIcon.png" alt=""  className='aspect-square w-28  absolute top-[150px] right-[270px] hover:scale-90 transition-all duration-300 '/>
      <img src="/CppIcon.png" alt="" className='aspect-square w-28 absolute  top-[240px] right-[180px] hover:scale-90 transition-all duration-300 ' />
      <img src="/PythonIcon.png" alt=""  className='aspect-square w-28 absolute top-[240px] right-[360px] hover:scale-90 transition-all duration-300 '/>
      <img src="/WebDevIcon.png" alt="" className='aspect-square w-24 absolute top-[320px] right-[280px] hover:scale-90 transition-all duration-300 ' />
    </div>
  )
}


export default HeroIconsCollection
