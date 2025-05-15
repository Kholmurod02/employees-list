/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { filterByName, filterByRole, filterByStatus, getWorkers, removeWorkers, sortByName, updateWorker } from '../../api/workersApi'
import { AArrowDown, Eye, Search, SquarePen, Trash } from 'lucide-react'

const Table = () => {
    const [search, setSearch] = useState("")
    const [roles, setRoles] = useState("")
    const [status, setStatus] = useState("")
    const [sort,setSort] = useState(false)


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

    useEffect(() => {
        if(sort){
            dispatch(sortByName(sort))
        }else{
               dispatch(getWorkers())
        }

    }, [sort])
    return (
        <div className='max-w-[1200px] m-auto font-mono'>
            <div className='flex justify-between p-5 px-5'>
                <h1 className='text-[22px] font-bold'>Table Workers</h1>
                <Link to={"/addUser"}><button className='bg-blue-600 text-white hover:bg-blue-700 rounded-xl px-4 py-2'>Add New</button></Link>
            </div>

            {/* filters */}


            <div className='grid grid-cols-1 md:grid-cols-3 items-center mx-3 gap-10 '>

                <select
                    value={roles} onChange={(e) => setRoles(e.target.value)}
                    className='border border-gray-300 rounded-lg w-[90%] h-[40px]'>
                    <option value="">All Jobs</option>
                    <option value="cook">Cook</option>
                    <option value="waiter">Waiter</option>
                    <option value="driver">Driver</option>
                </select>

                <select
                    value={status} onChange={(e) => setStatus(e.target.value)}
                    className='border border-gray-300 rounded-lg w-[90%] h-[40px]'>
                    <option value="">All Statuses</option>
                    <option value="true">Archived</option>
                    <option value="false">Not Archived</option>
                </select>

                <div className=' p-1  flex items-center  gap-3 w-[90%]'>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className=' border border-gray-300 rounded-lg w-[100%] focus:none h-[40px]  ' placeholder='  Search by name' />
                </div>
            </div>

            <div className='min-w-full overflow-x-auto lg:w-auto'>
                <table className=' border-collapse text-center my-10 md:w-[95%] min-w-full bg-gray-50 rounded-lg m-auto  text-gray-900 '>
                    <thead>
                        <tr className='border-b border-gray-200'>
                            <th className='px-4 py-3 text-gray-600'>
                                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600" /></th>
                            <th onClick={()=>{setSort((prev)=>!prev)}} className='px-4 py-3 text-gray-600 text-start flex gap-1 items-center'>Name <span><AArrowDown/></span></th>
                            <th className='px-4 py-3 text-gray-600'>Role</th>
                            <th className='px-4 py-3 text-gray-600'>Phone</th>
                            <th className='px-4 py-3 text-gray-600'>Status</th>
                            <th className='px-4 py-3 text-gray-600'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.map((worker) => {
                                return (
                                    <tr key={worker.id} className='hover:bg-gray-50 rounded border-b-[0.5px] border-gray-200'>
                                        <td className='px-4 py-2'>
                                            <input type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-blue-600"
                                                checked={worker.isArchive} onClick={() => checkWorker(worker)} />
                                        </td>
                                        <td className='px-4 py-2pl-5 text-blue-600 font-[500] text-start'>{worker.name}</td>
                                        <td className='px-4 py-2'>{worker.role}</td>
                                        <td className='px-4 py-2'>{worker.phone}</td>
                                        <td className="px-4 py-2">
                                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${worker.isArchive == true
                                                    ? 'bg-gray-600 text-white'
                                                    : 'bg-green-200 text-green-800'
                                                }`}>
                                                {worker.isArchive?'Archived':"Not-Archived"}
                                            </span>
                                        </td>
                                        <td className='p-4 flex gap-3 items-center justify-center'>
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