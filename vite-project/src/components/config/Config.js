export const ShoppingViewHeaderMenuItems = [
    // {
    //   id: "home",
    //   label: "Home",
    //   path: "/shop/home",
    // },
    {
      id: "men",
      label: "Men",
      path: "/shop/listing",
    },
    {
      id: "women",
      label: "Women",
      path: "/shop/listing",
    },
    {
        id: "kids",
        label: "Kids",
        path: "/shop/listing",
      },
      {
        id: "footwear",
        label: "Footwear",
        path: "/shop/listing",
      },
      {
        id: "accessories",
        label: "Accessories",
        path: "/shop/listing",
      },
  ];
  export const filterOptions={
     category:[
      { id: "men",label: "Men"},
      { id: "women",label: "Women"},
      { id: "kids",label: "Kids"},
      { id: "footwear",label: "Footwear"},
      { id: "accessories",label: "Accessories"}
    ],
     brand:[
      { id:"nike", label:"Nike"},
      { id:"adidas", label:"Adidas"},
      { id:"puma", label:"Puma"},
      { id:"levi", label:"Levi"},
      { id:"zara", label:"Zara"},
      { id:"h&m", label:"H&M"},
     ]
  }
  export const sortOptions=[
     {id:"Relevant", label:"Sort By Relevant"},
     {id:"Low To High", label:"Low To High"},
     {id:"High To Low", label:"High To Low"},
     {id:"atoz", label:"Title:A To Z"},
     {id:"ztoa", label:"Title:Z To A"},

  ]