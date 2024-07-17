import React from 'react'
import useAuth from './useAuth'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useBookings = () => {
    const {user}= useAuth()
 

    const { data :bookings=[] , refetch } =  useQuery({
        queryKey:['booking', user?.email ],
        queryFn: async ()=>{
         const res = await axios.get(`https://bonik-e-commerce-backend.vercel.app/add-cart?email=${user.email}`)
         return res.data
        }
    })
    

    return [bookings ,refetch]


    // console.log(bookings);
}

export default useBookings