import { COLOR, FAMILY, SIZE } from '@theme/typography'

export default {
  msg: {
    flex: 1
  },

  msgHeader: {
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  msgHeaderTitle: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_24,
    color: COLOR.DARK
  },
  msgHeaderDesc: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },

  msgTabs: {
    paddingHorizontal: 15,
    marginBottom: 15
  },
  msgTab: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: COLOR.SMOKE_DARK,
    borderRadius: 5,
    marginRight: 5
  },
  msgTabSelected: {
    backgroundColor: COLOR.PRIMARY
  },
  msgTabText: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  msgTabSelectedText: {
    fontFamily: FAMILY.SEMI_BOLD,
    color: COLOR.LIGHT
  },

  msgContent: {
    flex: 1
  },
  msgRow: {
    flexDirection: 'row'
  },
  msgItem: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: COLOR.SMOKE_DARK
  },
  msgLeft: {
    width: 64,
    alignItems: 'center',
    justifyContent: 'center'
  },
  msgAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  msgName: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK,
    textAlign: 'center',
    marginTop: 5
  },
  msgStatus: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLOR.GREY_LIGHT,
    position: 'absolute',
    bottom: 0,
    right: 0
  },

  msgCol: {
    flex: 1,
    paddingLeft: 15
  },
  msgTitle: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK
  },
  msgDesc: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    marginBottom: 5
  },
  msgDate: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_LIGHT
  },
  msgUnRead: {
    fontFamily: FAMILY.SEMI_BOLD
  },
  msgRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  msgRightRow: {
    flexDirection: 'row'
  },
  msgOption: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: COLOR.SMOKE_DARK,
    borderRadius: 5,
    marginRight: 5
  },
  msgOptionIcon: {
    fontSize: SIZE.SIZE_18,
    color: COLOR.DARK
  }

}
