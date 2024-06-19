import { star } from "../assets/icons"

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
      <div className="flex justify-center items-center flex-col">
          <img src={imgURL} alt="customer" className="object-cover rounded-full w-[120px] h-[120px]" />
          <p className="info-text mt-6 text-xl text-center max-w-sm ">{feedback}</p>
          <div className="mt-3 flex justify-center items-center gap-2.5">
              <img src={star} alt="rating" width={24} height={24} className="object-contain m-0" />
              <p className="font-montserrat text-xl text-slate-gray">({rating})</p>
          </div>
          <h3 className="font-palanquiun  mt-1 font-bold text-3xl">{customerName}</h3>

          
    </div>
  )
}

export default ReviewCard