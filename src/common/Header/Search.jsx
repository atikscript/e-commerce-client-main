import React from 'react'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'
import useBookings from '../../Hooks/useBookings'
const Search = () => {
  const {CartItem , user}=useAuth()
  const [bookings]= useBookings()
  return (
    <div>
        <section className='search'>
        <div className='container mx-auto flex justify-center  items-center'>
          <div className='logo w-1/4 '>
          <Link to='/'>
          <img src={logo} alt='' />
          </Link>
          </div>

          <div className='flex justify-between  items-center w-2/4 text-gray-500 border-2 px-4 rounded-full'>
           <div>
           <i className='fa fa-search'></i>
            <input className=' outline-none   p-4  ' type='text' placeholder='Search and hit enter... ' />
           </div>
            <span className=''>All Category</span>
            
          </div>

          <div className='  flex items-center  justify-end width  w-1/4 gap-3'>
          <img className='w-12 h-12 rounded-full' src={ user ? user.photoURL : "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" } />
            {/* <i className='fa fa-user icon-circle p-5  bg-[#F3F5F9]  rounded-full  '> </i> */}
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle  bg-[#F3F5F9] p-5 rounded-full'></i>
                {/* <span>{  CartItem.length}</span> */}
                <span>{ bookings.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Search