import { StyleSheet } from 'react-native'
import { COLOR, FAMILY, SIZE } from '@theme/typography'

export default {
  /* Layout */
  layout: {
    flexGrow: 1,
    backgroundColor: COLOR.LIGHT
  },
  layoutFx: {
    flex: 1,
    backgroundColor: COLOR.LIGHT
  },

  /* Header */
  header: {
    backgroundColor: COLOR.DEFAULT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 5,
    paddingBottom: 20,
    marginBottom: 10
  },
  headerCol: {
    flexDirection: 'row'
  },
  headerIcon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.LIGHT
  },
  headerTitle: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_18,
    color: COLOR.LIGHT,
    lineHeight: SIZE.SIZE_24,
    marginHorizontal: 10
  },
  headerCol2: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.LIGHT,
    borderRadius: 15
  },
  headerCount: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },


  /* Button */
  btnPrimary: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: COLOR.PRIMARY
  },
  btnDefault: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: COLOR.DEFAULT
  },
  btnTransparent: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: 'transparent'
  },
  btnWarning: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  btnWarningText: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  btnDanger: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  btnSuccess: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  btnBack: {
    backgroundColor: COLOR.PRIMARY,
    borderRadius: 5,
    paddingHorizontal: 3,
    paddingVertical: 3
  },

  /* Colors */
  dark: {
    color: COLOR.DARK
  },
  light: {
    color: COLOR.LIGHT
  },

  

  /* Empty Screen */
  emptyContainer: {
    flex: 1,
    paddingVertical: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyIcon: {
    fontSize: SIZE.SIZE_36,
    color: COLOR.GREY,
    marginVertical: 15,
    textAlign: 'center'
  },
  emptyTitle: {
    fontFamily: FAMILY.BOLD,
    fontSize: SIZE.SIZE_18,
    color: COLOR.GREY_DARK,
    textAlign: 'center'
  },
  emptyText: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_10,
    color: COLOR.GREY,
    textAlign: 'center'
  },
}

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingLeft: 0,
    color: 'black'
  },
  inputAndroid: {
    fontSize: 16,
    paddingLeft: 0,
    color: 'black'
  }
})
