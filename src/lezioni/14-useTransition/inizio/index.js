import React, {useTransition} from "react";
import ProductList from "./components/ProductList";
import { data } from "./assets/data";

const Component = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [filteredProducts, setFilteredProducts] = React.useState(data);

  // useTransition
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  React.useEffect(() => {
    if (!inputValue) {
      setFilteredProducts(data);
    }

    // start transition filter products
    startTransition(() => {
      setFilteredProducts(data.filter((el) => el.text.includes(inputValue)));
    })
  }, [inputValue]);
  return (
    <div className='mt-4'>
      <div className='d-flex justify-content-center'>
        <input
          type='text'
          className='input-group-text bg-white'
          onChange={handleChange}
        />
      </div>

      {/* isPending loading  */}
      {
        isPending ? (
          <h4>loading...</h4>
        ) : (
          <ProductList products={filteredProducts} />
        )
      }
    </div>
  );
};

export default Component;
