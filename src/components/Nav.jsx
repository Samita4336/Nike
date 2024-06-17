import { headerLogo } from "../assets/images/index"
import { hamburger } from "../assets/icons"
import { navLinks } from "../constants"

const Nav = () => {
  return (
    <header className="padding-x py-10 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <img src={headerLogo} alt="Logo"
          width={130}
          height={29}
        />
       
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                {item.label}
              </a>
           </li>
         ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="humburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  )
}

export default Nav