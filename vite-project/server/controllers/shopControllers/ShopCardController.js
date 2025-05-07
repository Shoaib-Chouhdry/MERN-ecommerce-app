import cardmodel from "../../models/Card.js"
import productmodel from "../../models/Product.js";















































export const addToCard = async(req, res) => {
        //  try{
        //         const  {userId,productId,quantity} = req.body
        //         if ( !userId || !productId || quantity>=0 ) {

        //             return  res.status(400).json({
        //                 success: false, message: "Invalid Data Provided" })
        //         }  
        //         const produtId = await productmodel.findById(productId) 
        //         if(!produtId) {
        //             return res.status(400).json({
        //             success: false, message: "Product Not Found" })
        //         }

        //         let Card = await cardmodel.findOne({produtId});
        //         if( !Card ) {
        //             Card = new cardmodel({
        //                 userId, items : []})
        //         }
        //         const findCurrentProductIndex = Card.items.findIndex(item => item.productId.toString() === productId);
        //          if ( findCurrentProductIndex === -1 ) {
        //             Card.items.push ({
        //               productId,quantity
        //             })
        //          } else {
        //             Card.items[findCurrentProductIndex].quantity += quantity;
        //          }
        //          await Card.save();
        //          res.status(200).json({
        //                 success:true,
        //                 data:Card
        //                });
        //  }
        //  catch(err){
        //     console.log(err)
        //     res.status(500).json({
        //       success: false, message: "some Error occurred" })
        // }
        try {
            const { userId, productId, quantity } = req.body;
        
            // Validate Input
            if (!userId || !productId || quantity <= 0) {
              return res.status(400).json({
                success: false,
                message: "Invalid Data Provided",
              });
            }
        
            // Check if Product Exists
            const product = await productmodel.findById(productId);
            if (!product) {
              return res.status(404).json({
                success: false,
                message: "Product Not Found",
              });
            }
        
            // Find or Create Cart for User
            let cart = await cardmodel.findOne({ userId });
             if (!cart) {
               cart = new cardmodel({ userId, items: [] });
             }
        
            // Check if Product Already Exists in Cart
            const existingProductIndex = cart.items.findIndex(
              (item) => item.productId.toString() === productId
            );
        
            if (existingProductIndex === -1) {
              // Add New Product
              cart.items.push({ productId, quantity });
            } else {
              // Update Quantity
              cart.items[existingProductIndex].quantity += quantity;
            }
        
            // Save Updated Cart
            await cart.save();
        
            res.status(200).json({
              success: true,
              data: cart,
            });
          } catch (err) {
            console.error("Error in addToCard:", err);
            res.status(500).json({
              success: false,
              message: "Some error occurred",
            });
          }
}


export const fetchCardItems = async(req, res) => {
    try{
           const { userId } = req.params;
           if(!userId) {
            return res.status(400).json({
            success: false, message: "userid is mandatpory" });
           }
            const Card = await cardmodel.findOne({userId}).populate({
                path : 'items.productId',
                select : "image title price salePrice",
            })
            if ( !Card ) {
                return res.status(404).json({
                success: false, message: "card not found" });
            }
            const validItems = Card.items.filter(productItem => productItem.productId)
            if( validItems.length < Card.items.length) {
                Card.items = validItems;
                await Card.save();
            }
            const populateCardItems = validItems.map((item) =>({
                productId : item.productId._id,
                image : item.productId.image,
                title: item.productId.tilte,
                price: item.productId.price,
                salePrice: item.productId.salePrice,
                quantity: item.quantity, 
            }))
            
            res.status(200).json({
                success:true,
                data: {
                    ...Card._doc,
                   items: populateCardItems
                }
               });
    }
    catch(err){
       console.log(err)
       res.status(500).json({
         success: false, message: "some Error occurred" })
    }
}


export const updateCardItemQuantity = async(req, res) => {
    try{
        const  {userId,productId,quantity} = req.body
        if ( !userId || !productId || quantity>=0 ) {

            return  res.status(400).json({
                success: false, message: "Invalid Data Provided" })
        }  
        const Card = await cardmodel.findOne({userId});
        if ( !Card ) {
            return res.status(404).json({
            success: false, message: "card not found" });
        }
        const findCurrentProductIndex = Card.items.findIndex(item => item.productId.toString() === productId);
        if ( findCurrentProductIndex === -1 ) {
            return res.status(404).json({
                success: false, message: "Card Item Not Present"})
        }
        Card.items[findCurrentProductIndex].quantity = quantity ;
        await Card.save();

               await Card.populate({
                    path : 'items.productId',
                    select : "image title price salePrice",
               })

             const populateCardItems = Card.items.map((item) =>({
                productId : item.productId ? item.productId._id : null,
                image : item.productId ? item.productId.image : null,
                title: item.productId ? item.productId.title : null,
                price: item.productId ? item.productId.price :null,
                salePrice: item.productId ? item.productId.salePrice : null,
                quantity: item.quantity, 
             }));
             res.status(200).json({
                success:true,
                data: {
                    ...Card._doc,
                   items: populateCardItems
                }
               });
    }
    catch(err){
       console.log(err)
       res.status(500).json({
         success: false, message: "some Error occurred" })
   }
}

export const deleteCardItem = async(req, res) => {
    try{
        const  {userId,productId} = req.params 
        
        if ( !userId || !productId ) {
            return  res.status(400).json({
                success: false, message: "Invalid Data Provided" });
        }  
        // const Card = (await cardmodel.findOne({userId})).populate({
        //     path : 'items.productId',
        //     select : "image title price salePrice",
        // })
        // console.log(Card)
        const Card = await cardmodel
                              .findOne({ userId })
                              .populate({
                                   path: 'items.productId',
                                   select: "image title price salePrice",
                              });

         
        if ( !Card ) {
            return res.status(404).json({
            success: false, message: "card not found" });
        }
        if (!Card.items || Card.items.length === 0) {
          return res.status(400).json({
              success: false,
              message: "Cart is empty or has no items",
          });
        }
        Card.items = Card.items.filter(item=> item.productId.toString() !== productId)
        
        await Card.save();
        console.log(Card); 
          await Card.populate({
              path : 'items.productId',
              select : "image title price salePrice",
           })

           const populateCardItems = Card.items.map((item) =>({
            productId : item.productId ? item.productId : null,
            image : item.productId ? item.productId.image : null,
            title: item.productId ? item.productId.title : null,
            price: item.productId ? item.productId.price :null,
            salePrice: item.productId ? item.productId.salePrice : null,
            quantity: item.quantity, 
            }));
             res.status(200).json({
             success:true,
                data: {
                ...Card._doc,
               items: populateCardItems
                }
             });

    }
    catch(err){
       console.log(err)
       res.status(500).json({
         success: false, message: "some Error occurred" })
   }
}