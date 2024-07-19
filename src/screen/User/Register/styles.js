import { COLOR, FAMILY, SIZE } from '@theme/typography';

export default {
  signUp: {
    flex: 1,
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
    color: COLOR.LIGHT,
    marginVertical: 10
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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  formGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: COLOR.BORDER
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
  formSelect: {
    flex: 1,
    paddingVertical: 15
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
    color: COLOR.LIGHT,
  },
  btnSaveIcon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.LIGHT,
  },

  termBtn: {
    flexDirection: 'row',
    marginVertical: 30
  },
  termBtnText: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_DARK,
  },
  formFooter: {
    marginHorizontal: 20,
    marginVertical: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formFooterText: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY_DARK,
  },
  loginBtn: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  loginBtnText: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
  },

  /* Modal */
  modal: {
    width: '90%',
    minHeight: '25%',
    height: 'auto',
    backgroundColor: COLOR.LIGHT,
    shadowColor: COLOR.SHADOW,
    borderRadius: 10,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  modalContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: 50
  },
  modalCloseBtn: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  modalCloseBtnIcon: {
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK,
  },
  modalSuccessIcon: {
    fontSize: SIZE.SIZE_48,
    color: COLOR.SUCCESS,
    marginBottom: 20
  },
  modalTitle: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_24,
    color: COLOR.DARK,
  },
  modalDesc: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    textAlign: 'center'
  }

};
