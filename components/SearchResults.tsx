import { useMemo } from "react"
import { ProductItem } from "./ProductItem"

type SearchResultProps = {
  results: Array<{
    id: number,
    price: number,
    title: string
  }>
}

export function SearchResults({results}: SearchResultProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((acc, product) => {
      return acc + product.price
    }, 0)
  }, [results])


  return (
    <div>
      <div>
        <strong>{totalPrice}</strong>
      </div>
      {results.map((product => {
        return (
          <ProductItem key={product.id} product={product} />
        )
      }))}
    </div>
  )
}