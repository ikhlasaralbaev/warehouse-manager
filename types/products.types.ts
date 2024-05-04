import { ICategoryType } from './categories.types'

export interface IProductType {
	id: string
	title: string
	price: number
	description: string
	category: ICategoryType
}

export interface IProductTableDataType {
	title: string
	price: number
	description: string
	category: string
	action: JSX.Element
}
