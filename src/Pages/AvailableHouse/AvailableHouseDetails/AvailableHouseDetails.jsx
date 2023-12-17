import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

import person from "../../../assets/images/team2.webp"
import AvailableHouseDetailsCard from "./AvailableHouseDetailsCard";

const AvailableHouseDetails = () => {
    const { id } = useParams()

    const axiosPublic = useAxiosPublic()
    const { data, refetch, isLoading } = useQuery({
        queryKey: ['houses', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/allhouse/${id}`)
            return res.data;
        }
    })

    console.log(data)

    return (
        <div className="mx-[2%] lg:mx-[10%] mt-8 md:mt-20 mb-20">
            <h1 className="text-[#141B2D] text-2xl lg:text-[3.2rem] font-semibold merrin">{data?.housename}</h1>


            <div className="flex justify-between gap-8 flex-col lg:flex-row">
                <AvailableHouseDetailsCard data={data} />

                <div className="mt-[2.5rem]">
                    <div className="w-[22rem] flex flex-col justify-center items-center h-[20rem] rounded-md bg-[#F3F3FA]">
                        <h1 className="text-[#091638] text-center merrin text-[1rem] font-semibold">Owner Info</h1>
                        {
                            data?.ownerimage ? <img className="w-[8.6rem] mt-3 h-[8.2rem] rounded-[50%]" src={data.ownerimage} alt="" />
                            :
                            <img className="w-[8.6rem] mt-3 h-[8.2rem] rounded-[50%]" src={person} alt="" />
                        }
                        <h1 className="text-[#091638] mt-3 text-center merrin text-[1.3rem] font-semibold">{data?.ownername}</h1>
                        <p className="sans text-[#141B2D] text-center">{data?.owneremail}</p>
                        <p className="sans text-[#141B2D] text-center">{data?.contactnumber}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableHouseDetails;