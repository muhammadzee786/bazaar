import { COLOR, FAMILY, SIZE } from '@theme/typography'

export default {
  modalContainer: {
    width: '90%',
    minHeight: '30%',
    height: 'auto',
    borderRadius: 5
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  modalHeaderBtn: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  modalHeaderIcon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.DARK
  },
  modalContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 30
  },
  modalContentIcon: {
    fontSize: SIZE.SIZE_48,
    color: COLOR.DARK,
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
    lineHeight: 18
  },
  modalCol: {
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
}
