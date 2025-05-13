import { Button } from '@/components/ui/button'
import React, { Fragment, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { addNewProduct, deleteProduct, editProduct, fetchAllProduct } from "../../store/adminSlice/AdminProductSlice"
import { useDispatch, useSelector } from 'react-redux'
import { imageUpload } from '../../store/adminSlice/AdminProductImageUploadSlice'
import { toast } from "react-toastify";
import AdminProductCard from '../../components/adminView/AdminProductCard'

const AdminProduct = () => {


     const {handleSubmit,register,formState:{errors,isValid},watch,reset}=useForm({mode: "all"});
     const [openProductDialog,setOpenProductDialog] = useState(false);
     const [imageUrl,setImageUrl] = useState();
     const [previewImage, setPreviewImage] = useState(null);
     const {productList}=useSelector(state=>state.adminProducts);
     const [currentEditedId,setCurrentEditedId]= useState(null);
     const [newProduct,setNewProduct]=useState(null)
     const dispatch = useDispatch();
    
            
          // const imageurl= useSelector(state=> state.imageupload?.imageUrl?.imageUrl)
          // console.log(imageUrl)
            useEffect(()=>{
              dispatch(fetchAllProduct())


            },[dispatch])
          console.log(productList);

          useEffect(() => {
            if (currentEditedId && newProduct) {
                reset({
                    title: newProduct.title || '',
                    description: newProduct.description || '',
                    category: newProduct.category || '',
                    brand: newProduct.brand || '',
                    price: newProduct.price || '',
                    salePrice: newProduct.salePrice || '',
                    totalStock: newProduct.totalStock || ''
                });
                setPreviewImage(newProduct.image || null);
            }
        }, [currentEditedId, newProduct, reset]);

     async function onSubmit(data){
        const formData = new FormData();
        formData.append("image",imageUrl ); // Single file
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("category", data.category);
        formData.append("brand", data.brand);
        formData.append("price", data.price);
        formData.append("salePrice", data.salePrice);
        formData.append("totalStock", data.totalStock);
        

        try {

            //  currentEditedId !== null?
            //  dispatch(editProduct({
            //   id:currentEditedId,formData
            //  })):
            //   const response=await dispatch(addNewProduct(formData)).unwrap(); 
            console.log("Image URL before sending request:", imageUrl);
            console.log("FormData Entries:");
            for (let pair of formData.entries()) {
                   console.log(pair[0], pair[1]);
            }
            let response;

                if (currentEditedId !== null) {
                   response = await dispatch(editProduct({ id: currentEditedId, formData })).unwrap();
                 } else {
                    response = await dispatch(addNewProduct(formData)).unwrap();
                 }
                //  setTimeout(() => console.log("API Response:", response), 0);
              if (response.success) {
                    toast.success("Product Added Successfully");
                    dispatch(fetchAllProduct())
                    reset();
                    setImageUrl(null);
                    setPreviewImage(null);
                    // setOpen(false)
              } else {
                    toast.error("", { position: "top-right" });
              }
        } catch (error) {
              toast.error(error.message || "", { position: "top-right" });
        }         
      };
      const handleDelete = async (getCurrentProductId) => {
        try {
          const response = await dispatch(deleteProduct(getCurrentProductId)).unwrap();
          console.log(response)
          if (response.success) {
            toast.success("Product deleted successfully");
            dispatch(fetchAllProduct()); 
          } else {
            toast.error(response.message || "Failed to delete product");
          }
        } catch (error) {
          toast.error(error.message || "An error occurred while deleting");
        }
      };
        const handleImageUpload=async (e)=>{
          const formdata = new FormData();
          const file = e.target.files[0];
          if(!file) return ;
          const fileUrl = URL.createObjectURL(file);
          setPreviewImage(fileUrl);
          formdata.append("myfile",file);
                try {
                     const response = await dispatch(imageUpload(formdata)).unwrap(); 
                      setImageUrl(response.imageUrl);
                     
                      // if (response.success) {
                      //   toast.success("image Successful", { position: "top-right" });
                      // } else {
                      //   toast.error("User doesnot exist with this email", { position: "top-right" });
                      // }
                } catch (error) {
                      toast.error(error.message || "Image Upload Failed", { position: "top-right" });
                }

        }
      
      //  const imageFile = watch("image");
      //   //  console.log(imageFile)
      //    useEffect(() => {
      //     if (imageFile && imageFile.length > 0) {
      //       const file = imageFile[0];
      //       const fileUrl = URL.createObjectURL(file);
      //       setPreviewImage(fileUrl);
      //     }
      //   }, [imageFile]);

  return (
    <Fragment>
      <div className='mb-5 flex justify-end w-full '>
        <Button onClick={()=>setOpenProductDialog(!openProductDialog)} className="bg-black text-white">Add new Product</Button>
      </div>
      <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-4'>
          {
           productList && productList.length > 0 ?
           productList.map((productitem)=>(
             <AdminProductCard 
                  setCurrentEditedId={setCurrentEditedId} 
                  product={productitem}
                  setOpenProductDialog={setOpenProductDialog}
                  setFormData={setNewProduct}
                  handleDelete={handleDelete}
             /> 
           )) : null
          }
      </div>
      <div className="relative">
      <div
        className={`fixed inset-y-0 right-0 z-50 w-96 bg-white shadow-lg transform overflow-y-auto max-h-[90vh] ${
          openProductDialog ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out p-6`}
      >
        <button
          onClick={() =>{ 
            setOpenProductDialog(false)
            reset({ 
              title: '',
              description: '',
              category: '',
              brand: '',
              price: '',
              salePrice: '',
              totalStock: '',
              image: ''
            }
            ); 
            setPreviewImage(null);
            setCurrentEditedId(null)
          }}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          ✖
        </button>
        <h2 className="text-xl font-bold mb-4">
            {currentEditedId !== null ? "Edit Product" :"Add New Product"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 ">
        <div>
          <label className="block font-medium text-gray-700">Product Image</label>
          <input
            type="file"
            {...register("image", { required: "Image is required" })}
            onChange={handleImageUpload}
            className="w-full mt-1 p-2 border rounded-lg"
          />
          {previewImage && <img src={previewImage} alt="Preview" width="100" />}
          {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
        </div>
        <div>
          <label className="block font-medium text-gray-700">Title</label>
          <input
            type="text"
            {...register("title", { required:"Title is required" })}
            className="w-full mt-1 p-2 border rounded-lg"
            placeholder="Enter product title"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>
        <div>
          <label className="block font-medium text-gray-700">Description</label>
          <textarea
            {...register("description", { required: "Description is required" })}
            className="w-full mt-1 p-2 border rounded-lg"
            placeholder="Enter product description"
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
        </div>
        <div>
          <label className="block font-medium text-gray-700">Category</label>
          <select
            {...register("category", { required: "Category is required" })}
            className="w-full mt-1 p-2 border rounded-lg"
          >
            <option value="">Select Category</option>
             <option id="men"  value="men">Men</option>
             <option id="women" value="woman">Women</option>
             <option id="kids" value="kids">Kids</option>
             <option id="accessories" value="accessories">Accessories</option>
             <option id="footwear" value="footwear">Footwear</option>
          </select>
          {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
        </div>
        <div>
          <label className="block font-medium text-gray-700">Brand</label>
          <select
            {...register("brand", { required: "Brand is required" })}
            className="w-full mt-1 p-2 border rounded-lg"
            placeholder="Enter brand name"
          >

            <option value="">Select Category</option>
            <option id="niki"  value="niki">Niki</option>
            <option id="adidas" value="adidas">Adidas</option>
            <option id="puma" value="puma">Puma</option>
            <option id="zara" value="zara">Zara</option>
            <option id="levi" value="levi">Levi</option>
          </select>
          {errors.brand && <p className="text-red-500 text-sm">{errors.brand.message}</p>}
        </div>
        <div>
          <label className="block font-medium text-gray-700">Price ($)</label>
          <input
            type="number"
            {...register("price", { required: "Price is required", min: 1 })}
            className="w-full mt-1 p-2 border rounded-lg"
            placeholder="Enter price"
          />
          {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
        </div>
        <div>
          <label className="block font-medium text-gray-700">Sale Price ($)</label>
          <input
            type="number"
            {...register("salePrice")}
            className="w-full mt-1 p-2 border rounded-lg"
            placeholder="Enter sale price"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Total Stock</label>
          <input
            type="number"
            {...register("totalStock", { required: "Stock is required", min: 0 })}
            className="w-full mt-1 p-2 border rounded-lg"
            placeholder="Enter total stock"
          />
          {errors.totalStock && <p className="text-red-500 text-sm">{errors.totalStock.message}</p>}
        </div>
        {/* <button
          type="submit"
          disabled={!isValid}
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-all duration-200"
        >
         { currentEditedId !== null?"Edit Product":"Add Product" }
        </button> */}
        <button
           type="submit"
           disabled={!isValid}
           className={`w-full py-2 rounded-lg transition-all duration-200 ${
           isValid ? "bg-black text-white hover:bg-gray-800" : "bg-gray-400 text-gray-700 cursor-not-allowed"
            }`}
        >
             {currentEditedId !== null ? "Edit Product" : "Add Product"}
        </button>
      </form>
      
      </div>
    </div>
    </Fragment>
  )
}

export default AdminProduct