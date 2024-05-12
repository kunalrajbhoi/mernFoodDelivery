import React, { useEffect } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import { Outlet } from 'react-router-dom'
import toast, { Toaster } from "react-hot-toast";
import { setDataProduct } from "./redux/productSlide";
import { useDispatch, useSelector } from "react-redux";


const App = () => {

  const dispatch = useDispatch()
  const productData = useSelector((state)=>state?.products?.productList)
 
  useEffect(()=>{
    (async()=>{
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/api/product`)
      const resData = await res.json()
      dispatch(setDataProduct(resData))
    })()
  },[])

  return (
    <>
    <Toaster />
    <div>
      <Header />
      <main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  </>
  )
}

export default App