import { COLOR, FAMILY, SIZE } from '@theme/typography'

export default {
  post: {
  },
  postHeader: {
  },
  postImg: {
    width: '100%',
    height: 300,
    marginBottom: 15
  },
  postHeaderRow: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 0,
    left: 0,
    width: '100%'
  },
  postHeaderCol: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  postHeaderBtn: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  postHeaderBtnIcon: {
    color: COLOR.DARK
  },
  postBookmarkBtnIcon: {
    color: COLOR.SMOKE_DARK
  },
  postBookmarkBtnActiveIcon: {
    color: COLOR.DEFAULT
  },

  postContainer: {
    paddingHorizontal: 20
  },
  postRow: {
    flexDirection: 'row'
  },
  postCol: {
    flex: 1
  },
  postColRight: {
    flexDirection: 'row'
  },
  postColBtn: {
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  postName: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_20,
    color: COLOR.DARK,
    marginBottom: 10
  },
  postLocation: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginRight: 10
  },
  postDate: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY
  },
  postCount: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY,
    marginRight: 10
  },
  postPrice: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_28,
    color: COLOR.DARK
  },
  postGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  postGroupIcon: {
    fontSize: SIZE.SIZE_18,
    color: COLOR.GREY,
    marginRight: 5
  },

  /* Custom Fields */
  postCustom: {
    marginTop: 15,
    marginBottom: 30
  },
  postSubTitle: {
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DARK,
    marginBottom: 20
  },
  postCustomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: COLOR.SMOKE_DARK
  },
  postCustomLabel: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY,
    marginRight: 20
  },
  postCustomCol: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  postCustomValue: {
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    textAlign: 'right'
  },
  postPhotos: {
    marginBottom: 20
  },
  postPhotoBtn: {
    width: '32%',
    marginRight: 5,
    marginBottom: 5
  },
  postPhotoImg: {
    width: '100%',
    height: 100,
    borderRadius: 5
  },

  /* Author */
  authorContainer: {
    paddingVertical: 15
  },
  author: {
    marginHorizontal: 15,
    paddingVertical: 30,
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 10
  },
  authorTitle: {
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DARK,
    marginBottom: 20
  },
  authorRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  authorCol: {
    flex: 1,
    paddingHorizontal: 10
  },
  authorAvatar: {
    width: 72,
    height: 72,
    borderRadius: 10,
    marginBottom: 10
  },
  authorName: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DARK,
    marginBottom: 10
  },
  authorDate: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY
  },
  authorBtn: {
    paddingHorizontal: 20,
    paddingVertical: 5
  },
  authorBtnText: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
  },

  /* Tab */
  tabs: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    marginHorizontal: 5,
    backgroundColor: COLOR.SMOKE_DARK,
    borderRadius: 5
  },
  tabActive: {
    flex: 1,
    paddingVertical: 15,
    marginHorizontal: 5,
    backgroundColor: COLOR.PRIMARY,
    borderRadius: 5
  },
  tabText: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY,
    textAlign: 'center'
  },
  tabActiveText: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_14,
    color: COLOR.LIGHT,
    textAlign: 'center'
  },

  /* Contact Infor */
  info: {
    marginVertical: 15
  },
  infoItem: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: COLOR.SMOKE_DARK
  },
  infoBox: {
    width: 50
  },
  infoIcon: {
    fontSize: SIZE.SIZE_32,
    color: COLOR.DARK
  },
  infoCol: {
    flex: 1
  },
  infoRow: {
    flexDirection: 'row'
  },
  infoLabel: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    // textTransform: 'uppercase'
  },
  infoValue: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },

  /* Enquiry Form */
  form: {
    minHeight: 200,
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  formText: {
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK
  },
  formContent: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  formRow: {
    marginBottom: 10
  },
  formInput: {
    backgroundColor: COLOR.SMOKE_DARK,
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 5,
    textAlignVertical: 'top'
  },
  formBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLOR.DEFAULT,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexWrap: 'wrap',
    borderRadius: 5
  },
  formBtnText: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_14,
    color: COLOR.LIGHT
  },
  formBtnIcon: {
    fontSize: SIZE.SIZE_18,
    color: COLOR.LIGHT
  },

  /* Placeholder */
  placeholder: {
    marginHorizontal: 15,
    marginBottom: 15
  },
  placeholderRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 15
  },
  placeholderImg: {
    width: 64,
    height: 64,
    borderRadius: 5,
    marginRight: 5,
    marginBottom: 5
  },

  profileBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 15,
    justifyContent: 'space-between',
  },
  profileBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5
  },
  profileBtnText: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    marginHorizontal: 10
  },
  profileEmail: {
    backgroundColor: '#F1F7FF'
  },
  profileEmailIcon: {
    color: '#6481C0'
  },
  profilePhone: {
    backgroundColor: '#FEF7F5'
  },
  profilePhoneIcon: {
    color: '#C2727C'
  },
  profileWhatsapp: {
    backgroundColor: '#F1F8F4'
  },
  profileWhatsappIcon: {
    color: '#7EA68F'
  },




  /* gallery */
  gallery: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    marginBottom: 10
  },
  galleryContainer: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 20
  },
  galleryImg: {
    flex: 1,
    width: 120,
    height: 100,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    borderColor: COLOR.smoke4,
    borderWidth: 1
  },

  /* -- Modal Gallery -- */
  modal: {
    width: '100%',
    height: '100%'
  },
  modalHeader: {
    position: 'absolute',
    width: '100%',
    alignItems: 'flex-end',
    zIndex: 1
  },
  modalHeaderBtn: {
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  modalHeaderBtnIcon: {
    fontSize: SIZE.SIZE_28,
    color: COLOR.DARK
  },

  modalImg: {
    width: '100%',
    height: '100%'
  },
  modalContent: {
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    height: '90%',
    bottom: 0,
    zIndex: 2
  },
  modalLeft: {
    flex: 1,
    justifyContent: 'center'
  },
  modalRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  modalBtn: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.SMOKE_DARK,
    borderRadius: 5
  },
  modalBtnIcon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.DARK
  },

}
