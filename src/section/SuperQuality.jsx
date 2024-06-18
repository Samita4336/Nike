import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center w-full max-lg:flex-col max-container gap-10 "
    >
      <div className="flex flex-col flex-1">
       
          <h2 className='font-palanquin text-4xl capitalize lg:max-w-lg font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            We Provide You
          </span>
         
          <span className='text-coral-red inline-block mt-3'>
            Super  
          </span>  <span className='text-coral-red inline-block mt-3'>
          Quality </span> Shoes
        </h2>
        <p className='mt-4 info-text lg:max-w-lg'>
           Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 info-text lg:max-w-lg">
           Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">

        <Button  label="View Details" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
  <img src={shoe8} alt="shoe8" className="object-contain" width={570} height={522} />
      </div>

    </section>
  )
}

export default SuperQuality