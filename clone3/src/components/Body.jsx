import Part1 from "./Part1"
import Part2 from "./Part2"


function Body() {
  return (
    <div className="w-full h-auto flex flex-col sm:flex-row">
      <Part1 />              
      <Part2 />              
    </div>
  )
}

export default Body