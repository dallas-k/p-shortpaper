import './css/viewShop.css'
import Products from './products.json';

function ViewShop(){
    const productList = [];
    Products.forEach(product => {
        productList.push(
            <div className='product-item'>
                <a href={product.url} target='_blank' rel="noreferrer"><img src={product.src} alt={product.name}></img></a>
                <h4>{product.name}</h4>
                <p>￦{product.price}</p>
            </div>
        )
    })

    return (
        <main>
            <div className='area'>
                <div className='desc-area'>
                    <div className='description'>
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
                    <p>총 11개의 상품이 있습니다.</p>
                    <div className='product-container'>
                        {productList}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ViewShop;