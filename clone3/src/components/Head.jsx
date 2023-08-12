import '@fortawesome/fontawesome-free/css/all.css'


function Head() {
  return (
    <div className="w-full h-[10vh] flex flex-row justify-around items-center border-b-2 border-black">
      <div className="flex gap-[0.5vw] items-center">
        <i className="fas fa-globe text-gray-800"></i>
        <strong>FinTrack</strong>
      </div>
      <ul className="flex gap-[1vw] font-semibold">
        <li className="hidden sm:block">Platform</li>
        <li className="hidden sm:block">Features</li>
        <li className="hidden sm:block">How it works?</li>
      </ul>
      <div className="flex gap-[1vw] items-center">
        <button className="hidden sm:block text-white bg-black px-4 pt-1 pb-1.5 rounded-full">
          Get The App
        </button>
        <i className="fas fa-bars text-[20px]"></i>
      </div>
    </div>
  )
}

export default Head