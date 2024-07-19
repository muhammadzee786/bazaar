import { COLOR, FAMILY, SIZE } from '@theme/typography'

export default {
  drawer: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 30
  },
  headerImg: {
    width: 72,
    height: 72,
    borderRadius: 5
  },
  headerName: {
    fontFamily: FAMILY.SEMI_BOLD,
    fontSize: SIZE.SIZE_20,
    color: COLOR.DARK,
    marginHorizontal: 20
  },
  headerDesc: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    marginHorizontal: 20,
  },
  headerAvatar: {
    width: 64,
    height: 64,
    borderRadius: 32
  },

  /* Content */
  content: {
    flex: 1,
    backgroundColor: COLOR.LIGHT
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,    
    paddingVertical: 8
  },
  col: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemText: {
    flex: 1,
    alignItems: 'center',    
    marginHorizontal: 20,
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_16,
    color: COLOR.DARK
  },
  itemIcon: {
    fontSize: SIZE.SIZE_24,
    color: COLOR.DARK
  },
  itemLabel: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_18,
    color: COLOR.DARK,
    marginHorizontal: 30,
    marginVertical: 15
  },

  bot: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginTop: 10
  },
  botText: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK    
  },
  
}