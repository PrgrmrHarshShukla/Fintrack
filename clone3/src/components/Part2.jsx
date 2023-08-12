import '@fortawesome/fontawesome-free/css/all.css'

import boy from './boy.png'


function Part2() {
  return (
    <div className=" sm:mt-0 -mt-12 w-full sm:w-[60vw] h-[90vh] flex flex-col ">
          <div className="flex flex-col w-full  justify-center sm:-ml-[5vw] items-center h-[60vh] relative ">

            <div className="hidden sm:block fixed text-center border rounded-[20px] p-4 bg-gray-400 z-30 sm:-mt-[40vh] sm:-ml-[22vw]">
              <strong> <i className="fas fa-download"></i> 70 k</strong><br />
              <small>Downloads</small>
            </div>
            <div className="block sm:hidden text-center z-30 border rounded-[20px] p-4 -ml-[69vw] bg-gray-400 ">
              <strong> <i className="fas fa-download"></i> 70 k</strong><br />
            </div>

            <div className="sm:mt-0 -mt-[5vh] flex flex-col bg-gray-400 rounded-[20px] h-[33vh] sm:h-[35vh] w-[70%] sm:w-[35%] justify-center items-center text-left z-20 overflow-hidden">
              <img src={boy} className="w-full h-[40vh]" />
            </div>
            <div className="z-10 bg-gray-400 border rounded-[20px] h-[35vh] w-[70%] sm:w-[35%] text-left -mt-[30vh] ml-[10vw]">              
            </div>
            

        </div>


        <div className="w-full h-[30vh] flex flex-row justify-around items-center border-t-2 border-black" >
          <div className="max-w-[40%] sm:max-w-[30%]">
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <div className="bg-white px-2 py-2.5 border-[1px] border-black rounded-full w-[4vh] h-[4vh] flex justify-center items-center">
                  <i className="fas fa-link text-[8px] sm:text-[10px]"></i>
                </div>
                <strong>Subscriptions</strong>
              </div>
              <p className="text-[12px]">Make your money analysis faster and create your own ways of saving.</p>
            </div>
          </div>
          
          <div className="max-w-[40%] sm:max-w-[30%]">
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <div className="bg-white px-2 py-2.5 border-[1px] border-black rounded-full w-[4vh] h-[4vh] flex justify-center items-center">
                  <i className="fas fa-download text-[9px] sm:text-[10px]"></i>
                </div>
                <strong>Mobile App</strong>
              </div>
              <p className="text-[12px]">Shows income, expenses, credit score, savings goals, net worth, investments.</p>
            </div>
          </div>
          </div>
          
    </div>
  )
}

export default Part2