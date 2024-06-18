import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"


const SpecialOffer = () => {
  return (
    <section className="flex max-container justify-wrap max-lg:flex-col-reverse gap-10 items-center">
      <div className="flex-1">
        <img src={offer} alt="offer" className="object-contain w-full" width={773} height={687} />
      </div>
       <div className="flex flex-col flex-1">
       
          <h2 className='font-palanquin text-4xl capitalize lg:max-w-lg font-bold'>
         
         
          <span className='text-coral-red inline-block mt-3'>
            Special  
          </span>  Offer
        </h2>
        <p className='mt-4 info-text lg:max-w-lg'>
           Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text lg:max-w-lg">
            Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 justify-wrap flex gap-4">

        <Button  label="Shop Now" iconURL={arrowRight} />
        <Button  label="Learn More" backgroundColor='bg-white' textColor="text-slate-gray" borderColor='border-slate-gray'  />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer