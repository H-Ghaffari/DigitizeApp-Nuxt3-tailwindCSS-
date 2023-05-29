import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [], //کل محصولات موجود در سبد خرید ما نه یک محصول
    cartTotal: 0,
  }),
  getters: {
    // double: (state) => state.count * 2, //اسم گتر ما دابل است
    cartLength: (state) => state.cart.length,
  },
  actions: {
    async initialiseStore() {
      if (localStorage.getItem("cart")) {
        this.cart = JSON.parse(localStorage.getItem("cart"));
      }
      if (localStorage.getItem("cartTotal")) {
        this.cartTotal = parseFloat(localStorage.getItem("cartTotal"));
      }
      return true;
    },

    addRemoveCart(payload) {
      //adding or removing items from the cart and calculating the total
      //add or remove item
      payload.toAdd
        ? this.cart.push(payload.product)
        : (this.cart = this.cart.filter(function (obj) {
            return obj.id !== payload.product.id;
          }));

      //calculating the total
      this.cartTotal = this.cart.reduce((accumulator, object) => {
        return parseFloat(accumulator) + parseFloat(object.price * object.qty);
      }, 0);

      //saving in web storage
      localStorage.setItem("cartTotal", JSON.stringify(this.cartTotal));
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },

    updateCart(payload) {
      //updating the item quantity and calculating the total after updating
      //update quantity
      this.cart.find((o) => o.id === payload.product.id).qty =
        payload.product.qty;

      //calculating the total
      this.cartTotal = this.cart.reduce((accumulator, object) => {
        return parseFloat(accumulator) + parseFloat(object.price * object.qty);
      }, 0);

      //saving in web storage
      localStorage.setItem("cartTotal", JSON.stringify(this.cartTotal));
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
  },
});
