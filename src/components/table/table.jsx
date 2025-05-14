/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { filterByName, filterByRole, filterByStatus, getWorkers, removeWorkers, updateWorker } from '../../api/workersApi'
import { Eye, Search, SquarePen, Trash } from 'lucide-react'

const Table = () => {
    const [search, setSearch] = useState("")
    const [roles,setRoles] = useState("")
    const [status,setStatus] = useState("")
    const { data } = useSelector((store) => store.workersSlice)
    const dispatch = useDispatch()
    
    const checkWorker = (worker) => {
        const newWorker = {
            ...worker,
            isArchive: !worker.isArchive
        }
        dispatch(updateWorker(newWorker))
    }

    useEffect(() => {
        dispatch(getWorkers())
    }, [dispatch])

       useEffect(() => {
        dispatch(filterByName(search))
        
    }, [search])

    useEffect(() => {
        dispatch(filterByRole(roles))
        
    }, [roles])

    useEffect(() => {
        dispatch(filterByStatus(status))
        
    }, [status])
    return (
        <div className='max-w-[1200px] m-auto '>
            <div className='flex justify-between p-5 px-5'>
                <h1 className='text-[22px] font-bold'>Table Workers</h1>
                <Link to={"/addUser"}><button className='border-gray-500 text-[14px] border p-1 w-[100px] rounded text-black hover:bg-gray-100'>Add New</button></Link>
            </div>

            {/* filters */}


            <div className='grid grid-cols-1 md:grid-cols-3 items-center mx-3 gap-10 '>

                    <select 
                    value={roles} onChange={(e)=>setRoles(e.target.value)}
                    className='border border-gray-300 rounded w-[90%] h-[40px]'>
                        <option value="">All Jobs</option>
                        <option value="cook">Cook</option>
                        <option value="waiter">Waiter</option>
                        <option value="driver">Driver</option>
                    </select>
                
                    <select 
                    value={status} onChange={(e)=>setStatus(e.target.value)}
                    className='border border-gray-300 rounded w-[90%] h-[40px]'>
                        <option value="">All Statuses</option>
                        <option value="true">Archived</option>
                        <option value="false">Not Archived</option>
                    </select>

                <div className=' p-1  flex items-center  gap-3 w-[90%]'>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className=' border border-gray-300 rounded w-[100%] focus:none h-[40px]  ' placeholder='  Search by name' />
                </div>
            </div>

           <div className='w-full overflow-x-auto'>
             <table className=' border-collapse rounded text-center my-10 w-[85%] m-auto  '>
                <thead className='bg-gray-200 '>
                    <tr>
                        <th className='p-1 text-gray-600'></th>
                        <th className='p-1 text-gray-600'>Name</th>
                        <th className='p-1 text-gray-600'>Role</th>
                        <th className='p-1 text-gray-600'>Number Phone</th>
                        <th className='p-1 text-gray-600'>Status</th>
                        <th className='p-1 text-gray-600'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       data &&data.map((worker) => {
                            return (
                                <tr key={worker.id} className='hover:bg-gray-50 rounded border-b-[0.5px] border-gray-200'>
                                    <td className='p-4'><input type="checkbox" checked={worker.isArchive} onClick={() => checkWorker(worker)} /></td>
                                    <td className='p-4'>{worker.name}</td>
                                    <td className='p-4'>{worker.role}</td>
                                    <td className='p-4'>{worker.phone}</td>
                                    <td className='p-4'><span style={{backgroundColor:worker.isArchive?"green":"#748898",color:"white",padding:"5px 10px",borderRadius:"4px"}}>{worker.isArchive ? "Archived" : "Not Archived"}</span></td>
                                    <td className='p-4 flex gap-3 items-center'>
                                        <button onClick={() => dispatch(removeWorkers(worker.id))} className='cursor-pointer'><Trash size={20} /></button>
                                        <Link to={`/updateUser/${worker.id}`}><SquarePen size={20} /></Link>
                                        <Link to={`/getUserById/${worker.id}`}><Eye /></Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
           </div>
        </div>
    )
}

export default Table