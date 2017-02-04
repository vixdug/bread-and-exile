$(() => {


 function loadData() {
     $.ajax ({
       method: "GET",
       url: "/api/menues",
       success: function (menuItem) {
         renderData(menuItem);
         console.log(menuItem);
       }
     });
   }

   function renderData(arrOfObjects) {
     arrOfObjects.forEach(function(object){
       $("#menu").append(createMenuItem(object))
     })
    }

    function createMenuItem (orders){
      console.log("CREATE CART ITEM");
      console.log(orders.name);
      let $menu = `
      <table id="menu" class="table table-hover table-condensed">
        <thead>
          <tr>
            <th style="width:50%">Product</th>
            <th style="width:10%">Price</th>
            <th style="width:10%"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-th="Product">
              <div class="row">
                <div class="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..." class="img-responsive"/></div>
                <div class="col-sm-10">
             <h4 class="nomargin">${orders.name}</h4>
             <p>${orders.description}</p>
             </div>
           </div>
          </td>
          <td data-th="Price">$${orders.price}</td>
          <td class="actions" data-th="">
            <form action="/cart/add" id="add-to-cart-button" method="POST">
              <input type="submit" name="button" value="Add To Cart">
              <input type = "hidden" name = "item_price" value = "${orders.price}" >
              <input type = "hidden" name = "item_id" value = "${orders.id}" >
              <input type="text" name="item_quantity">
            </form>
          </td>
         </tr>
         </tbody>
          `;
        return $menu
        }


loadData();

//end of doc ready
});
