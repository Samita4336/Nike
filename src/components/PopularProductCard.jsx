import { star } from "../assets/icons"
const PopularProductCard = ({imgURL, name, price}) => {
  return (
      <div className="flex flex-1 flex-col w-full max-sm:w-full">
          <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
          <div className="flex justify-start gap-2.5 mt-8">
              <img src={star} alt="rating" width={24} height={24} />
              <p className="font-montserrat text-xl leading-normal text-slate-gray">4.3</p>
          </div>
          <h3 className="mt-2 font-palanquin text-2xl font-bold leading-normal">{name}</h3>
          <p className="mt-2 font-montserrat leading-normal text-2xl text-coral-red font-semibold">{price}</p>
      </div>
  )
}

export default PopularProductCard