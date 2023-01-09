const MenuList = ({customerType}) => {
    const singleMenu = [{
            itemName:'Sumuštiniai',
            price:3
        },
        {
            itemName: 'Šaltibarščiai',
            price:6
        },
        {
            itemName: 'Cepelinai',
            price: 8
        }
    ];
     const coupleMenu = [{
            itemName:'Spagečiai',
            price: 7
        },
        {
            itemName:'Blyneliai',
            price:5
        },
        {
            itemName:'Steikas',
            price:15
        }
    ]
    const familyMenu = [{
        itemName:'Pica',
        price: 11
    },
    {
        itemName:'Troškinys',
        price:9
    },
    {
        itemName:'Sriuba',
        price:3
    }
]
    if(customerType === 'single'){
        return ( <ol>
            { singleMenu.map((item, index)=> <li key={index}>{item.itemName} <span style={{fontWeight:'bold'}}> &#36;{item.price}</span> </li> )}
        </ol>)
        }
    if(customerType === 'couple'){
        return ( <ol>
            { coupleMenu.map((item, index)=> <li key={index}>{item.itemName} <span style={{fontWeight:'bold'}}> &#36;{item.price}</span> </li> )}
        </ol>)
        } else{
        return ( <ol>
            { familyMenu.map((item, index)=> <li key={index}>{item.itemName} <span style={{fontWeight:'bold'}}> &#36;{item.price}</span> </li> )}
       </ol>)
        }
}

export default MenuList