import { Service, SuperQuality, SpecialOffer, Subscribe,Footer,Hero, CustomerReview,PopularProduct } from "./section"
import Nav from "./components/Nav"

const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-l wide:pading-r padding-b'>
        <Hero />
      </section>
      <section className='padding'><PopularProduct /></section>
      <section className='padding'><SuperQuality /></section>
      <section className='padding-x py-10'><Service /></section>
      <section className='padding'><SpecialOffer /></section>
      <section className='padding'><Service /></section>
        <section className='padding bg-pale-blue'><CustomerReview /></section>
      <section className='padding-x sm:py-32 py-16 w-full'><Subscribe /></section>
      <section className='padding-x bg-black padding-t pb-8'><Footer /></section>
    </main>
  )
}

export default App