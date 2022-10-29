import React from 'react';

import { Link } from 'react-router-dom';

function Products() {
  return (
    <div>
      <h3>products</h3>

      <Link to={`/product/1`}>product id 1</Link>
    </div>
  )
}

export default Products