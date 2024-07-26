import bg from "./assets/bg.webp"

function App() {

  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="bg-no-repeat bg-cover bg-center overflow-auto font-sans container h-[100vh] age-calculator flex justify-center items-center">
      <div className="bg-white relative sm:w-[70%] w-[95%] rounded-2xl  py-20 px-7 shadow-lg">
        <div className="mb-5">
          <h3 className="font-black h-10 text-2xl text-center text-black">Age Calculator</h3>
          <p className="text-center">The age calculator can determine age or interval between to dates. The calculated date will be display in years.</p>
        </div>
        <div className="container borde md:flex flex-wrap items-center justify-between mt-4">
          <div className="md:w-[48%] my-7 md:my-0 rounded-xl outline outline-offset-4 outline-black p-4">
            <h2 className="font-bold text-xl mb-5 text-black">Date of Birth</h2>
            <p className="text-sm h-6 text-[#00000091]">Enter your age</p>
            <input type="date" name="age" className="outline outline-black w-[100%] p-3 rounded-xl" />
            <div className=" md:flex flex-wrap items-center justify-between">
              <button class="rounded-xl max-lg::w-[48%] w-[100%] my-3 max-lg::my-0 hover:outline hover:outline-black hover:outline-offset-2 bg-black p-4 text-white">Calculate Age</button>
              <button class="rounded-xl max-lg::w-[48%] w-[100%] hover:outline hover:outline-[#00000096] hover:outline-offset-2 bg-[#00000096] p-4 text-white">Reset</button>
            </div>
          </div>
          <div className="md:w-[48%] rounded-xl flex justify-center font-bold items-center text-5xl text-[#00000058] outline outline-offset-4 md:h-72 outline-[#000000] p-4">
            21Years
          </div>
        </div>
        <h2 className="absolute bottom-3 right-3">UI created by <a href="http://adarshmauryaportfolio.vercel.app" className="hover:underline text-orange-500">Adarsh</a></h2>
      </div>
    </div>
  )
}

export default App
