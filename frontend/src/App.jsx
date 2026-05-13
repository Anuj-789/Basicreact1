import './App.css'

function App() {

  const formsave = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const age = e.target[1].value;

    await fetch("https://backend-7gk3.onrender.com/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        age
      })
    });

    alert("Data Saved Successfully");
  }

  return (
    <>
     <div className="flex justify-center my-29">
      <form onSubmit={formsave} className="text-green-500">

      Name: <input type="text" className="border-2 border-blue-800 px-1" /><br /><br />

      Age: <input type="number" className="border-2 border-blue-800 px-1" /><br /><br />

      <button className="border-2 border-blue-800 bg-blue-800 text-white p-1 rounded-2xl cursor-pointer hover:bg-blue-200 hover:text-blue-800">
        Submit
      </button>

      </form>
     </div>
    </>
  )
}

export default App
