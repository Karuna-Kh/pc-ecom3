import Items from "./Items";
import { 
  PRODUCTS, 
  RESOURCE, 
  COMPANY, 
  SUPPORT,
} from './Menus';

const ItemContainer = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4
    gap-6 sm:px-8 px-5 py-16'>
      <Items Links={PRODUCTS} title='PRODUCTS' />
      <Items Links={RESOURCE} title='RESOURCE' />
      <Items Links={COMPANY} title='COMPANY' />
      <Items Links={SUPPORT} title='SUPPORT' />
    </div>
  )
}

export default ItemContainer