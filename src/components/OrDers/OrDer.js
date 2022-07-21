import React from 'react';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrDer = () => {

    const [products, setProducts] = useProduct();

    const [cart, setCart] = useCart(products);
    const hundleRemoveProduct = product => {

        const rest = cart.filter(pd => pd.id !== product.id);

        setCart(rest);

        removeFromDb(product.id);

    }
    return (
        <div>
            <div className="shop-container">
                <div className="review-items-container">

                    {
                        cart.map(product => <ReviewItem
                            product={product}
                            key={product.id}
                            hundleRemoveProduct={hundleRemoveProduct}

                        >


                        </ReviewItem>)
                    }

                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default OrDer;