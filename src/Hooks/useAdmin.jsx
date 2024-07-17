import React from 'react'
import useAuth from './useAuth'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useAdmin = () => {
  const {user}= useAuth()

  const {data:isAdmin , isPending:isAdminLoading}= useQuery({
    queryKey :[user?.email , 'isAdmin'],
    queryFn : async ()=>{
        const res = await axios.get(`https://bonik-e-commerce-backend.vercel.app/admin/${user.email}`)
        console.log(res.data);
        return res.data?.admin
    }
  })
  return [isAdmin ,isAdminLoading]
}

export default useAdmin