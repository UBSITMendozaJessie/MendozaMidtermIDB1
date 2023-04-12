import { Products } from "./products";

export const PRODUCTS: Products[]=[
    {   id: 1,
        name: 'Tomas',
        category: 'Formal', 
        dateAdded: new Date(2023, 3, 29),
        sizes:'',
        colors:'Black, White',
        brand:'Arrow',
        sPic: 'https://i.pinimg.com/564x/78/72/4b/78724b58898aa4634cf43226985503a3.jpg'
        
    },
    {   id: 2,
        name: 'Edward',
        category: 'Casual',
        dateAdded: new Date(2023, 3, 29),
        sizes:'Reebook',
        colors:'Red, Blue, Green',
        brand:'',
        sPic: 'https://i.pinimg.com/564x/02/9f/a4/029fa47b00476a8281cffbf78a09b419.jpg'
    },
    {   id: 3,
        name: 'Mark',
        category: 'Shoes',
        dateAdded: new Date(2023, 3, 29),
        sizes:'US 10.5',
        colors:'Black, Gray, Teal',
        brand:'Adidas',
        sPic: 'https://i.pinimg.com/564x/95/c3/44/95c344e02952eaf9ceb9d5c3d6e5bb96.jpg'
    }
    ]
  