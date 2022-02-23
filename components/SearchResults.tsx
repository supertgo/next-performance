import { List, ListRowRenderer } from 'react-virtualized'
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
  const rowRenderer: ListRowRenderer = ({
    index, key, style
  }) => {
    return (
      <div key={key} style={style}>
        <ProductItem 
        product={results[index]}   
        addToWishlist={addToWishlist} 
      />
      </div>
    )
  }
  return (
    <div>
      <div>
        <strong>{totalPrice}</strong>
      </div>

      <List 
        height={results.length}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
      
    </div>
  )
}