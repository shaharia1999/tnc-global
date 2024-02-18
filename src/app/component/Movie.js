"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
const Movie = () => {
  const [data, setData] = useState(null);
  const [filterdata,setFilerdata]=useState(null)
  const [list,setList]=useState('now_playing')
  const [page,setPage]=useState(1)
  const [search, setSearch] = useState('')
  useEffect(() => {
    ApiContorl(list)
  }, []); 
const ApiContorl=(item)=>{
    setFilerdata(null)
        setList(item)
        axios.get(`https://api.themoviedb.org/3/movie/${item}`,{
            params: {
              language: 'en-US',
              page: page
            },
            headers: {
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmFjODY5ZGYwZjBhMDcxMDA1ZjM3NGMwYTYwNDVlNCIsInN1YiI6IjY1ZDBhMTFmN2I3YjRkMDEzMTU2ODcyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LeAwWFdx_f6rJFbU57fO-L_89EwG_8tRPXEQsxzWuXA',
              'Accept': 'application/json'
            }
          })
        .then((res) =>{
            setData(res.data.results)
            setFilerdata(res.data.results)
        } )
        .catch((err) => console.log(err))
  }

//   Data Search
  const Search = (e) => {
    console.log(e);
    setSearch(e)
    const FilterData = data?.filter((data) => {
      const title = (data.title).toLowerCase();
      const searchTerm = search.toLowerCase();
      return title.includes(searchTerm);
    });
    setFilerdata(FilterData)
  }


// Pagination
let array = Array.from({ length: 10 }, (_, index) => index + 1);
const Pagination=(page)=>{
    setFilerdata(null)
    setPage(page)
    axios.get(`https://api.themoviedb.org/3/movie/${list}`,{
        params: {
          language: 'en-US',
          page: page
        },
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmFjODY5ZGYwZjBhMDcxMDA1ZjM3NGMwYTYwNDVlNCIsInN1YiI6IjY1ZDBhMTFmN2I3YjRkMDEzMTU2ODcyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LeAwWFdx_f6rJFbU57fO-L_89EwG_8tRPXEQsxzWuXA',
          'Accept': 'application/json'
        }
      })
    .then((res) =>{
        setData(res.data.results)
        setFilerdata(res.data.results)
    } )
    .catch((err) => console.log(err))
}


  return (
    <div className=" relative">
      <div className="md:flex justify-between mt-4 mb-2 sticky top-0 bg-black py-4 z-30 lg:px-20 md:px-10 px-5">
        <div className="flex py-2 gap-x-4">
        <label for="cars" className="text-white text-2xl font-semibold cursor-pointer">
        MOVIE LISTS
        </label>

        <select name="cars" id="cars" className="w-48 py-1 px-4" onChange={(e)=>ApiContorl(e.target.value)}>
          <option value="now_playing">Now Playing</option>
          <option value="top_rated">Top Rated</option>
          <option value="popular">Popular</option>
          <option value="upcoming">Upcoming</option>
      
        </select>
        </div>
        <div className='md:flex md:justify-center items-center mt-2 md:mt-0'>
          <input type="text"
            className='px-3 py-2 outline-none '
            placeholder="Search"
            value={search}
            onChange={(e) => Search(e.target.value)} />
            </div>
      </div>
     <div className={`relative ${!filterdata?'h-[80vh] overflow-hidden':'h-auto  '}`}>
     <div className={`${!filterdata?'absolute h-[100vh] w-[100%] bg-[#2727277c] top-0 left-0  z-10':'hidden'} `}>
     <div className={`${!filterdata?'flex':'hidden'} justify-center items-center h-full`}>
       <h1 className={`${!filterdata?'relative text-white text-3xl font-bold':'hidden'}`}>Loading ...</h1>
     </div>
    </div>
    {
        filterdata &&
     filterdata.length===0&&
     <div className={`h-[60vh] w-[100%]  top-0 left-0  z-10' } `}>
     <div className={`flex justify-center items-center h-full`}>
       <h1 className={`relative text-white text-3xl font-bold'}`}>No Result Found...</h1>
     </div>
    </div>
    }
    
      <div className="grid lg:grid-cols-4 md:grid-cols-2  gap-3 lg:px-20 md:px-10 px-5 ">
        {filterdata &&
          filterdata.map((item, index) => {
            return (
              <div
                className="bg-[#323131] relative  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                key={index}
              >
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                    // src='https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight  text-[#DB1C39]">
                      {item.title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-white pb-10">
                    {item.overview}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#DB1C39] absolute bottom-4 left-4  "
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
      </div>
      </div>
      <div className="flex justify-center gap-2 mx-auto container mt-3 text-[10px] md:text-[14px] ">
        <p className="md:p-4 p-2 bg-red-500 text-white cursor-pointer rounded-md" onClick={()=> page>1 && Pagination(page-1)}>prev</p>
        {
            array.map((x,index)=>{
                return(
                     <p key={index} className={`md:p-4 p-2 ${x===page?'bg-red-200':'bg-red-500'} text-white cursor-pointer md:rounded-md`} onClick={()=>Pagination(x)} >{x}</p>
                )
            })
        }
        <p className="md:p-4 p-2 bg-red-500 text-white cursor-pointer rounded-md" onClick={()=>page<10?Pagination(page+1):Pagination(1)}>next</p>
      </div>
    </div>
  );
};

export default Movie;
