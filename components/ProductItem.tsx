import { memo, useState } from 'react'
import dynamic from 'next/dynamic'
import { AddProductToWishListProps } from './AddProductToWishList'


const AddProductToWishList = dynamic<AddProductToWishListProps>(() => {
  return import('./AddProductToWishList').then(mod => mod.AddProductToWishList)
}, {
  loading: () => <span>Carregando</span>
})

type ProductItemProps = {
  product: {
    id: number
    price: number
    title: string,
    priceFormatted: string
  },
  addToWishlist: (id: number) => void
}

function ProductItemComponent({product, addToWishlist}:ProductItemProps ) {
  const [isAddingToWishList, setIsAddingToWishlit] = useState(false)
  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlit(true)}>adicionar aos favoritos</button>
     {isAddingToWishList && 
     <AddProductToWishList onAddToWishList={() => addToWishlist(product.id)} onRequestClose={() => setIsAddingToWishlit(false)}  />}
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
}) 