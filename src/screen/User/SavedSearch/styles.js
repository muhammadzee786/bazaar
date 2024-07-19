import { COLOR, FAMILY, SIZE } from '@theme/typography'

export default {
  header: {
    backgroundColor: COLOR.DEFAULT,
    paddingHorizontal: 20,
    paddingTop: 5,
    paddingBottom: 20,
    marginBottom: 20
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
    fontSize: SIZE.SIZE_24,
    color: COLOR.LIGHT,
    lineHeight: SIZE.SIZE_28,
    marginHorizontal: 10
  },
  headerDesc: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.LIGHT,
  },

  /* item list */
  item: {
    backgroundColor: COLOR.LIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: "#CCC",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 15,
    marginVertical: 5,
    borderRadius: 10
  },
  itemCol: {
    flex: 1
  },
  itemName: {
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY
  },
  itemBtn: {
    backgroundColor: COLOR.SMOKE,
    alignSelf: 'flex-start',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 5,
  },
  itemBtnIcon: {
    fontSize: SIZE.SIZE_20,
    color: COLOR.GREY
  },
}