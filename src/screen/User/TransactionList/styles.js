import { COLOR, FAMILY, SIZE } from '@theme/typography'

export default {
  item: {
    backgroundColor: COLOR.LIGHT,
    shadowColor: COLOR.SHADOW,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemCol: {
    flex: 1
  },
  itemName: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK
  },
  itemCode: {
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.GREY
  },
  itemPrice: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_20,
    color: COLOR.DARK,
    marginHorizontal: 5
  },
  itemDuration: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY_DARK
  },
  itemFlag: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 3,
    marginVertical: 5
  },
  itemFlagName: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_16,
    color: COLOR.LIGHT
  },
  

  itemBot: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  itemBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemDate: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginHorizontal: 5
  },
  itemIcon: {
    fontSize: SIZE.SIZE_18,
    color: COLOR.GREY
  },

  itemType: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY
  },
  itemPayment: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
}
