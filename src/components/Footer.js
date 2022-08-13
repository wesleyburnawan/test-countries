const Footer = () => {
  return (
    <footer className="text-center dark:bg-dark-blue-3 bg-gray-1 text-white">
      <div className="text-center p-4" style={{backgroundColor : 'rgba(0, 0, 0, 0.2)'}}>
        {/* © 2022 Copyright:
        <a className="text-white" href="https://tailwind-elements.com/"> Tailwind Elements</a> */}
          Challenge by
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extrabold"
            > Frontend Mentor</a
          >. Coded by 
          <a href="https://github.com/RandyBrilliant" className="font-extrabold"> RandyBrilliant</a>.
      </div>
    </footer>
  )
}

export default Footer;