import ProductFilter from '@/components/shoppingView/ProductFilter'
import React, { useEffect, useState } from 'react'
import { sortOptions } from '@/components/config/Config'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllFilteredProduct, fetchProductDetail } from '@/store/shopSlice/ShopProductSlice'
import ShoppingProductCard from '@/components/shoppingView/ShoppingProductCard'
import { useSearchParams } from 'react-router-dom'
import ProductDetailsModal from '@/components/shoppingView/ProductDetail'
import { addToCard,fetchCardItems } from '@/store/shopSlice/ShopCardSlice'
import { toast,ToastContainer } from "react-toastify";


function createSearchParamsHelper (filterParams) {
        const queryParams = [];
        for (const [key,value] of Object.entries(filterParams)){
          if (Array.isArray(value) && value.length > 0) {
               const paramValue = value.join (',')
               queryParams.push(`${key}= ${encodeURIComponent(paramValue)}`)
          } 
        }
        return queryParams.join("&")
}

const ShoppingList = () => {


      const dispatch = useDispatch();
      const {productList,productDetails,isLoading} = useSelector(state=>state.shopProducts);
      const {user} = useSelector(state=>state.auth)
     

      const [filters,setFilters] = useState({});
      const [sort , setSort] = useState("");
      const [searchParams, setSearchParams] = useSearchParams();
      const[ openDetailsDialog,setOpenDetailsDialog] = useState(false);
      
    //  console.log(cardItems)
    
      
      const hanldeClose = () =>{
            return setOpenDetailsDialog(!openDetailsDialog)
      }
      function handleAddToCard (getCurrentProductId) {
        
          console.log(getCurrentProductId)
          dispatch(addToCard({userId : user?.id,productId : getCurrentProductId ,quantity : 1})).then((data)=>{ 
            if(data?.payload?.success){
            dispatch(fetchCardItems(user?.id))
             toast.success("Product is added to card", { position: "top-right" });
            }
            else {
              toast.error("Failed to add product to cart!", { position: "top-right" });
            }
          })
      }

      useEffect(()=>{
        if(filters !== null && sort !== null ) 

        dispatch(fetchAllFilteredProduct( {filterParams : filters ,sortParams:sort}))
      },[dispatch,sort,filters])

      useEffect(()=>{
         setSort('Low To High');
         setFilters(JSON.parse(sessionStorage.getItem('filters')) || {})
      },[])
      
      useEffect(()=>{
        if(filters && Object.keys(filters).length > 0) {
          const createQueryString = createSearchParamsHelper(filters)
          setSearchParams(new URLSearchParams(createQueryString))
        }
        },[filters])
      

      function handleChange (e) {
        console.log(e.target.value)
        setSort(e.target.value)
      }
      function handleFilter ( getSectionId,getCurrentOption ) {
           console.log(getSectionId,getCurrentOption)
           let cpFilters = {...filters}
           const indexofCurrentSection = Object.keys(cpFilters).indexOf(getSectionId);
           if(indexofCurrentSection === -1 ){
             cpFilters={
              ...cpFilters,
              [getSectionId]:[getCurrentOption]
             }
           } else {
             const indexofCurrentOption = cpFilters[getSectionId].indexOf(getCurrentOption);
             if ( indexofCurrentOption === -1 ) {
              cpFilters[getSectionId].push(getCurrentOption)
             } else {
              cpFilters[getSectionId].splice(indexofCurrentOption,1)
             }
           }
           setFilters(cpFilters)
           sessionStorage.setItem('filters',JSON.stringify(cpFilters))
           console.log(filters,searchParams)
      }
      function handleProductDetails (getCurrentProductId) {
                      dispatch(fetchProductDetail(getCurrentProductId))

      }
        useEffect(()=>{
           if(productDetails !== null) setOpenDetailsDialog(true)
        },[productDetails])
       


     
  return (
    <div  className='grid grid-cols-1 md:grid-cols-[300px_1fr] gap-4 p-4 md:p-6 '>
         <ProductFilter filters={filters} handlefilter={handleFilter}/>
         <div className='bg-background w-full rounded-lg shadow-sm'>
           <div className='p-4 border-b flex items-center justify-between'> 
             <h2 className='font-extrabold text-lg'>All Products</h2>
             <div className='flex items-center gap-2 '>
               <span className='text-muted-foreground m-2'> {productList?.length} Products</span>
               <select className='border-2 border-gray-300 text-sm px-2' value={sort} onChange={handleChange}>
                 {
                  sortOptions.map((sortitem)=>(
                    <option key={sortitem.id} value={sortitem.id}>{sortitem.label}</option>
                  ))
                 
                }
               </select>
             </div>
           </div>
           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-6'>
            
             {
               isLoading ? "...loading" :
               productList && productList.length > 0 ?
               productList.map((productItem)=> <ShoppingProductCard 
                                                 product={productItem} 
                                                 handleProductDetails={handleProductDetails} 
                                                 handleAddToCard = {handleAddToCard}
                                               />
               ): null
             }

           </div>
           {/* <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <div
          key={product._id}
          className="border p-4 cursor-pointer"
          onClick={() => handleProductDetails(product)}
        >
          <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
          <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
        </div>
      ))}

      {/* Product Details Modal */}
      {/* <ProductDetailsModal product={selectedProduct} isOpen={isModalOpen} onClose={closeModal} />
    </div> */} 

         </div>
         <ProductDetailsModal product={productDetails} isOpen={openDetailsDialog} onClose={hanldeClose} />









     {/* new */}

     {/* <Modal isOpen={open} onClose={handleClose} title="Shopping Cart">
       {
        productsCount>0?
        <>
         <p>Items in your Cart: </p>
         {
          cart.items.map((currentProduct,index)=>(
            <CartProduct key={index} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
         ))}
         <h1 className=''> Total: {cart.getTotalCost().toFixed(2)} </h1>
          <button className='bg-indigo-500 w-40 h-10 rounded-xl' onClick={checkOut}>
             Purchase Items! 
          </button>
        </>
        : <h2>This is no item in cartbody</h2>
       } */}

      {/* <h2>This is cart body</h2> */}

     {/* </Modal> */}










     <ToastContainer />
    </div>
  )
}

export default ShoppingList
