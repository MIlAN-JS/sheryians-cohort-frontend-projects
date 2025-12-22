import zoro from '../../assets/zoro2.jpg'
import HeroHeadings from './HeroHeadings'

const Hero = () => {
  return (
    <div className='bg-blue-500 relative w-full h-60 md:h-[65vh] lg:h-[75vh] aspect-[16/9]  px-4 rounded-lg overflow-hidden  '>
        <img src='https://i.pinimg.com/736x/d5/dd/74/d5dd748762346f8f2ca3846800615d79.jpg' className=' absolute w-full h-full object-top inset-0 md:w-full md:h-full object-cover' alt="" />
        <HeroHeadings/>

    </div>
  ) 
}

export default Hero