import React, { useState, useEffect } from 'react';
import { CCard, CCardBody } from '@coreui/react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthUser } from 'src/services/AuthUser';
import { sendToast, sendToastError } from 'src/config/configToast';


const Product = () => {
  const { http } = AuthUser();
  const [products, setProducts] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const navigate = useNavigate();

  const fetchApiProducts = async () => {
    try {
      const response = await http.get('/products');
      return response.data.data;
    } catch (error) {
      console.error(error);
      sendToastError('Failed to fetch role. Server error occurred.');
      navigate('/403');
      setFetchError(true);
      return [];
    }
  };


  useEffect(() => {
    fetchApiProducts()
      .then(apiProduct => {
        setProducts(apiProduct);
      })
      .catch(err => {
        console.error(err)
        setFetchError(true);
      });
  }, []);

  const handleAddproduct = () => {
    navigate('/product/add');
  };

  const deleteProduct = async (id) => {
    try {
      const updatedProducts = products.filter(product => product.id !== id);
      setProducts(updatedProducts);

      await http.delete(`/products/${id}`);
      window.location.reload();

      sendToast('Deleted product successfully.');
    } catch (error) {
      setProducts(products);
      sendToastError('Failed to delete product.');
      console.error(error);
    }
  };


  return (
    <>
      <div className="container">
        <h2>Danh sách sản phẩm</h2>
        <button type="button" className="btn btn-warning mb-3" onClick={handleAddproduct}>
          Thêm
        </button>
      </div>
      <CCard className="mb-4">
        <CCardBody>
          <div className="table-responsive">
            <table className="table table-bordered text-center">
              <thead>
                <tr>
                  <th scope="col">STT</th>
                  <th scope="col">Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Price</th>
                  <th scope="col">Image</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, productIndex) => (
                  <tr key={`product${productIndex}`}>
                    <td>{productIndex + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <img src={product.imgURL} height={70} width={70}></img>
                    <td>
                      <div className="d-flex justify-content-center align-items-center">
                        <Link to={`/product/update/${product._id}`} className="btn btn-primary mx-1">Sửa</Link>
                        <button className="btn btn-danger mx-1" onClick={() => deleteProduct(product._id)}>Xoá</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Product;
