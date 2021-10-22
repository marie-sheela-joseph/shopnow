import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addProducts, deleteProducts, updateProducts, readProducts } from '../redux/products/productsActions';
import Loading from "./Loading";

const Products = () => {
    let state = useSelector(state => state)
    let { products } = state

    let [ob1, setOb1] = useState({ title: '', price: '', image: '' })
    let [ob2, setOb2] = useState({ id: 0, title: '', price: '' })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(readProducts())
    }, [dispatch])

    const insert = (e) => {
        e.preventDefault()
        if (ob1.title && ob1.price) {
            dispatch(addProducts(ob1))
        }
        setOb1({ title: '', price: '' })
    }

    const edit = (x) => {
        setOb2(x)
    }

    const update = (e) => {
        e.preventDefault()
        if (ob2.title && ob2.price) {
            dispatch(updateProducts(ob2))
        }
        setOb2({ id: 0, title: '', price: '' })
    }

    const del = (id) => {
        dispatch(deleteProducts(id))
    }

    const productsJsx = (products.length > 0) ? (<div className="insert-form-container space">
        <h2>ADD PRODUCT</h2>
        <form onSubmit={insert} className="d-grid d-grid-form">
            <input
                placeholder="Enter title"
                value={ob1.title}
                onChange={e => setOb1({ ...ob1, title: e.target.value })}
            />
            <input
                placeholder="Enter price"
                value={ob1.price}
                onChange={e => setOb1({ ...ob1, price: e.target.value })}
            />
            <button className="text-upper">add product</button>
        </form>
        {ob2.id > 0 ?
            <div className="update-form-container space">
                <h2>UPDATE PRODUCT</h2>
                <form onSubmit={update} className="d-grid d-grid-form">
                    <input
                        placeholder="Enter new title"
                        value={ob2.title}
                        onChange={e => setOb2({ ...ob2, title: e.target.value })}
                    />
                    <input
                        placeholder="Enter new price"
                        value={ob2.price}
                        onChange={e => setOb2({ ...ob2, price: e.target.value })}
                    />
                    <button className="text-upper">update</button>
                </form>
            </div>
            : null}
        <div className="d-grid d-grid-product">
            {products.map((item) => {
                return <div key={item.id} className="grid-item text-center">
                    <div>
                        <img src={item.image ? item.image : 'http://localhost:3000/images/no-image-available.png'} alt="" />
                    </div>
                    <h3 className="product-title">{item.title}</h3>
                    <span className="product-price">{item.price} euros</span>
                    <div className="d-flex justify-content-around product-buttons">
                        <button onClick={e => edit(item)} className="text-upper">edit</button>
                        <button onClick={e => del(item.id)} className="text-upper">delete</button>
                    </div>
                </div>
            })
            }
        </div>
    </div >
    ) : (
        <Loading text="Loading products. Please wait" imgSource="http://localhost:3000/images/loading.jpg" />)
    return <div className="container">{productsJsx}</div>

}
export default Products