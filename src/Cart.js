import React from 'react';
import { useCart } from "react-use-cart";

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    if (isEmpty) return <h1 className='text-center'>Tu carrito</h1>

    return (
        <section className='py-4 container'>
            <div className='row justify-content-center'>
                <div className='col-12'>
                    <h5>Productos ({totalUniqueItems}) Total productos: ({totalItems})</h5>
                    <table className='table table-ligth table-hover m-0'>
                        <tbody>
                            {items.map((item, index) => {
                                return (


                                    <tr key={index}>
                                        <td><img src={item.img} style={{ height: '6rm' }} /></td>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td> Cantidad ({item.quantity})</td>
                                        <td>
                                            <button className='btn btn-info ms-2' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                            <button className='btn btn-info ms-2' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                            <button className='btn btn-danger ms-2' onClick={() => removeItem(item.id)} >Remover</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className='col-auto ms-auto'>
                    <h2>Total precio: $ {cartTotal} </h2>
                </div>
                <div className='col-auto'>
                    <button className='btn btn-danger n-2'onClick={() => emptyCart()} >Limpiar carrito</button>
                    <button className='btn btn-primary n-2'>Pagar ahora</button>
                </div>
            </div>
        </section >
    );
};

export default Cart;

