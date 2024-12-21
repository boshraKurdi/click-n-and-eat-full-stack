import ProductCard from '../ProductCard/ProductCard'
import './ProductList.css'
import pizza from '@assets/imgs/pizza.jpg'
const ProductList = () => {
    return (
        <div className='productList'>
            <ProductCard key={2} title='pizza' text='is delicious dish' img={pizza} price={20} />
        </div>
    )
}

export default ProductList
