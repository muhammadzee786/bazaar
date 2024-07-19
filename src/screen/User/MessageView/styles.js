import { COLOR, FAMILY, SIZE } from '@theme/typography'

export default {
  chat: {
    flex: 1
  },
  chatHeader: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  chatHeaderAd: {
    width: 40,
    height: 40,
    borderRadius: 5
  },
  chatHeaderCol: {
    flex: 1
  },
  chatHeaderRight: {
    flexDirection: 'row',
    display: 'none'
  },
  chatHeaderBtn: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: COLOR.SMOKE_DARK,
    borderRadius: 5,
    marginRight: 5
  },
  chatHeaderBtnIcon: {
    fontSize: SIZE.SIZE_18,
    color: COLOR.DARK
  },

  chatRow: {
    flexDirection: 'row'
  },
  chatAdName: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK,
    marginLeft: 10
  },
  chatSubject: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_16,
    color: COLOR.GREY_LIGHT
  },

  chatContent: {
    flex: 1,
    backgroundColor: COLOR.SMOKE_DARK
  },
  chatEmpty: {
    // flexGrow: 1
  },
  chatItem: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  chatAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18
  },
  chatItemCol: {
    flex: 1
  },
  chatItemRow: {
    flexDirection: 'row'
  },
  chatItemContent: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: COLOR.LIGHT,
    borderRadius: 20
  },
  chatItemLeft: {
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 0,
    marginLeft: 10
  },
  chatItemRight: {
    alignSelf: 'flex-end',
    backgroundColor: COLOR.GREY,
    borderBottomRightRadius: 0,
    marginRight: 10
  },
  chatItemMsg: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  chatItemDate: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK,
    marginTop: 5,
    marginLeft: 10
  },
  chatItemRead: {
    fontSize: SIZE.SIZE_18,
    color: COLOR.DARK,
    marginHorizontal: 5
  },

  chatBot: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    maxHeight: 80,
    paddingRight: 15
  },
  chatBotGroup: {
    flex: 1
  },
  chatBotInput: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    paddingHorizontal: 15,
    paddingVertical: 10,
    maxHeight: 70
  },
  chatAttachBtn: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5
  },
  chatBtn: {
    width: 40,
    height: 40,
    backgroundColor: COLOR.PRIMARY,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  chatPlaceholderBtn: {
    width: 40,
    height: 40,
    borderRadius: 5
  },
  chatBtnIcon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.LIGHT
  }

}
