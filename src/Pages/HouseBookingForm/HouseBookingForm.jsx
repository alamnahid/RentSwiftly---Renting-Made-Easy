import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const HouseBookingForm = () => {
    const {id} = useParams()
    console.log(id)

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
        <div>
            
        </div>
    );
};

export default HouseBookingForm;