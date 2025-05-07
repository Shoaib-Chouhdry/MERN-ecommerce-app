import productmodel from "../../models/Product.js";

export const getFilteredProducts = async(req,res) =>{

      
  try{
        const { category = [],brand=[] , sortBy = "Low To High" } = req.query

        let filters = {};
        if(category.length) {
          filters.category = { $in: category.split(',') }
        }
        if (brand.length) {
          filters.brand = { $in: brand.split(',') }
        }
        let sort = {};
        switch(sortBy){
          case "Low To High":
            sort.price = 1
            break;
          case "High To Low":
            sort.price = -1
            break;
          case "atoz":
            sort.price = 1
            break;
          case "ztoa":
            sort.price = -1
            break;
            default:
              sort.price = 1
        }
        const products = await productmodel.find(filters).sort(sort);
        res.status(200).json({
            success:true,
            data:products
           })

  }catch(err){
       console.log(err)
       res.status(500).json({
         success: false, message: "some Error occurred" })
 }

}
export const getProductDetails = async(req,res) =>{
          try{
            const {id} = req.params;
            const product = await productmodel.findById(id);
            if(!product) res.status(404).json({
              success: false, message: "product not found" })

            res.status(200).json({
              success: true, 
              data: product
            })

          } catch(err){
            console.log(err)
            res.status(500).json({
              success: false, message: "some Error occurred" })
          }
          

}