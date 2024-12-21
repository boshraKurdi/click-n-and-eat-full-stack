import { Container } from 'react-bootstrap'
import './Food.css'
import { Cart, MainTitle, ProductList } from '@components/index'
import CategoryList from '@components/Categories/CategoryList/CategoryList'
const Food = () => {

    return (
        <div className='food'>
            <Container>
                <MainTitle>Food</MainTitle>
                <CategoryList />

                <Cart count={0} />
                <ProductList />
            </Container>
        </div>
    )
}

export default Food
