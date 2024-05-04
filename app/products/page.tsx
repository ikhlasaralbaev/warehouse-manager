import ProductsComponent from '@/components/page-components/products-component/products-component'

const Products = () => {
	if (typeof window === 'undefined') return
	return <ProductsComponent />
}

export default Products
