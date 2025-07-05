const products = [
  {
    id: "prod1",
    url: "/products/pic1.jpg",
    text: "Black Sneakers",
    description: "",
    quantity: 0,
    price: 1500,
  },
  {
    id: "prod2",
    url: "/products/pic2.jpg",
    text: "Black Shoes",
    description: "",
    quantity: 0,
    price: 870,
  },
  {
    id: "prod3",
    url: "/products/pic3.jpg",
    text: "Brown Shoes",
    description: "",
    quantity: 0,
    price: 650,
  },
  {
    id: "prod4",
    url: "/products/pic4.jpg",
    text: "Brown-White Shoes",
    description: "",
    quantity: 0,
    price: 1900,
  },
  {
    id: "prod5",
    url: "/products/pic5.jpg",
    text: "Cream-White Ladies Shoes",
    description: "",
    quantity: 0,
    price: 1800,
  },
  {
    id: "prod6",
    url: "/products/pic6.jpg",
    text: "Fancy Shoes",
    description: "",
    quantity: 0,
    price: 1240,
  },
  {
    id: "prod7",
    url: "/products/pic7.jpg",
    text: "Branded Yellow Shoes",
    description: "",
    quantity: 0,
    price: 2000,
  },
  {
    id: "prod8",
    url: "/products/pic8.jpg",
    text: "Grey Shoes",
    description: "",
    quantity: 0,
    price: 2500,
  },
  {
    id: "prod9",
    url: "/products/pic9.jpg",
    text: "Brown Sandals",
    description: "",
    quantity: 0,
    price: 250,
  },
  {
    id: "prod10",
    url: "/products/pic10.jpg",
    text: "Red Shoes",
    description: "",
    quantity: 0,
    price: 700,
  },
  {
    id: "prod11",
    url: "/products/pic11.jpg",
    text: "White Ladies Sandals",
    description: "",
    quantity: 0,
    price: 950,
  },
  {
    id: "prod12",
    url: "/products/pic12.jpg",
    text: "Blue Jeans Shoes",
    description: "",
    quantity: 0,
    price: 800,
  },
  {
    id: "prod13",
    url: "/products/pic13.jpg",
    text: "Brown Sneakers",
    description: "",
    quantity: 0,
    price: 500,
  },
];

const aCartItems = [];

const initialState = {
  allProducts: products,
  products: products,
  cartItems: aCartItems,
  isCheckoutOpen: false,
};

const catalogueReducer = (state = initialState, action) => {
  let cartItems = [...state.cartItems];
  const cartItem = cartItems.find((cartItem) => cartItem.id == action.id);
  let filteredProds = [...state.products];
  const allProducts = [...state.allProducts];
  let isCheckoutOpen = state.isCheckoutOpen;

  if (action.type == ADD_TO_CART) {
    cartItem
      ? (cartItem.quantity += 1)
      : cartItems.push({
          ...state.products.find((p) => p.id == action.id),
          quantity: 1,
        });
  } else if (action.type == REMOVE_FROM_CART) {
    if (cartItem.quantity > 1) cartItem.quantity -= 1;
    else
      cartItems.splice(
        cartItems.findIndex((c) => c.id == cartItem.id),
        1
      );
  } else if (action.type == DELETE_FROM_CART) {
    cartItems.splice(
      cartItems.findIndex((c) => c.id == cartItem.id),
      1
    );
  } else if (action.type == FILTER_PRODUCTS) {
    filteredProds = action.value
      ? allProducts.filter((p) =>
          p.text?.toLowerCase().includes(action.value.toLowerCase())
        )
      : allProducts;
  }

  if (action.type == CHECKOUT_OPEN) isCheckoutOpen = action.value;

  return {
    ...state,
    cartItems: cartItems,
    products: filteredProds,
    isCheckoutOpen: isCheckoutOpen,
  };
};

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const FILTER_PRODUCTS = "FILTER_PRODUCTS";
export const CHECKOUT_OPEN = "CHECKOUT_OPEN";

export const addItem = (id) => {
  return {
    type: ADD_TO_CART,
    id: id,
  };
};

export const removeItem = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id: id,
  };
};

export const deleteItem = (id) => {
  return {
    type: DELETE_FROM_CART,
    id: id,
  };
};

export const filterItems = (value) => {
  return {
    type: FILTER_PRODUCTS,
    value: value,
  };
};

export const setCheckout = (value) => {
  return {
    type: CHECKOUT_OPEN,
    value: value,
  };
};

export default catalogueReducer;
