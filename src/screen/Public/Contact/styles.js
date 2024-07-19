import { COLOR, FAMILY, SIZE } from '@theme/typography'

export default {
  contact: {
    flex: 1,
  },

  contactHeader: {
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  contactHeaderTitle: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_24,
    color: COLOR.DARK,
    marginBottom: 5
  },
  contactHeaderDesc: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK
  },

  contactForm: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  contactRow: {
    flexDirection: 'row'
  },
  contactGroup: {
    marginBottom: 15
  },
  contactLabel: {
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    textTransform: 'uppercase',
    marginBottom: 5
  },
  contactInputGroup: {
    flex: 1,
  },
  contactSelectGroup: {
    flex: 1,
    backgroundColor: COLOR.SMOKE_DARK,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  contactInput: {
    backgroundColor: COLOR.SMOKE_DARK,
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 5
  },
  contactInputMulti: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  contactBtn: {
    backgroundColor: COLOR.DEFAULT,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 5
  },
  contactBtnText: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK,
    textAlign: 'center'
  },
}
