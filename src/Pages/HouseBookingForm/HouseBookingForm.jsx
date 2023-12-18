import { useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";


const HouseBookingForm = () => {
    const { id } = useParams()
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const axiosPublic = useAxiosPublic()
    const { data, refetch, isLoading } = useQuery({
        queryKey: ['houses', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/allhouse/${id}`)
            return res.data;
        }
    })


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { mutate } = useMutation({
        mutationKey: ['houses'],
        mutationFn: (addingData) => {
            return axios.post('http://localhost:5000/addhouse', addingData, { withCredentials: true, })
        },
        onSuccess: () => {
            Swal.fire({
                title: "Booking Request Sent Successfully",
                text: "Owner Can contact with you soon",
                icon: "success",
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "OK"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/')
                }
            });
        }

    })

    const onSubmit = async (data) => {
        console.log(data)
        mutate({
            houseId: id,
            bookingusername: data.name,
            contactnumber: data.number,
            occupation: data.occupation,
            maritalstatus: data.maritalstatus,
            familymembers: data.familymembers,
            pets: data.pets,
            vehicle: data.vehicle,
            address: data.address,
            bookingemail: user.email
        })


    }






    console.log(data)
    return (
        <div className="mt-20 mx-[10%] my-10">
            <h1 className="text-[#141B2D] text-2xl lg:text-[3.2rem] font-semibold merrin">{data?.housename}</h1>
            <h1 className="text-[#141B2D] text-2xl lg:text-[1.2rem] font-semibold merrin mt-12">Fill Up the Form for Booking the Apartment</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* owner input  */}
                <p className="text-[#444] mt-5 text-xl font-semibold">Your name</p>

                <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="text" name="name" id="" placeholder="Enter Your name" {...register("ownername", { required: true })} defaultValue={user?.displayName} />
                {errors.ownername && <span>This field is required</span>}

                {/* Contact number input  */}
                <p className="text-[#444] mt-5 text-xl font-semibold">Contact Number</p>

                <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="number" name="number" id="" placeholder="Your Contact Number" {...register("number", { required: true })} />

                <p className="text-[#444] mt-5 text-xl font-semibold">Occupation</p>

                <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="text" name="occupation" id="" placeholder="Your occupation" {...register("occupation", { required: true })} />

                <p className="text-[#444] mt-5 text-xl font-semibold">Marrital Status</p>

                <select className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" {...register("maritalstatus", { required: true })}>
                    <option value="">Select Your Area</option>
                    <option value="Married">Married</option>
                    <option value="Un Married">UnMarried</option>

                </select>

                <p className="text-[#444] mt-5 text-xl font-semibold">Family Members</p>

                <select className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" {...register("familymembers", { required: true })}>
                    <option value="">Select Your Area</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>

                </select>


                <p className="text-[#444] mt-5 text-xl font-semibold">You have pets?</p>

                <select className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" {...register("pets", { required: true })}>
                    <option value="">Select Your Area</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>


                </select>

                <p className="text-[#444] mt-5 text-xl font-semibold">Do you have vehicle?</p>

                <select className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" {...register("vehicle", { required: true })}>
                    <option value="">Select Your Area</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>


                </select>

                <p className="text-[#444] mt-5 text-xl font-semibold">Permanent Address</p>

                <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="text" name="address" id="" placeholder="Your Permanent Address" {...register("address", { required: true })} />




                <input className="w-full mt-5 h-[3.5rem] btn btn-neutral border-none bg-[#1C3988] text-white text-xl font-bold" type="submit" id="" value="Confirm Booking" />






            </form>
        </div>
    );
};

export default HouseBookingForm;