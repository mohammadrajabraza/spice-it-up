import { StyleSheet } from 'react-native';

import { Colors, Dimensions, Spacing } from 'styles';

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: Spacing.vertical.size8,
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    gap: 2,
  },
  date: {
    color: `${Colors.black}80`,
  },
  line: {
    width: '100%',
    height: 2,
    backgroundColor: Colors.darkGrey,
    marginVertical: Spacing.vertical.size20,
  },
  cartItemList: {
    gap: 10,
    marginBottom: Spacing.vertical.size4,
  },
  cartItem: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  cartItemTop: {
    gap: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cartItemPrice: {
    color: Colors.red,
    fontWeight: 'bold',
    verticalAlign: 'middle',
  },
  cartItemQuantity: {
    color: `${Colors.typography20}aa`,
  },
  cartSummaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cartSummaryPrice: {
    fontWeight: 'bold',
  },
  cartSummaryTotal: {
    marginTop: Spacing.vertical.size12,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.grey,
    paddingVertical: Spacing.vertical.size12,
  },
  paymentMethodImage: {
    width: Dimensions.width.size22,
  },
});

export default styles;
