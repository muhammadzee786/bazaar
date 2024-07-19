import { COLOR, FAMILY, SIZE } from '@theme/typography'

export default {
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: COLOR.LIGHT
  },
  header: {
    marginBottom: 30
  },
  stepHeader: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_20,
    color: COLOR.DARK
  },
  stepHeaderTitle: {
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    marginBottom: 5
  },

  postRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  postLabel: {
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    marginBottom: 5
  },
  postGroup: {
    flex: 1,
    marginBottom: 15
  },
  postInput: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    backgroundColor: COLOR.SMOKE,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5
  },
  postInputMulti: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    backgroundColor: COLOR.SMOKE,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    textAlignVertical: 'top'
  },
  postSelect: {
    backgroundColor: COLOR.SMOKE,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
    marginBottom: 15
  },
  postPicker: {
    backgroundColor: COLOR.SMOKE,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
    marginBottom: 10
  },
  postCustomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  postCustomLabel: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    marginLeft: 5
  },
  postDesc: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    marginHorizontal: 5
  },

  postPhoto: {
    marginVertical: 20
  },
  postPhotoTitle: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DARK
  },
  postPhotoUpload: {
    backgroundColor: COLOR.SMOKE,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: COLOR.SMOKE_DARK,
    borderRadius: 10,
    marginBottom: 20
  },
  postPhotoBtn: {
    flexDirection: 'row',
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 5,
    marginVertical: 50
  },
  postPhotoBtnIcon: {
    fontSize: SIZE.SIZE_20,
    color: COLOR.LIGHT
  },
  postPhotoBtnText: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_14,
    color: COLOR.LIGHT,
    marginHorizontal: 10
  },

  content: {
  },
  photo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    flexWrap: 'wrap'
  },
  photoItem: {
    backgroundColor: COLOR.SMOKE,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 1,
    width: '32%',
    marginRight: 3,
    marginBottom: 3,
    borderRadius: 5
  },
  photoItemImg: {
    width: '100%',
    height: 100,
    borderRadius: 5
  },
  photoItemBtn: {
    position: 'absolute',
    backgroundColor: COLOR.ERROR,
    right: 0,
    top: 0,
    marginRight: 5,
    marginTop: 5,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  photoItemBtnIcon: {
    fontSize: SIZE.SIZE_16,
    color: COLOR.LIGHT
  },

  footer: {
    marginVertical: 20,
    justifyContent: 'flex-end'
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.DEFAULT,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginBottom: 20
  },
  btnText: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_16,
    color: COLOR.LIGHT,
    marginLeft: 10
  },
  btnIcon: {
    fontSize: SIZE.SIZE_18,
    color: COLOR.LIGHT
  }
}
