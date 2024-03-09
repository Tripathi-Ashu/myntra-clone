
let bagItem = [];
onLoad();


function onLoad(){
  let bagItemStr = localStorage.getItem('bagItems');
  bagItem = bagItemStr?JSON.parse(bagItemStr):[];
  displayItemsOnHomePage ();
  displayBagIcon();

}




function addToBag(itemid){
  bagItem.push(itemid);
  localStorage.setItem('bagItems',JSON.stringify(bagItem));
  displayBagIcon();
}
function displayBagIcon() {
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if(bagItem.length>0){
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText = bagItem.length;
}else{
    bagItemCountElement.style.visibility = 'hidden';
}
}


function displayItemsOnHomePage (){
  let itemsContainerElement = document.querySelector('.items-container');
  if(!itemsContainerElement){
    return;
  }

let innerHTML='';

items.forEach(item => {
  innerHTML+=`
  <div class="item-container">
       <img class="item-image" src=${item.image} alt="item image">
        <div class="rating">
    ${item.rating.stars} ⭐| ${item.rating.count}
     </div>
       <div class="company-name"> ${item.company}</div>
       <div class="item-name">${item.item_name}</div>
     <div class="price">
        <span  class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="discount">(${item.discount_percentage}% OFF)</span>
    </div>
    <button  class="btn-add-bag" onclick="addToBag(${item.id})"
    >Add to Bag</button>
  </div>  `
})





itemsContainerElement.innerHTML = innerHTML ;
};

