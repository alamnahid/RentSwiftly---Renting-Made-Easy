import { useEffect } from "react";
import searchicon from "../../assets/icons/search icon.svg"

import AvailableHouseCard from "./AvailableHouseCard";
import { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
const AvailableHouse = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [search, setSearch] = useState('')
    const axiosPublic = useAxiosPublic()
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [count, setCount] = useState(0)

    const handleSearch = (e) => {
        e.preventDefault();
        const search = e.target.search.value;
        setSearch(search)
    }
    const { data: house = [], refetch } = useQuery({
        queryKey: ['house', search, currentPage, itemsPerPage],
        queryFn: async () => {
            const res = await axiosPublic.get(`/allhouse?search=${search.toString()}&page=${currentPage}&size=${itemsPerPage}`)
            return res.data;
        }
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosPublic.get('/admin-stats');
                setCount(res.data.house);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);


    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pages = []
    for (let i = 0; i < numberOfPages; i++) {
        pages.push(i)
    }
    const handleItemsPerPage = e => {
        const val = parseInt(e.target.value);
        console.log(val);
        setItemsPerPage(val);
        setCurrentPage(0);
    }

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
        refetch()
    }

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
        refetch()
    }


    return (
        <div className=" mt-8">

            <div className="bg-[#F3F3FA] py-8  rounded-md">
                {/* <p>{house.length}</p> */}

                <h1 className="merrin text-center text-[3rem] font-semibold text-[#141B2D]">Discover Your Dream Home</h1>
                <p className="text-center text-[#141B2D] text-[1.2rem] sans mt-3 w-[50vw] mx-auto">Explore our curated selection of available homes for rent and effortlessly find your perfect match by searching with ease based on your preferred location.</p>


                <form onSubmit={handleSearch}>
                    <div className="">
                        <div className="md:w-[33rem] mx-auto mt-8 h-[3.5rem] relative flex justify-center items-center">
                            <input type="text" name="search" placeholder="Search Here" className="md:w-[19rem] border-none outline-none h-[3.5rem] text-lg pl-4 bg-white shadow-sm rounded-sm" />

                            <button type="submit" className="btn border-none bg-[#1C3988] lg:w-[9.4rem] h-[3.5rem] text-base text-white ml-2 btn-neutral"><img src={searchicon} alt="" /> Search</button>
                        </div>
                    </div>
                </form>

            </div>


            <div className="mx-[10%] mt-20 grid grid-cols-3 justify-items-center items-center gap-8">
                {
                    house?.map(home=><AvailableHouseCard key={home?._id} home={home} />)
                }
                
            </div>

            <div className='text-center mb-10 space-x-4 md:space-x-6 mt-20'>
              
              <button className="btn  btn-outline border-[#1C3988] border-4 md:w-[7rem] md:text-lg" onClick={handlePrevPage}>Prev</button>
              {
                  pages.map(page => <button
                      className={currentPage === page ? 'btn bg-[#1C3988] text-xl font-bold text-white' : 'btn btn-outline border-[#1C3988] border-4 text-xl'}
                      onClick={() => setCurrentPage(page)}
                      key={page}
                  >{page}</button>)
              }
              <button className="btn btn-outline border-[#1C3988] border-4 md:w-[7rem] md:text-lg" onClick={handleNextPage}>Next</button>
              <select className="btn bg-[#1C3988] text-xl text-white" value={itemsPerPage} onChange={handleItemsPerPage} name="" id="">
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
              </select>
          </div>



        </div>
    );
};

export default AvailableHouse;