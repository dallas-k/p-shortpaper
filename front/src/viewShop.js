import './css/viewShop.css'
import Products from './products.json';
import Loading from './component/loading';
import { useEffect, useState } from 'react';

function ViewShop(){
    const [count, setCount] = useState(0);
    const [scroll, setScroll] = useState(0);
    const [load, setLoad] = useState(0);
    const [shopData, setShopData] = useState([]);
    const getDatas = async () => {
        const productList = [];
        Products.forEach((product,idx) => {
        productList.push(
            <div key={idx} className='product-item'>
                <a href={product.url} target='_blank' rel="noreferrer"><img src={`asset/products/${product.idx}.png`} alt={product.name}></img></a>
                <h4>{product.name}</h4>
                <p>￦{(product.price).toLocaleString()}</p>
            </div>
        )
        })
        setLoad(1);
        return setShopData( (prev) => [...prev,productList]);
    }
    const navScroll = () => {
        document.addEventListener('scroll', () => {
            setScroll(window.scrollY);
        })
    }
    useEffect( () => {
        getDatas();
        console.log(load);
    },[])
    useEffect(() => {
        setCount(Products.length);
        navScroll();
    },[Products, scroll, load])

    return (
        <>
            <main>
                <div className='area'>
                    <div className='desc-area'>
                        <div className='description' style={{'top':scroll}}>
                            <h2>짧은 대본 굿즈</h2>
                            <div className='description-para'>
                                <p>짧은 대본의 굿즈는 'MEMEZ' 사이트를 통해 판매하고 있습니다.</p>
                                <p>상품이미지를 클릭 시 새 창을 통해 스토어로 이동합니다.</p>
                            </div>
                            <div className='description-link'>
                                <p><a href='https://memez.kr/' target='_blank' rel="noreferrer">MEMEZ 이동하기</a></p>
                                <p><a href='https://memez.kr/channel/shop.php?cateCd=001001045' target='_blank' rel="noreferrer">짧은 대본 MEMEZ 스토어</a></p>
                            </div>
                        </div>
                    </div>
                    <div className='shop-area'>
                        <h3>Products</h3>
                        <p>총 <b>{count}</b>개의 상품이 있습니다.</p>
                        <div className='product-container'>
                            {load === 0 ? <Loading /> : null}
                            {shopData}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ViewShop;