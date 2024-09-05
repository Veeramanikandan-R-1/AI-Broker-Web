import React, { useContext, useEffect } from 'react'
import LeftMenu from './leftMenu'
import { Outlet, useNavigate } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { FaRegBell } from "react-icons/fa6";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { getMarketsData } from '../commonUtils';
import { AppContext } from '../appContext';
import { HiOutlineMail } from "react-icons/hi";

const HomePage = () => {
    const navigate = useNavigate();
    const { data, setData } = useContext(AppContext);
    const getData = async () => {
        try {
            setData({ ...data, isLoading: true });
            const response = await getMarketsData();
            setData({ ...response, isLoading: false })
        } catch (error) {
            setData({ ...data, isLoading: false })
        }
    }
    useEffect(() => {
        navigate('/markets');
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className='main-container'>
            <div className='left-menu'>
                <LeftMenu userData={data.userData} />
            </div>
            <div className='icon-groups'>
                <IoIosSearch className='search' />
                <HiOutlineMail className='email' />
                <FaRegBell />
                <div className='language'>EN/USD </div>
                <IoMoonOutline className='moon' />
                <MdOutlineWbSunny className='dark-theme' />
                <IoLogOutOutline />
            </div>
            <div className='right-container'>
                <Outlet />
            </div>
        </div>
    )
}

export default HomePage