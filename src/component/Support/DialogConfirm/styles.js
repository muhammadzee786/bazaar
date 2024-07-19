import { COLOR, FAMILY, SIZE } from '@theme/typography'

export default {
  modalContainer: {
    width: '90%',
    minHeight: '20%',
    height: 'auto',
    borderRadius: 10
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  modalHeaderBtn: {
    paddingHorizontal: 15,
    paddingVertical: 20
  },
  modalContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  modalContentIcon: {
    fontSize: SIZE.SIZE_48,
    color: COLOR.RED,
    paddingBottom: 20
  },
  modalContentTitle: {
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_24,
    color: COLOR.DARK,
    marginBottom: 10
  },
  modalContentDesc: {
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY,
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 15
  },
  modalCol: {
    flexDirection: 'row',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },

  noBtn: {
    backgroundColor: COLOR.ERROR,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 10
  },
  noBtnText: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_16,
    color: COLOR.LIGHT
  },

  yesBtn: {
    backgroundColor: COLOR.SUCCESS,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 10
  },
  yesBtnText: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_16,
    color: COLOR.LIGHT
  }

}
