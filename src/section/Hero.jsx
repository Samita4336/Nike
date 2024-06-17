import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { statistics } from "../constants"


const Hero = () => {
  return (
    <section id="Home" className="w-full flex xl:flex-row flex-col max-h-screen gap-10 justify-center max-container">
      <div className="flex flex-col justify-center items-start xl:w-2/5 max-xl:padding-x pt-28 relative">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="text-8xl max-sm:text-[72px] max-sm:leading[82px] font-palanquin mt-10 ">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10"> New Arrival</span> <br />
          <span className="text-coral-red inline-block mt-3 font-bold">Nike</span>
          <span> Shoes</span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg mt-6 mb-14 sm:max-w-sm">Discover stylish nike arrivals </p>
        <Button iconURL={arrowRight} label="Shop Now" />

        <div className="flex flex-wrap justify-start items-start w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={stat.label}>

              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="font-montserrat text-slate-gray">{stat.label}</p>
            </div>
))}
        </div>
      </div>
 
    </section>
  )
}

export default Hero