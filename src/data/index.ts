import todaysSpecial from './todays-special';
import categoryList from './category-list';
import popularMenu from './popular-menu';
import addons from './addons';
import cartItems from './cart-items';
import orders from './orders';

export default {
  todaysSpecial,
  categoryList,
  popularMenu,
  addons,
  cartItems,
  orders: orders.filter(() => false)
};
