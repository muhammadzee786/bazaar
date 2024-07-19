import { COLOR, FAMILY, SIZE } from '@theme/typography'

export default {
  signUp: {
    flex: 1
  },

  header: {
    backgroundColor: COLOR.DEFAULT,
    paddingHorizontal: 20,
    paddingVertical: 15,
    minHeight: 250,
    zIndex: 1
  },
  headerTitle: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_24,
    color: COLOR.LIGHT
  },
  headerDesc: {
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.LIGHT
  },
  row: {
    flexDirection: 'row'
  },

  content: {
    width: '100%',
    top: -120,
    zIndex: 2
  },
  formContent: {
    backgroundColor: COLOR.LIGHT,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: COLOR.SHADOW,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  formGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: COLOR.SMOKE_DARK
  },
  formLast: {
    borderBottomWidth: 0
  },
  formRow: {
    flexDirection: 'row'
  },
  formInput: {
    flex: 1,
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    paddingVertical: 15
  },
  formInputIcon: {
    fontSize: SIZE.SIZE_18,
    color: COLOR.GREY_DARK
  },
  formPicker: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: COLOR.SMOKE_DARK
  },
  btnSave: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  btnSaveText: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_16,
    color: COLOR.LIGHT
  },
  btnSaveIcon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.LIGHT
  },

  forgotBtn: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 15,
    justifyContent: 'flex-end',
    marginBottom: 50
  },
  forgotBtnText: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },
  formFooter: {
    marginHorizontal: 20,
    marginVertical: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formFooterText: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY_DARK
  },
  loginBtn: {
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  loginBtnText: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },

  btnTab: {},
  btnTabActive: {
    borderWidth: 1,
    borderColor: COLOR.SMOKE_DARK
  }

}
