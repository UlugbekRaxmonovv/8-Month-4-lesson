import React, { useEffect, useState } from 'react';
import './Produc.css';

const API_URL = "http://localhost:4000/products";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [edit, setEdit] = useState(false);
    const [reload, setReload] = useState(true);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setProducts(data));
    }, [reload]);

    const handleDeleteProduct = (id) => {
        fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            setReload(prev => !prev);
        });
    };

    const handleCreateProduct = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Object.fromEntries(formData.entries())),
        })
        .then(() => {
            setReload(prev => !prev);
            e.target.reset();
            setEdit(false);
        });
    };

    const handleEditProduct = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        fetch(`${API_URL}/${product.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Object.fromEntries(formData.entries())),
        })
        .then(() => {
            setReload(p => !p);
            setProduct(null);
            e.tat
        });
    };

    const links = products.map(product => (
        <div className="card" key={product.id}>
            <img src={product.img} alt={product.name} />
            <h1>{product.title}</h1>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">{product.price}$</p>
            <div className="delet">
                <div className="delet_all">
                    <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                </div>
                <div className="delet_all1">
                    <button onClick={() => setProduct(product)}>Edit</button>
                </div>
                <div className="delet_all2">
                    <button onClick={() => setEdit(true)}>Create</button>
                </div>
            </div>
        </div>
    ));

    return (
        <div>
            {edit ?
                <div className="hammasi show">
                    <form onSubmit={handleCreateProduct} className="form">
                        <div className="all">
                            <h1>Create Product</h1>
                            <input type="text" name="title" placeholder="Title"  />
                            <input type="text" name="price" placeholder="Price" />
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
        :
        <></>    
        }
        
            {product ?
          <div className="forma show">
          <form onSubmit={handleEditProduct}>
              <div className="all">
                  <h1>Edit Product</h1>
                  <input
                      type="text"
                      name="title"
                      placeholder="Title"
                      value={product.title}
                      onChange={(e) => setProduct(prev => ({ ...prev, title: e.target.value }))}
                      required
                  />
                  <input
                      type="text"
                      name="price"
                      placeholder="Price"
                      value={product.price}
                      onChange={(e) => setProduct(prev => ({ ...prev, price: e.target.value }))}
                      required
                  />
                  <button type="submit">Update</button>
              </div>
          </form>
      </div>
      :
      <></>    
        }

            <div className="wrapper container">
                {links}
            </div>
        </div>
    );
};

export default Product;
