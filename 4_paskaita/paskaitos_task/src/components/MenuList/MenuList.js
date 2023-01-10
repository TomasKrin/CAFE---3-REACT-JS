import { singleMenu, coupleMenu, familyMenu } from "./const"

const MenuList = ({customerType}) => {
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

// import { singleMenu, coupleMenu, familyMenu } from "./const";



// const MenuList = ({ customerType }) => {

//   const getCustomerMenu = (type) => {

//     if (type === "single") {

//       return singleMenu;

//     } else if (type === "couple") {

//       return coupleMenu;

//     } else {

//       return familyMenu;

//     }

//   };



//   const customerMenu = getCustomerMenu(customerType);



//   return (

//     <ol>

//       {customerMenu.map((menuItem) => (

//         <li key={menuItem.itemName}>

//           {menuItem.itemName} <strong>${menuItem.price}</strong>

//         </li>

//       ))}

//     </ol>

//   );

// };



// export default MenuList;