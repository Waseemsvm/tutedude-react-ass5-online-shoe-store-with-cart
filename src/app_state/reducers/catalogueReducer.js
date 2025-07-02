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

// const mCartItems = products.reduce((p) => (p[p.pid] = p), {});

const initialState = {
  products: products,
  cartItems: aCartItems,
};

const catalogueReducer = (state = initialState, action) => {
  let cartItems = [...state.cartItems];
  const cartItem = cartItems.find((cartItem) => cartItem.id == action.id);

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
  }
  return {
    ...state,
    cartItems: cartItems,
  };
};

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

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

export default catalogueReducer;
