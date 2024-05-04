import dynamic from 'next/dynamic'

const ProductsComponent = dynamic(
	() =>
		import(
			'@/components/page-components/products-component/products-component'
		),
	{
		ssr: false,
	}
)

const Products = () => {
	return <ProductsComponent />
}

export default Products
