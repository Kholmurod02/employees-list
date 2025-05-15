import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getWorkersById } from "../../api/workersApi"
import { useNavigate, useParams } from "react-router-dom"
import { ArrowLeft } from "lucide-react"


const GetById = () => {
  const {id} = useParams()

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [dob, setDob] = useState("")
  const [role, setRole] = useState("")
  const [status, setStatus] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
 

  const {dataById} = useSelector((store)=>store.workersSlice)

      useEffect(() => {
      dispatch(getWorkersById(id))
  }, [id])

  useEffect(()=>{
    if(dataById){
      setName(dataById?.name)
      setPhone(dataById?.phone)
      setRole(dataById?.role)
      setDob(dataById?.birthday)
      setStatus(dataById?.isArchive?"Archived":"Not Archived")

    }
  },[dataById])


  return (
    <div className="max-w-[1200px] m-auto font-mono">
      <form className="w-[90%] sm:w-[50%] md:[90%] m-auto mt-14 md:mt-4 border border-gray-100 rounded-lg">
       <div className="px-3 pt-3 flex gap-3">
        <button onClick={()=>navigate("/")}><ArrowLeft/></button>
        <h1 className="font-bold">Back To Table</h1>
       </div>
         <div className="  flex flex-col gap-3  shadow-xl rounded-[5px] p-10  justify-center">

          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-bold ">Name:</label>
            <input type="text" id="name" placeholder='  Enter your name'
              value={name} disabled
              className="border border-gray-300 w-full h-[40px] rounded-lg" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="font-bold ">Phone:</label>
            <input type="text" id="phone" placeholder='  +7 (883) 508-3269'
              value={phone}  disabled
              className="border border-gray-300 w-full h-[40px] rounded-lg" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="font-bold">Date of birth:</label>
            <input type="text" id="phone" placeholder='   DD.MM.YY'
              value={dob}  disabled
              className="border border-gray-300 w-full h-[40px] rounded-lg" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="role" className="font-bold">Role:</label>
            <input type="text" disabled value={role} 
              className="border border-gray-300 w-full h-[40px] rounded-lg" />
          </div>

          <div className="flex flex-col gap-1 ">
            <label className="font-bold" >Status:</label>
            <input type="text" value={status} disabled
            className="border border-gray-300 w-full h-[40px] rounded-lg" /> 
          </div>

        </div>
      </form>
    </div>
  )
}

export default GetById