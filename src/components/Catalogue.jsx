import catalogueStyles from "../styles/Catalogue.module.css";
import CatalogueItem from "../components/CatalogueItem";

export default function Catalogue() {
  const products = [
    {
      id: "prod1",
      url: "/src/assets/products/pic1.jpg",
      text: "Black Sneakers",
      description: "",
      quantity: 0,
      price: 1500,
    },
    {
      id: "prod2",
      url: "/src/assets/products/pic2.jpg",
      text: "Black Shoes",
      description: "",
      quantity: 0,
      price: 870,
    },
    {
      id: "prod3",
      url: "/src/assets/products/pic3.jpg",
      text: "Brown Shoes",
      description: "",
      quantity: 0,
      price: 650,
    },
    {
      id: "prod4",
      url: "/src/assets/products/pic4.jpg",
      text: "Brown-White Shoes",
      description: "",
      quantity: 0,
      price: 1900,
    },
    {
      id: "prod5",
      url: "/src/assets/products/pic5.jpg",
      text: "Cream-White Ladies Shoes",
      description: "",
      quantity: 0,
      price: 1800,
    },
    {
      id: "prod6",
      url: "/src/assets/products/pic6.jpg",
      text: "Fancy Shoes",
      description: "",
      quantity: 0,
      price: 1240,
    },
    {
      id: "prod7",
      url: "/src/assets/products/pic7.jpg",
      text: "Branded Yellow Shoes",
      description: "",
      quantity: 0,
      price: 2000,
    },
    {
      id: "prod8",
      url: "/src/assets/products/pic8.jpg",
      text: "Grey Shoes",
      description: "",
      quantity: 0,
      price: 2500,
    },
    {
      id: "prod9",
      url: "/src/assets/products/pic9.jpg",
      text: "Brown Sandals",
      description: "",
      quantity: 0,
      price: 250,
    },
    {
      id: "prod10",
      url: "/src/assets/products/pic10.jpg",
      text: "Red Shoes",
      description: "",
      quantity: 0,
      price: 700,
    },
    {
      id: "prod11",
      url: "/src/assets/products/pic11.jpg",
      text: "White Ladies Sandals",
      description: "",
      quantity: 0,
      price: 950,
    },
    {
      id: "prod12",
      url: "/src/assets/products/pic12.jpg",
      text: "Blue Jeans Shoes",
      description: "",
      quantity: 0,
      price: 800,
    },
    {
      id: "prod13",
      url: "/src/assets/products/pic13.jpg",
      text: "Brown Sneakers",
      description: "",
      quantity: 0,
      price: 500,
    },
  ];

  return (
    <div className={catalogueStyles["catalogue-container"]}>
      <div className={catalogueStyles.toolbar}>
        <input placeholder="Search shoes" />
      </div>
      <div className={catalogueStyles.catalogue}>
        <ul className={catalogueStyles["products-container"]}>
          {products.map((product) => (
            <li key={product.id}>
              <CatalogueItem item={product} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
