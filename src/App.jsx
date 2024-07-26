

function App() {

  return (
    <div className="font-sans container h-[100vh] bg-sky-200 flex justify-center items-center">
      <div className="bg-white rounded-lg w-[70%] py-20 px-7 shadow-lg">
        <div className="mb-5">
          <h3 className="font-black h-10 text-2xl text-center text-black">Age Calculator</h3>
          <p className="text-center">The age calculator can determine age or interval between to dates. The calculated date will be display in years.</p>
        </div>
        <div className="container md:flex flex-wrap items-center justify-between mt-4">
          <div className="md:w-[48%] my-5 md:my-0 rounded-xl outline outline-offset-4 outline-black p-4">
            <h2 className="font-bold text-xl mb-5 text-black">Date of Birth</h2>
            <input type="date" name="age" className="outline outline-black p-3 rounded-xl" />
            <div className="mt-4 md:flex flex-wrap items-center justify-between">
              <button class="rounded-xl max-lg::w-[48%] w-[100%] my-3 max-lg::my-0 hover:outline hover:outline-black hover:outline-offset-2 bg-black p-4 text-white">Calculate Age</button>
              <button class="rounded-xl max-lg::w-[48%] w-[100%] hover:outline hover:outline-[#00000096] hover:outline-offset-2 bg-[#00000096] p-4 text-white">Reset</button>
            </div>
          </div>
          <div className="md:w-[48%] rounded-xl outline outline-offset-4 outline-[#00000041] p-4">
            21Years
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
