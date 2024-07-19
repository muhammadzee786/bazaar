import React, { memo } from 'react'
import {
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View,
  useWindowDimensions
} from 'react-native'
import { Container, Content, Text, Icon } from '@component/Basic'

import styles from './styles'
import { goBack, navigate } from '@navigation'
import theme from '@theme/styles'
import { __ } from '@utility/translation'
import { bind } from '@utility/component'

import Gallery from './Gallery'

import ModalGallery from './ModalGallery'

import { LightStatusBar } from '@component/StatusBar'
import { connect } from 'react-redux'
import { URLS } from '@config/url'
import http from '@utility/http'
import { addToFavourite, refinePost, removeFromFavourite } from '@helper/post'
import Placeholder from './Placeholder'
import Unavailable from '@component/Section/Unavailable'
import { Button } from '@component/Form'
import Enquiry from './Enquiry'
import { STORAGE_URL } from '@config/env'

import RenderHtml from 'react-native-render-html'
import Share from 'react-native-share'
import { openEmail, openPhone, openWhatsApp } from '@utility/linking'
// import Map from './Map'

const tagsStyles = {
  body: {
    whiteSpace: 'normal',
    color: '#333',
    fontSize: 14,
    lineHeight: 22
  },
  li: {
    marginBottom: 15
  },
  p: {
    marginTop: 0,
    marginBottom: 15
  },
  strong: {
    margin: 0
  },
  a: styles.htmlTagA,
  b: styles.htmlTagB
}

const HtmlContent = memo(({ html }) => {
  const { width } = useWindowDimensions()
  const source = {
    html
  }
  return (
    <RenderHtml
      contentWidth={width}
      source={source}
      tagsStyles={tagsStyles}
    />
  )
})

class PostView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fetchingPost: true,
      post: {},
      fields: [],
      pageError: false,

      tabSelected: 'information',
      isEnquiryAvailable: false
    }

    bind(this)

    this.fetchPost = this.fetchPost.bind(this)
    this.toggleFavourite = this.toggleFavourite.bind(this)
    this.openGalleryImage = this.openGalleryImage.bind(this)
    this.share = this.share.bind(this)
    this.contactEmail = this.contactEmail.bind(this)
    this.contactPhone = this.contactPhone.bind(this)
    this.contactWhatsApp = this.contactWhatsApp.bind(this)
    this.renderInformation = this.renderInformation.bind(this)
    this.renderCustomField = this.renderCustomField.bind(this)
    this.renderCustomFields = this.renderCustomFields.bind(this)
    this.renderAuthor = this.renderAuthor.bind(this)
    this.renderContact = this.renderContact.bind(this)
    this.renderMainImage = this.renderMainImage.bind(this)
    this.renderView = this.renderView.bind(this)
    this.renderLoading = this.renderLoading.bind(this)
    this.renderError = this.renderError.bind(this)
  }

  async componentDidMount() {
    await this.fetchPost()
  }

  async fetchPost() {
    await this.promisedSetState({
      fetchingPost: true
    })
    try {
      const params = {
        detailed: 1,
        embed:
          'user,category,postType,city,latestPayment,savedByLoggedUser,pictures'
      }
      const r = (
        await http.get(URLS.POSTS + '/' + this.props.route.params.id, { params })
      ).data

      const post = refinePost(r.result)

      let fields = []
      if (Array.isArray(r.extra?.fieldsValues)) {
        fields = r.extra?.fieldsValues.map(f => {
          if (f.type == 'video') {
          } else {
            f.selected_value = f.value
          }
          return f
        })
      }

      let isEnquiryAvailable = true
      if (this.props.session.isLoggedIn) {
        isEnquiryAvailable = this.props.session.user.id != post.user_id
      }

      await this.promisedSetState({
        post,
        fields,
        isEnquiryAvailable
      })
    } catch (e) {
      await this.promisedSetState({
        pageError: true
      })
    }
    await this.promisedSetState({
      fetchingPost: false
    })
  }

  async toggleFavourite() {
    if (this.state.post.is_favourite) {
      const b = await removeFromFavourite(this.state.post.id)
      if (b) {
        await this.promisedSetState({
          post: { ...this.state.post, is_favourite: false }
        })
      }
    } else {
      const b = await addToFavourite(this.state.post.id)
      if (b) {
        await this.promisedSetState({
          post: { ...this.state.post, is_favourite: true }
        })
      }
    }
  }

  contactEmail() {
    openEmail(this.state.post.email)
  }

  contactPhone() {
    openPhone(this.state.post.phone)
  }

  contactWhatsApp() {
    openWhatsApp(this.state.post.phone)
  }

  renderMainImage() {
    let img = require('@asset/images/no_image.png')
    if (this.state.post.pictures && this.state.post.pictures.length) {
      img = { uri: STORAGE_URL + '/' + this.state.post.pictures[0].filename }
    }
    return (
      <ImageBackground
        source={img}
        resizeMode='contain'
        style={styles.postImg}
      />
    )
  }

  renderCustomField(field) {
    return (
      <View style={styles.postCustomRow} key={field.id}>
        <Text style={styles.postCustomLabel}>{field.name}</Text>
        <View style={styles.postCustomCol}>
          <Text style={styles.postCustomValue}>{field.selected_value}</Text>
        </View>
      </View>
    )
  }

  renderCustomFields() {
    if (this.state.fields.length === 0) {
      return null
    }
    return (
      <View style={styles.postCustom}>
        <View style={styles.postRow}>
          <Text style={styles.postSubTitle}>{__('Additional Details')}</Text>
        </View>
        {this.state.fields.map(this.renderCustomField)}
      </View>
    )
  }

  openGalleryImage(index) {
    this.refModalGallery.open(index)
  }

  share() {
    Share.open({
      title: 'LC 14.0.0 - ' + this.state.post.title,
      message: this.state.post.title,
      url: 'https://lc1400.webdemo47.com/' + this.state.post.slug + '-' + this.state.post.id
    })
  }

  renderInformation() {
    return (
      <View style={styles.info}>
        <View style={styles.infoItem}>
          <View style={styles.infoBox}>
            <Icon name='globe' type='SimpleLineIcons' style={styles.infoIcon} />
          </View>
          <View style={styles.infoCol}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>{__('Address')}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoValue}>{this.state.post.formatted_address}</Text>
            </View>
          </View>
        </View>
        {
          this.state.post.phone_hidden === 1
            ? null
            : (
              <View style={styles.infoItem}>
                <View style={styles.infoBox}>
                  <Icon name='phone' type='Feather' style={styles.infoIcon} />
                </View>
                <View style={styles.infoCol}>
                  <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>{__('Phone')}</Text>
                  </View>
                  <View style={styles.infoRow}>
                    <Text style={styles.infoValue}>{this.state.post.phone}</Text>
                  </View>
                </View>
              </View>
            )
        }
        <View style={styles.infoItem}>
          <View style={styles.infoBox}>
            <Icon name='envelope-o' type='FontAwesome' style={styles.infoIcon} />
          </View>
          <View style={styles.infoCol}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>{__('Email')}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoValue}>{this.state.post.email}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }

  renderEnquiry() {
    if (!this.state.isEnquiryAvailable) {
      return null
    }
    return (<Enquiry post={this.state.post} session={this.props.session} />)
  }

  renderAuthor() {
    let userImg = require('@asset/images/avatar-dark.png')
    let userName = ''
    let userJoined = ''
    if (this.state.post.user) {
      const author = this.state.post.user
      if (author.photo_url) {
        userImg = { uri: author.photo_url }
      }
      userName = author.name
      userJoined = author.created_at_formatted
    }
    return (
      <View style={styles.author}>
        <View style={styles.authorRow}>
          <Image source={userImg} style={styles.authorAvatar} resizeMode='contain' />
        </View>
        <View style={styles.authorRow}>
          <Text style={styles.authorName}>{userName}</Text>
        </View>
      </View>
    )
  }

  renderContact() {
    return (
      <View style={styles.profileBar}>
        {
          this.state.post.email
            ? (
              <Button
                style={[styles.profileBtn, styles.profileEmail]}
                onPress={this.contactEmail}
              >
                <Icon name="envelope-o" type="FontAwesome" style={styles.profileEmailIcon} />
                <Text
                  style={styles.profileBtnText}
                >
                  {__('Email')}
                </Text>
              </Button>
            )
            : null
        }
        {
          this.state.post.phone_hidden === 1 || !this.state.post.phone
            ? null
            : (
              <>
                <Button
                  style={[styles.profileBtn, styles.profilePhone]}
                  onPress={this.contactPhone}
                >
                  <Icon name="phone" type="Feather" style={styles.profilePhoneIcon} />
                  <Text
                    style={styles.profileBtnText}
                  >
                    {__('Call')}
                  </Text>
                </Button>
                <Button
                  style={[styles.profileBtn, styles.profileWhatsapp]}
                  onPress={this.contactWhatsApp}
                >
                  <Icon name="whatsapp" type="FontAwesome" style={styles.profileWhatsappIcon} />
                  <Text
                    style={styles.profileBtnText}
                  >
                    {__('Whatsup')}
                  </Text>
                </Button>
              </>
            )
        }
      </View>
    )
  }

  renderView() {
    let tabContent
    if (this.state.tabSelected === 'information') {
      tabContent = this.renderInformation()
    } else if (this.state.tabSelected === 'enquiry') {
      tabContent = this.renderEnquiry()
    }

    return (
      <>
        <ScrollView>
          <View style={styles.postHeader}>
            {this.renderMainImage()}
            <View style={styles.postHeaderRow}>
              <Button style={styles.postHeaderBtn} onPress={goBack}>
                <Icon name='arrow-left' type='MaterialCommunityIcons' style={styles.postHeaderBtnIcon} />
              </Button>
              <View style={styles.postHeaderCol}>
                <Button style={styles.postHeaderBtn} onPress={this.toggleFavourite}>
                  {
                    this.state.post.is_favourite
                      ? (<Icon name='bookmark' type='FontAwesome' style={styles.postBookmarkBtnActiveIcon} />)
                      : (<Icon name='bookmark' type='FontAwesome' style={styles.postBookmarkBtnIcon} />)
                  }
                </Button>
                <Button style={styles.postHeaderBtn} onPress={this.share}>
                  <Icon name='share-2' type='Feather' style={{ fontSize: 22, color: '#CCC' }} />
                </Button>
              </View>
            </View>
          </View>
          <View style={styles.postContainer}>
            <View style={styles.postRow}>
              <Text style={styles.postName}>{this.state.post.title}</Text>
            </View>
            <View style={styles.postRow}>
              <View style={styles.postCol}>
                <View style={styles.postRow}>
                  <View style={styles.postGroup}>
                    {
                      this.state.post.city?.id
                        ? (
                          <>
                            <Icon name='location-pin' type='SimpleLineIcons' style={styles.postGroupIcon} />
                            <Text style={styles.postLocation}>
                              {this.state.post.city.name + ', ' + this.state.post.city.country_code}
                            </Text>
                          </>
                        )
                        : null
                    }
                  </View>
                  {
                    this.state.post.visits
                      ? (
                        <View style={styles.postGroup}>
                          <Icon name='eye' type='Feather' style={styles.postGroupIcon} />
                          <Text style={styles.postCount}>{this.state.post.visits}</Text>
                        </View>
                      )
                      : null
                  }
                  {
                    this.state.post.created_at
                      ? (
                        <View style={styles.postGroup}>
                          <Icon name='clockcircleo' type='AntDesign' style={styles.postGroupIcon} />
                          <Text style={styles.postDate}>{this.state.post.created_at_formatted}</Text>
                        </View>
                      )
                      : null
                  }
                </View>
                <View style={[styles.postGroup, {marginTop: 15}]}>
                  {this.state.post.price
                    ? (
                      <Text style={styles.postPrice}>€{this.state.post.price}</Text>
                    )
                    : null}
                </View>
                <View style={styles.postGroup}>
                  {this.state.post.description
                    ? (
                      <Text style={styles.postDesc}>{this.state.post.description}</Text>
                    )
                    : null}
                  {/* <HtmlContent html={this.state.post.description} /> */}
                </View>
              </View>
              {/* <View style={styles.postColRight}>
                <Button style={styles.postColBtn}>
                  <Icon name='flag' type='Feather' style={styles.postGroupIcon} />
                </Button>
                <Button style={styles.postColBtn}>
                  <Icon name='share' type='Feather' style={styles.postGroupIcon} />
                </Button>
              </View> */}
            </View>

            {this.renderCustomFields()}

            <Gallery
              list={this.state.post.pictures}
              openGalleryImage={this.openGalleryImage}
            />
          </View>

          {/* <Map post={this.state.post} /> */}

          <View style={styles.authorContainer}>
            {this.renderAuthor()}

            {this.renderContact()}

            <View style={styles.tabs}>
              <Button
                style={
                  this.state.tabSelected === 'information'
                    ? styles.tabActive
                    : styles.tab
                }
                onPress={() => this.setState({ tabSelected: 'information' })}
              >
                <Text
                  style={
                    this.state.tabSelected === 'information'
                      ? styles.tabActiveText
                      : styles.tabText
                  }
                >
                  {__('Informations')}
                </Text>
              </Button>
              <Button
                style={
                  this.state.tabSelected === 'enquiry'
                    ? styles.tabActive
                    : styles.tab
                }
                onPress={() => this.setState({ tabSelected: 'enquiry' })}
              >
                <Text
                  style={
                    this.state.tabSelected === 'enquiry'
                      ? styles.tabActiveText
                      : styles.tabText
                  }
                >
                  {__('Enquiry Now')}
                </Text>
              </Button>
            </View>
            {tabContent}
          </View>

          {/* }
          <View>
            <Similar
              list={this.state.similarList}
              fetching={this.state.fetchingSimilarList}
            />
          </View>
          { */}
        </ScrollView>
        <ModalGallery
          ref={c => {
            this.refModalGallery = c
          }}
          list={this.state.post.pictures}
        />
      </>
    )
  }

  renderLoading() {
    return <Placeholder />
  }

  renderError() {
    return <Unavailable message={__('Post is not available')} />
  }

  render() {
    let content
    if (this.state.pageError) {
      content = this.renderError()
    } else if (this.state.fetchingPost) {
      content = this.renderLoading()
    } else {
      content = this.renderView()
    }

    return (
      <Container>
        <LightStatusBar />
        <Content style={theme.layout}>
          {content}
        </Content>
      </Container>
    )
  }
}
export default connect(({ session }) => ({ session }))(PostView)
