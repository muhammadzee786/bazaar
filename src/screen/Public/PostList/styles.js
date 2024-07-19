import { COLOR, FAMILY, SIZE } from '@theme/typography'

export default {
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  /* Search */
  searchContainer: {
    marginBottom: 15
  },
  searchInputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:COLOR.SMOKE_LIGHT,
    marginHorizontal: 15,
    borderRadius: 10
  },
  searchIcon:{
    fontSize: SIZE.SIZE_20,
    color: COLOR.GREY_LIGHT
  },
  searchInputCol: {
    flex: 1
  },
  searchInput: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_14,
    paddingVertical: 15,
    paddingHorizontal: 15
  },

  /** -- View Type -- **/
  view: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 5,
    justifyContent: 'flex-end'
  },
  viewBtn: {
    paddingHorizontal: 5,
    paddingVertical: 10
  },
  viewBtnIcon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.SMOKE_DARK
  },
  viewBtnActive: {
    paddingHorizontal: 5,
    paddingVertical: 10
  },
  viewBtnActiveIcon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.DARK
  },

  /** Post -- **/
  postContainer: {
    
  },
  postItem: {
    backgroundColor: COLOR.LIGHT,
    elevation: 10,
    shadowColor: COLOR.GREY,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    borderRadius: 10,
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 10
  },
  postGridItem: {
    width: '44%',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: COLOR.LIGHT,
    elevation: 10,
    shadowColor: COLOR.GREY,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
  postImg: {
    width: 120,
    height: 120,
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 15
  },
  postGridImg: {
    width: 120,
    height: 120,
    marginVertical: 10,
    alignSelf: 'center'
  },
  postContent: {
    flex: 1
  },
  postGridContent: {
    paddingHorizontal: 10,
    paddingBottom: 10
  },  
  postTitle: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY_LIGHT
  },
  postDesc: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginTop: 2
  },
  postPrice: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_24,
    color: COLOR.GREY_DARK,
    marginBottom: 5
  },
  postCategory: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_DARK
  },
  postDate: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_10,
    color: COLOR.GREY,
    marginHorizontal: 5
  },
  postIcon: {
    fontSize: SIZE.SIZE_10,
    color: COLOR.GREY,
    marginRight: 5
  },
  postCol: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  postCol2: {
  },
  
  postWishlist: {
    position: 'absolute',
    alignSelf: 'flex-start',
    top: 0,
    right: 0,
    marginTop: -7
  },
  postGridWishlist: {
    position: 'absolute',
    top: 0,
    right: 0,
    marginTop: -10
  },
  postWishlistBtn: {
    alignSelf: 'flex-end',
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  postWishlistBtnIcon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.SMOKE_DARK
  },
  postWishlistBtnActive: {
    alignSelf: 'flex-end',
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  postWishlistBtnActiveIcon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.DEFAULT
  },
  postFlag: {
    position: 'absolute',
    top: 0,
    left: 0,
    marginTop: 10,
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 5
  },
  postFlagText: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_12,
    color: COLOR.LIGHT
  },
  postFlagPremium: {
    backgroundColor: COLOR.SUCCESS
  },
  postFlagPremiumPlus: {
    backgroundColor: COLOR.WARNING
  },

 

  /* Sort By */
  sortBy: {
    width: 320,
    height: 200,
    backgroundColor: COLOR.LIGHT,
    borderRadius: 5,
    paddingVertical: 15
  },
  sortByBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: COLOR.SMOKE_DARK
  },
  sortByBtnText: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY_LIGHT
  },
  sortByBtnActiveText: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  sortByBtnIcon: {
    fontSize: SIZE.SIZE_18,
    color: COLOR.DARK
  },
  sortByBtnLast: {
    borderBottomWidth: 0
  },


  /* Filter */
  modal: {
    width: '100%',
    height: '100%'
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor:COLOR.LIGHT
  },
  modalHeaderTitle: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_24,
    color: COLOR.GREY_DARK
  },
  modalHeaderBtn: {
    paddingHorizontal: 10,    
  },
  modalHeaderBtnIcon:{
    fontSize: SIZE.SIZE_24,
    color: COLOR.GREY_LIGHT
  },
  modalBody: {
    flex: 1,
    paddingVertical: 20
  },
  modalLabel: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY_DARK,
    marginBottom: 8,
    textTransform: 'uppercase',
    paddingHorizontal: 15
  },
  modalPicker: {
    marginHorizontal: 15,
    marginBottom: 30,
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    borderColor:COLOR.SMOKE_DARK,
    borderWidth: 1,
    borderRadius: 5
  },
  modalSelect: {
    marginBottom: 30
  },
  modalSelectBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: COLOR.SMOKE_LIGHT
  },
  modalSelectBtnText: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  modalSelectBtnIcon: {
    borderColor:COLOR.GREY_LIGHT,
    fontSize: SIZE.SIZE_24,
    color: COLOR.GREY_LIGHT,
    borderRadius: 20,
    marginHorizontal: 10
  },
  modalSelectBtnIconActive: {
    borderColor:COLOR.PRIMARY,
    fontSize: SIZE.SIZE_24,
    color: COLOR.PRIMARY,
    borderRadius: 20,
    marginHorizontal: 10
  },
  modalAttribute: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginBottom: 30
  },
  modalAttributeSelected: {
    borderWidth: 2,
    borderColor:COLOR.GREY_DARK
  },
  modalAttributeBtn: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(0,0,0,0.09)',
    borderWidth: 1,
    borderRadius: 20,
    padding: 15,
    marginRight: 5
  },
  modalAttributeBtnText: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY
  },
  modalAttributeBtnTextActive: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_DARK
  },
  itemValue: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },

  modalFooter: {
    flexDirection: 'row',
    backgroundColor:COLOR.LIGHT,
    paddingVertical: 15,
    paddingHorizontal: 10
  },
  modalClearBtn: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor:COLOR.SMOKE_DARK,
    marginHorizontal: 10
  },
  modalClearBtnText: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY_DARK,
    textAlign: 'center'
  },
  modalApplyBtn: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor:COLOR.PRIMARY,
    borderWidth: 1,
    borderColor:COLOR.PRIMARY,
    marginHorizontal: 10
  },
  modalApplyBtnText: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_14,
    color: COLOR.LIGHT,
    textAlign: 'center'
  },

  /* -- Footer -- */
  bot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLOR.LIGHT,
    borderTopWidth: 1,
    borderColor: COLOR.SMOKE,
    height: 50
  },
  fBtnItems: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fBtnIcon: {
    fontSize: SIZE.SIZE_18,
    color: COLOR.DARK,
    marginRight: 5
  },
  botTextActive: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  botText: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    marginLeft: 5
  },

  custom: {
    paddingHorizontal: 15,
    marginBottom: 20
  },
  customHeader: {
    flexDirection: 'row',
    marginBottom: 10
  },
  customHeaderTitle: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    textTransform: 'uppercase'
  },
  customRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  customText: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    marginHorizontal: 10
  },
  customPicker: {
    borderWidth: 1,
    borderColor: COLOR.SMOKE_DARK,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 5
  },
}
