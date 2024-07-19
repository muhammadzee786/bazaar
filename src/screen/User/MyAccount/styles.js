import { COLOR, FAMILY, SIZE } from '@theme/typography'
import { color } from 'react-native-reanimated'

export default {
  header: {
    backgroundColor: COLOR.LIGHT,
    paddingHorizontal: 20,
    marginBottom: 15
  },
  headerRow: {
    flexDirection: 'row'
  },
  headerTitle: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_24,
    color: COLOR.DARK
  },
  headerDesc: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },

  avatar: {
    marginVertical: 15
  },
  avatarContainer: {
    position: 'relative',
    width: 100,
    height: 100
  },
  avatarImg: {
    width: 100,
    height: 100,
    borderRadius: 5
  },
  avatarBtn: {
    backgroundColor: COLOR.LIGHT,
    paddingVertical: 5,
    paddingHorizontal: 5,
    position: 'absolute',
    right: 0,
    bottom: 0,
    borderRadius: 5
  },
  avatarBtnIcon: {
    fontSize: SIZE.SIZE_18,
    color: COLOR.DARK
  },

  form: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  formHeader: {
    flexDirection: 'row',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: COLOR.SMOKE_DARK,
    marginBottom: 15
  },
  formHeaderTitle: {
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_20,
    color: COLOR.DARK
  },
  formLabel: {
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    marginBottom: 5
  },
  formDesc: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK,
    marginVertical: 10
  },
  formRow: {
    flexDirection: 'column',
    marginBottom: 10
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  formGender: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5
  },
  formGenderLabel: {
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    marginHorizontal: 5
  },
  formContent: {
    paddingHorizontal: 5,
    paddingVertical: 30
  },
  formInput: {
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: COLOR.SMOKE,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLOR.SMOKE_DARK
  },
  formInputIcon: {
    width: 24,
    textAlign: 'center',
    fontSize: SIZE.SIZE_20,
    color: COLOR.GREY
  },
  formBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLOR.PRIMARY,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 5
  },
  formBtnText: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_16,
    color: COLOR.LIGHT
  },
  formBtnIcon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.LIGHT
  },

  /* Tab */
  tabs: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: COLOR.SMOKE_DARK,
    borderRadius: 5
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 5
  },
  tabActive: {
    flex: 1,
    paddingVertical: 15,
    backgroundColor: COLOR.SMOKE_DARK,
    borderRadius: 5
  },
  tabText: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_16,
    color: COLOR.GREY_DARK,
    textAlign: 'center'
  },
  tabActiveText: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK,
    textAlign: 'center'
  }

}
