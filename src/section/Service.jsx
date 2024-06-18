import { services } from "../constants"
import ServiceCard from "../components/ServiceCard"

const Service = () => {
  return (
    <section
      id="service"
      className="max-container flex flex-wrap gap-9 justify-center"
    >
      {services.map((service) => (
        <ServiceCard key={service.label}  {...service} />
      ))}
    </section>
  )
}

export default Service