import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddNewHouse = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { user } = useContext(AuthContext);
    console.log(user)
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const { mutate } = useMutation({
        mutationKey: ['houses'],
        mutationFn: (addingData) => {
            return axios.post('http://localhost:5000/addhouse', addingData, { withCredentials: true, })
        },
        onSuccess: () => {
            Swal.fire({
                title: "Successfully Added House",
                text: "User Can see your house in the Available House Page",
                icon: "success",
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "OK"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/allhouse')
                }
            });
        }

    })

    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-Type': 'multipart/form-data'
            }
        })
        if (res.data.success) {

            mutate({
                ownername: data.ownername,
                contactnumber: data.number,
                housename: data.housename,
                location: data.location,
                roomsno: data.roomsno,
                price: data.price,
                image: res.data.data.display_url,
                status: 'available',
                bookingcount: 0
            })
        }


    }
    return (
        <div className=" mt-20">
            <div className="w-[90vw] lg:w-[70vw] mx-auto">
                <h1 className="text-black text-center text-[2.5rem] font-semibold">Add House For Rent</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* owner input  */}
                    <p className="text-[#444] mt-5 text-xl font-semibold">Your name</p>

                    <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="text" name="ownername" id="" placeholder="Enter Owner name" {...register("ownername", { required: true })} defaultValue={user?.displayName} />
                    {errors.ownername && <span>This field is required</span>}

                    {/* Contact number input  */}
                    <p className="text-[#444] mt-5 text-xl font-semibold">Contact Number</p>

                    <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="number" name="number" id="" placeholder="Your Contact Number" {...register("number", { required: true })} />


                    {/* House name input  */}
                    <p className="text-[#444] mt-5 text-xl font-semibold">Enter House Title</p>

                    <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="text" name="housename" id="" placeholder="House Title" {...register("housename", { required: true })} />

                    {/* Location input  */}
                    <p className="text-[#444] mt-5 text-xl font-semibold">Location</p>

                    <select className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" {...register("location", { required: true })}>
                        <option value="">Select Your Area</option>
                        <option value="Mirpur10">Mirpur 10</option>
                        <option value="Gulshan">Gulshan</option>
                        <option value="Uttara">Uttara</option>
                        <option value="Dhanmondi">Dhanmondi</option>
                        <option value="Mohammadpur">Mohammadpur</option>
                        <option value="Banani">Banani</option>
                        <option value="Baridhara">Baridhara</option>
                        <option value="Bashundhara">Bashundhara</option>
                        <option value="Khilgaon">Khilgaon</option>
                        <option value="Malibagh">Malibagh</option>
                        <option value="Motijheel">Motijheel</option>
                        <option value="Niketon">Niketon</option>
                        <option value="Puran Dhaka">Puran Dhaka</option>
                        <option value="Shahbag">Shahbag</option>
                        <option value="Tejgaon">Tejgaon</option>
                        <option value="Farmgate">Farmgate</option>
                        <option value="Lalmatia">Lalmatia</option>
                        <option value="Banani DOHS">Banani DOHS</option>
                        <option value="Cantonment">Cantonment</option>
                        <option value="Elephant Road">Elephant Road</option>
                        <option value="Gulistan">Gulistan</option>
                        <option value="Jatrabari">Jatrabari</option>
                        <option value="Mirpur">Mirpur</option>
                        <option value="Kakrail">Kakrail</option>
                        <option value="New Market">New Market</option>
                        <option value="Pallabi">Pallabi</option>
                        <option value="Ramna">Ramna</option>
                    </select>

                    {/* House room number input  */}
                    <p className="text-[#444] mt-5 text-xl font-semibold">How many Rooms</p>

                    <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="number" name="roomsno" id="" placeholder="Enter room count" {...register("roomsno", { required: true })} />


                    {/* House price input  */}
                    <p className="text-[#444] mt-5 text-xl font-semibold">Enter Rent Price</p>

                    <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="number" name="price" id="" placeholder="House Name" {...register("price", { required: true })} />


                    {/* Description input  */}

                    <p className="text-[#444] mt-5 text-xl font-semibold">Description</p>

                    <input className="w-full mt-2 h-[6.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="text" name="description" id="" placeholder="Enter full Description" {...register("description", { required: true })} />
                    {errors.description && <span>This field is required</span>}

                    {/* Image input  */}

                    <p className="text-[#444] mt-5 text-xl font-semibold">Image</p>

                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered file-input-warning w-full max-w-xs mt-5" />
                    {errors.image && <span>This field is required</span>}

                    <input className="w-full mt-5 h-[3.5rem] btn btn-neutral border-none bg-[#1C3988] text-white text-xl font-bold" type="submit" id="" value="Add Class" />






                </form>


            </div>


        </div>
    );
};

export default AddNewHouse;