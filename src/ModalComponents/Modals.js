import { NumberedList } from "../Lists/NumberedList";
import { LargeProductListItem } from "../Lists/product/LargeProductListItem";
import { Modal } from "./Modal";

const products = [{
  name: 'Flat-Screen TV',
  price: '$300',
  description: 'Huge LCD screen, a great deal',
  rating: 4.5,
}, {
  name: 'Basketball',
  price: '$10',
  description: 'Just like the pros use',
  rating: 3.8,
}, {
  name: 'Running Shoes',
  price: '$120',
  description: 'State-of-the-art technology for optimum running',
  rating: 4.2,
}];

function Modals() {
  return (<>
    <Modal>
      <NumberedList
        items={products}
        resourceName="product"
        itemComponent={LargeProductListItem}
      />
    </Modal>
  </>)
}

export default Modals