import { useMemo } from "react"
import { ProductItem } from "./ProductItem"

type SearchResultProps = {
  results: Array<{
    id: number
    price: number
    title: string,
    priceFormatted: string
  }>,
  totalPrice: number
  addToWishlist: (id: number) => void
}

export function SearchResults({results, totalPrice, addToWishlist}: SearchResultProps) {
  
  return (
    <div>
      <div>
        <strong>{totalPrice}</strong>
      </div>
      {results.map((product => {
        return (
          <ProductItem key={product.id} product={product} addToWishlist={addToWishlist} />
        )
      }))}
    </div>
  )
}