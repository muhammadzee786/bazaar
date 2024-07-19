import { COLOR, FAMILY, SIZE } from '@theme/typography'

export default {

  /* header */
  header: {
    backgroundColor: COLOR.DEFAULT,
    paddingHorizontal: 10,
    paddingBottom: 10
  },
  headerTitle: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_20,
    color: COLOR.LIGHT,
    textAlign: 'center'
  },
  headerDesc: {
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.LIGHT,
    textAlign: 'center'
  },

  /* search */
  search: {
    backgroundColor: COLOR.DEFAULT,
    height: 300
  },
  searchGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.LIGHT,
    marginHorizontal: 15,
    borderRadius: 5
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  searchBtn: {
    paddingVertical: 5,
    paddingHorizontal: 15
  },
  searchBtnIcon: {
    fontSize: SIZE.SIZE_18,
    color: COLOR.GREY
  },

  /* categories */
  category: {
    backgroundColor: COLOR.LIGHT,
    shadowColor: '#999',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    marginHorizontal: 15,
    marginVertical: 15,
    borderRadius: 5,
    paddingVertical: 10,
    marginTop: -230
  },
  categoryItem: {
    flex: 1,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoryThumb: {
    width: 42,
    height: 42,
    marginBottom: 10
  },
  categoryName: {
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_13,
    color: COLOR.DARK,
    textAlign: 'center'
  },

  /* item list */
  itemContainer: {
    marginTop: 15
  },
  itemHeader: {
    marginHorizontal: 15,
    marginVertical: 20
  },
  itemHeaderTitle: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DARK
  },

  item: {
    width: 260,
    backgroundColor: COLOR.LIGHT,
    shadowColor: '#999',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
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
    paddingHorizontal: 5,
    paddingVertical: 5
  },
  itemFlag: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 5
  },
  itemFlagText: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_12,
    color: COLOR.LIGHT
  },
  itemView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.GREY_DARK,
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 5,
    display: 'none'
  },
  itemViewIcon: {
    fontSize: SIZE.SIZE_14,
    color: COLOR.LIGHT
  },
  itemViewText: {
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_10,
    color: COLOR.LIGHT,
    marginHorizontal: 5
  },
  itemBot: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  itemRow: {
    flexDirection: 'row'
  },
  itemCol: {
    flex: 1
  },
  itemName: {
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    marginBottom: 5
  },
  itemThumb: {
    width: 36,
    height: 36,
    marginBottom: 10
  },
  itemPrice: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DARK,
    marginBottom: 10
  },
  itemCategory: {
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_10,
    color: COLOR.GREY,
    marginHorizontal: 5
  },
  itemDate: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_10,
    color: COLOR.GREY,
    marginHorizontal: 5
  },
  itemIcon: {
    fontSize: SIZE.SIZE_10,
    color: COLOR.GREY
  },
  itemBtn: {
    backgroundColor: COLOR.GREY_TRANSPARENT,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 5
  },
  itemBtn2: {
    marginLeft: 5
  },
  itemBtnIcon: {
    fontSize: SIZE.SIZE_16,
    color: COLOR.GREY
  },
  itemBtnActiveIcon: {
    fontSize: SIZE.SIZE_16,
    color: COLOR.DEFAULT
  },
  postFlag: {
    position: 'absolute',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 5,
    top: 0,
    left: 0,
    borderWidth: 1,
    borderColor: '#FF0000',
    zIndex: 2
  },
  postFlagText: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_10,
    color: COLOR.LIGHT
  },
  postPremiumPlus: {
    backgroundColor: COLOR.SUCCESS
  },
  postPremium: {
    backgroundColor: COLOR.WARNING
  },

  cityContainer: {
    marginBottom: 50
  },
  itemCity: {
    width: '30%',
    backgroundColor: COLOR.LIGHT,
    alignItems: 'center',
    shadowColor: COLOR.GREY,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginHorizontal: 5,
    marginVertical: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 5
  },

  /* footer */
  footer: {
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: COLOR.LIGHT,
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 5
  },
  footerBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 5,
    marginHorizontal: 5
  },
  footerBtnIcon: {
    fontSize: SIZE.SIZE_16,
    color: COLOR.GREY
  },
  footerBtnText: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginHorizontal: 5
  }
}
