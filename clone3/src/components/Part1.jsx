import '@fortawesome/fontawesome-free/css/all.css'


function Part1() {
  return (
    <div className="w-full sm:w-[40vw] h-[90vh]">

        <div className="h-[10vh] w-[94vw] sm:w-[36vw] mx-[3vw] mt-4 sm:mx-[2vw] flex flex-row items-center justify-center gap-2">
          <div className="bg-white px-2 py-2.5 border-[1px] border-black rounded-full w-[4vh] h-[4vh] flex justify-center items-center">
            <i className="fas fa-arrow-right text-[8px] sm:text-[10px]"></i>
          </div>
          <span className="sm:text-[20px] text-[15px]">Explore a 14 day <strong>free trial</strong></span>
        </div>


        <div className="h-[80vh] w-[94vw] sm:w-[36vw] -mt-4 mx-[3vw] sm:mx-[2vw] flex flex-col items-center">
          <div className="flex flex-col w-full items-center gap-[0.1vh]">
            <span className="sm:text-[10vh] text-[8vh] ">Financial</span>
            <strong className="sm:text-[10vh] text-[8vh] sm:-mt-4 -mt-2">Tracking</strong>
            <strong className="sm:text-[10vh] text-[8vh]">Platform</strong>
          </div>
          <div className="flex flex-row w-full items-center justify-center gap-8 mt-[2vh]">
            <button className=" text-white bg-black px-4 pt-1 pb-1.5 rounded-full hidden sm:block">
              Try for free
            </button>
            <div className="flex gap-2 items-center ">
              <div className="bg-white px-2 py-2.5 border-[1px] border-black rounded-full h-[3vh] flex justify-center items-center ">
                <i className="fas fa-play text-[8px] "></i>
              </div>
              <u>See Demo</u>
            </div>
          </div>
          <div className="flex flex-col w-full items-center mt-[10vh]  ml-4 sm:mt-[8vh]">
            <div className="flex flex-col bg-gray-400 border rounded-[20px] h-[15vh] w-[70%] sm:w-[55%] justify-center items-center text-left z-20">
              <span className="text-[10px]"><strong className="text-[20px]">1 million+</strong><br /> Every month cash back for our clients.</span>
            </div>
            <div className="z-0 bg-gray-400 border rounded-[20px] h-[15vh] w-[70%] sm:w-[55%] justify-center items-center text-left -mt-20 -ml-8">
              
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Part1