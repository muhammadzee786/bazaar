import { COLOR, FAMILY, SIZE } from '@theme/typography'

export default {
  item: {
    backgroundColor: COLOR.LIGHT,
    shadowColor: "#CCC",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 10
  },
  itemTop: {
    backgroundColor: COLOR.SMOKE,
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  itemTopImg: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  itemTopCol: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  itemView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.GREY_TRANSPARENT,
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 5
  },
  itemViewIcon: {
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY_LIGHT
  },
  itemViewText: {
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_10,
    color: COLOR.GREY_LIGHT,
    marginHorizontal: 5
  },

  itemBot: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemCol: {
    flex: 1
  },
  itemName: {
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK,
    marginBottom: 5
  },
  itemPrice: {
    fontFamily: FAMILY.BOLD,
    fontSize: SIZE.SIZE_20,
    color: COLOR.DARK,
    marginBottom: 10
  },
  itemCategory: {
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginHorizontal: 5
  },
  itemDate: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginHorizontal: 5
  },
  itemIcon: {
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY
  },
  itemBtn: {
    backgroundColor: COLOR.SMOKE_DARK,
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 5,
    marginBottom: 5
  },
  itemBtn2: {
    marginLeft: 5
  },
  itemBtnIcon: {
    fontSize: SIZE.SIZE_20,
    color: COLOR.DARK
  },
}