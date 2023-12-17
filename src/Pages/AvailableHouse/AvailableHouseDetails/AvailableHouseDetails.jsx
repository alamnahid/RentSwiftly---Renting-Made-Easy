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
        <div className="mx-[10%] mt-20 mb-20">
            <h1 className="text-[#141B2D] text-[3.2rem] font-semibold merrin">Premium penthouse in central Barcelona with panoramic views</h1>


            <div className="flex justify-between gap-8">
                <AvailableHouseDetailsCard />

                <div className="mt-[2.5rem]">
                    <div className="w-[22rem] flex flex-col justify-center items-center h-[20rem] rounded-md bg-[#F3F3FA]">
                        <h1 className="text-[#091638] text-center merrin text-[1rem] font-semibold">Owner Info</h1>
                        <img className="w-[8.6rem] mt-3 h-[8.2rem] rounded-[50%]" src={person} alt="" />
                        <h1 className="text-[#091638] mt-3 text-center merrin text-[1.3rem] font-semibold">Nahid Alam</h1>
                        <p className="sans text-[#141B2D] text-center">nahid@gmail.com</p>
                        <p className="sans text-[#141B2D] text-center">0334343434</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableHouseDetails;