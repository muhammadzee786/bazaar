import { COLOR, FAMILY, SIZE } from '@theme/typography'

export default {
  lang: {
    flex: 1,
  },

  langHeader: {
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  langHeaderTitle: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_24,
    color: COLOR.DARK,
    marginBottom: 5
  },
  langHeaderDesc: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK
  },

  langForm: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  langPick: {
    backgroundColor: COLOR.SMOKE,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  langRow: {
    flexDirection: 'row'
  },
  langGroup: {
    marginBottom: 15
  },
  langLabel: {
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    textTransform: 'uppercase',
    marginBottom: 5
  },
  langInputGroup: {
    flex: 1,
  },
  langSelectGroup: {
    flex: 1,
    backgroundColor: COLOR.SMOKE_DARK,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  langInput: {
    backgroundColor: COLOR.SMOKE_DARK,
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 5
  },
  langInputMulti: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  langBtn: {
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 5
  },
  langBtnText: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_16,
    color: COLOR.LIGHT,
    textAlign: 'center'
  },
}
