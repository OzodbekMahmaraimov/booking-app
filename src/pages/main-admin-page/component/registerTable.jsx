import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { apiUrl } from '../../../Api'

const RegisterTable = () => {
    const [columns, setColumns] = useState([])
    const [records, setRecords] = useState([])
    useEffect(() => {
        app()
    })
    const app = () => {
        axios.get(`${apiUrl}admin`)
            .then(res => {
                // console.log(res.data.mainadmin.category.managers);
                // setColumns(Object.keys(res.data.mainadmin.category.managers.coffeShopManagers[0]))
                // setRecords(res.data.mainadmin.category.managers)
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="flex  flex-col ml-[7.5rem] ">
            <div className="overflow-x-auto  sm:-mx-6 lg:-mx-8">
                <div className="py-2 sm:px-6 lg:px-8 ">
                    <div className="overflow-hidden">
                        <table
                            className="min-w-[90%]  border-[2px] border-[#F46A06] rounded text-center text-sm font-light">
                            <thead
                                className="border-b border-neutral-200 font-medium ">
                                <tr>
                                    {/* {
                                        columns.map((index, i) => {
                                            <th
                                                scope="col"
                                                className="border-e border-neutral-200 px-6 py-4 text-start ">
                                                {index[0].fistname}
                                            </th>
                                        })
                                    } */}

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td
                                        className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium text-start ">
                                        1
                                    </td>
                                    <td
                                        className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 text-start ">
                                        Mark
                                    </td>
                                    <td
                                        className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 text-start ">
                                        Otto
                                    </td>
                                    <td className="whitespace-nowrap px-2 py-4 text-start">Hotel Des milles collines
                                        <a href="#" className='px-4 py-2 rounded-lg text-white ml-4 mr-4 bg-[#F46A06]'>Edit</a>
                                        <a href="#" className='px-4 py-2 rounded-lg text-white bg-[#F46A06]'>Delete</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterTable
