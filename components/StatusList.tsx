import { getStatus } from '@/redux/statusSlice';
import { AppDispatch, RootState } from '@/redux/store';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const StatusList = ({
    urlData,
    
  }: {
    urlData: any;
    
  }) => {
    const dispatch = useDispatch<AppDispatch>();
    const stats=useSelector((state:RootState)=>state.stats.data)
    // const user = useSelector((state: RootState) => state.url.data);
    useEffect(() => {
      dispatch(getStatus(urlData))
    }, []);

  return (
    <div>{""+stats[urlData]}</div>
  )
}

export default StatusList