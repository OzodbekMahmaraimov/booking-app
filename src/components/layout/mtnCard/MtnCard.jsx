import { useEffect, useState } from 'react';
// components
import Product from '../product/Product';
import { apiUrl } from '../../../Api/index'
// images
import productImage from '../../../assets/images/product.jpg';
import axios from 'axios';

const MtnCard = ({ setModal }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(apiUrl + "itemlist")
            .then((res) => {
                setProducts(res.data);
            }).catch((err) => {
                console.log(err);
            });
    }, []);

    const total = products.reduce((acc, product) => acc + (product.price * product.quantity), 0);

    const updateQuantity = (id, newQuantity) => {
        setProducts(currentProducts =>
            currentProducts.map(product =>
                product.id === id ? { ...product, quantity: newQuantity } : product
            )
        );
    };

    const deleteProduct = (productId) => {
        axios.delete(apiUrl + "itemlist/" + productId)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };


    return (
        <>
            <div className='w-[90%] px-5 mx-auto bg-[#F1E8D7] mb-8'>
                <div className="flex flex-col sm:flex-row pt-10 mb-5 w-full">
                    <h3 className="font-semibold text-xl uppercase w-[50%]">Product</h3>
                    <h3 className="font-semibold text-xl uppercase w-1/5 text-center">Price</h3>
                    <h3 className="font-semibold text-xl uppercase w-1/5 text-center">Quantity</h3>
                    <h3 className="font-semibold text-xl uppercase w-1/5 text-center">Subtotal</h3>
                </div>
                <div className='flex flex-col gap-5'>
                    {products.map((product) => (
                        <Product
                            key={product.id}
                            pricePerItem={product.price}
                            itemName={product.name}
                            itemImage={productImage}
                            quantity={product.quantity}
                            deleteProduct={() => deleteProduct(product.id)}
                            setQuantity={(newQuantity) => updateQuantity(product.id, newQuantity)}
                        />
                    ))}
                </div>
                <div className='w-full md:w-[50%] flex flex-col md:flex-row justify-between items-center pt-8 pb-8 mx-auto'>
                    <div className='flex justify-between items-center bg-white py-4 px-8 mb-4 md:mb-0'>
                        <span className='text-lg'>Total: </span>
                        <span className='text-lg'>{`${total.toLocaleString()} RWF`}</span>
                    </div>
                    <button onClick={() => setModal(true)} className='w-full md:w-auto bg-[#F46A06] text-white font-bold text-xl py-4 px-8 duration-300 active:scale-90'>
                        PAY
                    </button>
                </div>
            </div>
        </>
    );
};

export default MtnCard;
