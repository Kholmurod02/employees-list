import { useState } from "react"
import { useDispatch } from "react-redux"
import { addWorker } from "../../api/workersApi"
import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"


const AddUser = () => {

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [dob, setDob] = useState("")
  const [role, setRole] = useState("")
  const [status, setStatus] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    const newWorker = {
      name: name,
      phone: phone,
      role: role,
      birthday: dob,
      isArchive: status
    }
    dispatch(addWorker(newWorker))
    setName("")
    setPhone("")
    setDob("")
    setRole("")
    setStatus("")

    navigate("/")

  }


  return (
    <div className="max-w-[1200px] m-auto font-mono">
      <form onSubmit={handleSubmit} className="w-[90%] sm:w-[50%] md:[90%] m-auto mt-14 md:mt-4 border border-gray-100 rounded-lg">
        <div className="px-3 pt-3 flex gap-3">
        <button type="button" onClick={()=>navigate("/")}><ArrowLeft/></button>
        <h1 className="font-bold">Back To Table</h1>
       </div>
        <div className=" flex flex-col gap-3  shadow-xl rounded-[5px] p-5  justify-center">

          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-bold ">Name:</label>
            <input type="text" id="name" placeholder='  Enter your name'
              value={name} onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 w-full h-[40px] rounded-lg" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="font-bold ">Phone:</label>
            <input type="text" id="phone" placeholder='  +7 (883) 508-3269'
              value={phone} onChange={(e) => setPhone(e.target.value)}
              className="border border-gray-300 w-full h-[40px] rounded-lg" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="font-bold">Date of birth:</label>
            <input type="text" id="phone" placeholder='   DD.MM.YY'
              value={dob} onChange={(e) => setDob(e.target.value)}
              className="border border-gray-300 w-full h-[40px] rounded-lg" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="role" className="font-bold">Role:</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}
              className="border border-gray-300 w-full h-[40px] rounded-lg">
              <option value="driver">Driver</option>
              <option value="waiter">Waiter</option>
              <option value="cooker">Cook</option>
            </select>
          </div>

          <div className="flex gap-2 items-center  ">
            <input type="checkbox" onChange={(e) => setStatus(e.target.checked)} />
            <label className="font-bold" >Status</label>
          </div>

          <div className="flex items-center justify-end  mt-5 gap-3">
            <button type="button" className=" text-blue-600 border rounded-lg px-6 py-1" onClick={()=>navigate("/")}>Cancel</button>
            <button type="submit" className="bg-blue-600 text-white hover:bg-blue-700 rounded-lg px-6 py-1">Save</button>
          </div>

        </div>
      </form>
    </div>
  )
}

export default AddUser