const Button = ({label, iconURL}) => {
  return (
      <button className="flex py-4 px-7  justify-center items-center gap-2 text-lg border bg-coral-red border-coral-red text-white rounded-full leading-none font-montserrat">
          {label}
          <img src={iconURL} alt="arrow right icon" className="ml-2 rounded-full w-5 h-5" />
    </button>
  )
}

export default Button