import { useEffect, useState } from "react"

import { useFirst } from "../../Context/FIrstContext";
import UpdateUser from "./UpdateUser";

const AccountManagement = () => {
    const { alluser, deleteUser } = useFirst()
    const [showDelete, setShowDelete] = useState(false)
    const [showUpdate, setShowUpdate] = useState(false)
    const [updateData, setUpdateData] = useState()
    useEffect(() => {
        console.log(alluser)
    }, [])
    if (!alluser) return null
    return (
        <>
            <div>
                <span>All users data</span>
                <section>
                    {
                        alluser && alluser.map((data, index) => (
                            <>
                                <div className="flex gap-3 items-center">
                                    <span>{index}</span>
                                    <div className="flex flex-col gap-1">
                                        <span className="font-bold text-lg">{data.email}</span>
                                        <span className="">{data.username}</span>
                                    </div>
                                    <button className="text-white bg-red-400 rounded-lg px-5 py-3 cursor-pointer"
                                        onClick={() => {
                                            setShowDelete(true)
                                        }}>
                                        Delete
                                    </button>

                                    <button className="" onClick={() => {
                                        setUpdateData(data)
                                        setShowUpdate(true)

                                    }}>Update</button>
                                    {
                                        showDelete == true &&
                                        (
                                            <div className="fixed inset-0 z-[9999] bg-black/30 w-full h-full">
                                                <div className="absolute left-[30%] top-[30%] flex flex-col bg-white gap-5 w-[45%] p-6">
                                                    <span>are you sure you want to delete the data of user {data.email}?</span>
                                                    <div className="flex justify-between w-full">
                                                        <button className="text-white p-2 shadow-md bg-red-300"
                                                            onClick={() => {
                                                                deleteUser(data._id)
                                                                setShowDelete(false)
                                                            }

                                                            }>
                                                            Delete
                                                        </button>
                                                        <button
                                                            onClick={() => setShowDelete(false)}
                                                            className="p-2 shadow-md">cancel</button>
                                                    </div>
                                                </div>

                                            </div>
                                        )
                                    }
                                </div>

                            </>
                        ))
                    }
                </section>
            </div>


            {
                showUpdate &&
                <UpdateUser data={updateData} hideFunction={() => setShowUpdate(false)} />
            }

        </>
    )
}
export default AccountManagement;
