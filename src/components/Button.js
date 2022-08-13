const Button = ({ children }) => {
  return (
    <button className="bg-white dark:bg-dark-blue-1 dark:text-white drop-shadow-lg py-1 px-8 rounded inline-flex font-semibold items-center dark:hover:bg-gray-1 hover:bg-gray-2 hover:text-gray-1 hover:fill-gray-1 ease-in duration-200">
      {children}
    </button>
  )
}

export default Button;