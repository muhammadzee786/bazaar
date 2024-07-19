import { FAMILY, SIZE, COLOR } from '@theme/typography'

export default {
  /* modal */
  modal: {
    width: '90%',
    minHeight: '90%',
    height: 'auto',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  modalClose: {
    justifyContent: 'space-between'
  },
  modalCloseBtn: {
    alignSelf: 'flex-end'
  },
  modalCloseBtnIcon: {
    fontSize: SIZE.SIZE_18,
    color: COLOR.GREYDark
  },

  modalHeader: {
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_36,
    color: COLOR.DARK,
    textAlign: 'center',
    marginBottom: 30
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  },
  headerLine: {
    height: 32,
    borderLeftWidth: 1.5,
    borderColor: COLOR.PRIMARY,
    marginRight: 10
  },
  headerTitle: {
    fontFamily: FAMILY.GEO_SEMIBOLD,
    fontSize: SIZE.SIZE_24,
    color: COLOR.SUB_TITLE
  },
  headerSubTitle: {
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DARK
  },
  content: {
    marginBottom: 15
  },
  desc: {
    fontFamily: FAMILY.CHIRP_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    lineHeight: 24
  }

}
