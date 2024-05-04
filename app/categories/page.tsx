import CategoriesComponent from '@/components/page-components/categories-component/categories-component'

const Categories = () => {
	if (typeof window === 'undefined') return
	return <CategoriesComponent />
}

export default Categories
