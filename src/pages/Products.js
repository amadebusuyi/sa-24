import { Link } from "react-router-dom";

export default function Products() {
  return (
    <ul className="products">
      <li>
        <Link to="product-1?color=red">Product 1</Link>
      </li>
      <li>
        <Link to="product-2?color=green">Product 2</Link>
      </li>
    </ul>
  );
}
