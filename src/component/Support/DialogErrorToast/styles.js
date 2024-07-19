import { COLOR, FAMILY, SIZE } from '@theme/typography'

export default {
  modalContainer: {
    width: '86%',
    height: '44%',
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
  modalContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  modalContentIcon: {
    fontSize: SIZE.SIZE_72,
    paddingVertical: 20
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
