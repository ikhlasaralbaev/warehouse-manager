import dynamic from 'next/dynamic'

const CategoriesComponent = dynamic(
	() =>
		import(
			'@/components/page-components/categories-component/categories-component'
		),
	{
		ssr: false,
	}
)

const Categories = () => {
	return <CategoriesComponent />
}

export default Categories
