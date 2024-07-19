import React from 'react'
import { Text, View } from 'react-native'

const links = {}
links.public = {
  home: {
    name: 'Home',
    route: 'PublicHome',
    iconName: 'home-outline',
    iconType: 'Ionicons'
  },
  pages: {
    name: 'Pages',
    route: 'PublicPageList',
    iconName: 'documents-outline',
    iconType: 'Ionicons'
  },
  contact: {
    name: 'Contact',
    route: 'PublicContact',
    iconName: 'envelope-o',
    iconType: 'FontAwesome'
  },
  language: {
    name: 'Language',
    route: 'PublicLanguage',
    iconName: 'language',
    iconType: 'Entypo'
  }
}
links.session = {
  login: {
    name: 'Login',
    route: 'UserLogin',
    iconName: 'login',
    iconType: 'AntDesign'
  },
  logout: {
    name: 'Logout',
    route: 'UserLogout',
    iconName: 'logout',
    iconType: 'AntDesign'
  },
  postList: {
    name: 'My Ads',
    route: 'UserPostList',
    iconName: 'megaphone-outline',
    iconType: 'Ionicons'
  },
  pendingApproval: {
    name: 'Pending Approval',
    route: 'UserPostList',
    params: { type: 'pending' },
    iconName: 'ios-time-outline',
    iconType: 'Ionicons'
  },
  archivedList: {
    name: 'Archived Listings',
    route: 'UserPostList',
    params: { type: 'archived' },
    iconName: 'archive-outline',
    iconType: 'Ionicons'
  },
  messageList: {
    name: 'Messenger',
    route: 'UserMessageList',
    iconName: 'md-chatbubbles-outline',
    iconType: 'Ionicons'
  },
  transactionList: {
    name: 'Transactions',
    route: 'UserTransactionList',
    iconName: 'document-text-outline',
    iconType: 'Ionicons'
  },
  favouriteList: {
    name: 'Saved Ads',
    route: 'UserFavouriteList',
    iconName: 'bookmark',
    iconType: 'Feather'
  },
  savedSearch: {
    name: 'Saved Search',
    route: 'UserSavedSearch',
    iconName: 'plus-circle',
    iconType: 'Feather'
  },
  myAccount: {
    name: 'My Account',
    route: 'UserMyAccount',
    iconName: 'user',
    iconType: 'AntDesign'
  }
}

export default {
  links: {
    public: [
      links.public.home,
      links.session.login,
      links.public.pages,
      links.public.contact,
      links.public.language
    ],
    session: [
      links.public.home,
      links.session.postList,
      links.session.pendingApproval,
      links.session.archivedList,
      links.session.messageList,
      links.session.transactionList,
      links.session.favouriteList,
      links.session.savedSearch,
      links.session.myAccount,
      links.public.language,
      // links.public.pages,
      // links.public.contact,
      links.session.logout
    ]
  }
}
