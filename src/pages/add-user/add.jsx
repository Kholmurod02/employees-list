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
    <div className="max-w-[1200px] m-auto">
      <form onSubmit={handleSubmit} className="w-[90%] sm:w-[50%] md:[90%] m-auto mt-20 border border-gray-100 rounded">
        <div className="px-3 pt-3 flex gap-3">
        <button onClick={()=>navigate("/")}><ArrowLeft/></button>
        <h1 className="font-bold">Back To Table</h1>
       </div>
        <div className=" flex flex-col gap-3  shadow-xl rounded-[5px] p-5 h-[450px]">

          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-bold ">Name:</label>
            <input type="text" id="name" placeholder='  Enter your name'
              value={name} onChange={(e) => setName(e.target.value)}
              className="border border-gray-500 w-[90%] h-[30px] rounded" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="font-bold ">Phone:</label>
            <input type="text" id="phone" placeholder='  +7 (883) 508-3269'
              value={phone} onChange={(e) => setPhone(e.target.value)}
              className="border border-gray-500 w-[90%] h-[30px] p-1 rounded" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="font-bold">Date of birth:</label>
            <input type="text" id="phone" placeholder='   DD.MM.YY'
              value={dob} onChange={(e) => setDob(e.target.value)}
              className="border border-gray-500 w-[90%] h-[30px] rounded" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="role" className="font-bold">Role:</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}
              className="border border-gray-500 w-[90%] h-[30px] rounded">
              <option value="driver">Driver</option>
              <option value="waiter">Waiter</option>
              <option value="cooker">Cook</option>
            </select>
          </div>

          <div className="flex gap-1 items-center ">
            <label className="font-bold" >Status:</label>
            <input type="checkbox" onChange={(e) => setStatus(e.target.checked)} />
          </div>

          <div className="flex items-center justify-end w-[90%] mt-5 gap-1">
            <button type="button" className=" border w-[90px] p-0.5 rounded hover:bg-gray-100" onClick={()=>navigate("/")}>Cancel</button>
            <button type="submit" className="bg-black text-white w-[90px] p-0.5 rounded">Save</button>
          </div>

        </div>
      </form>
    </div>
  )
}

export default AddUser