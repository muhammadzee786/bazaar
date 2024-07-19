import React from 'react'
import { ScrollView, View } from 'react-native'
import Modal from 'react-native-modalbox'

import styles from '../styles'
import { Icon, Text } from '@component/Basic'
import { Button, Checkbox, Picker } from '@component/Form'
import Support from '@component/Support'
import { priceRanges } from '@config/filters'
import { URLS } from '@config/url'
import { bind } from '@utility/component'
import http from '@utility/http'
import { __ } from '@utility/translation'
import Fields from './Fields'
import { SafeAreaView } from 'react-native-safe-area-context'

class Filter extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpened: false,
      url: '',
      filters: {},
      categorySelected: null,
      categories: [],
      subCategories: [],
      fields: []
    }

    bind(this)

    this.onOpened = this.onOpened.bind(this)
    this.onClosed = this.onClosed.bind(this)
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.apply = this.apply.bind(this)
    this.fetchCategories = this.fetchCategories.bind(this)
    this.fetchCategoryFields = this.fetchCategoryFields.bind(this)
    this.onChangeCategory = this.onChangeCategory.bind(this)
    this.onChangeSubCategory = this.onChangeSubCategory.bind(this)
    this.onCustomFieldChange = this.onCustomFieldChange.bind(this)

    this.renderSubCategory = this.renderSubCategory.bind(this)
    this.renderCategory = this.renderCategory.bind(this)
    this.renderContent = this.renderContent.bind(this)
  }

  onOpened () {
    this.setState({
      isOpened: true
    })
  }

  onClosed () {
    this.setState({
      isOpened: false
    })
  }

  async open (filters) {
    await Support.showLoading()
    await this.promisedSetState({ filters })
    await this.fetchCategories()
    await Support.hideLoading()
    await this.refModal.open()
  }

  async close () {
    await this.refModal.close()
  }

  async apply () {
    await this.refModal.close()
    await this.props.apply(this.state.filters)
  }

  async fetchCategories () {
    try {
      const params = { embed: 'children', sort: '-lft' }
      const r = (await http.get(URLS.CATEGORIES, { params })).data

      this.categories = r.result.data
      let categorySelected = null
      const categories = []
      const subCategories = []
      this.categories.forEach(c => {
        categories.push(({
          label: c.name,
          value: c.id.toString()
        }))
        if (this.state.filters?.categoryId == c.id) {
          categorySelected = { label: c.name }
          if (c.children) {
            c.children.forEach(sc => {
              subCategories.push(({
                label: sc.name,
                value: sc.id.toString()
              }))
            })
          }
        }
      })
      await this.promisedSetState({
        categorySelected,
        categories,
        subCategories
      })
    } catch (e) {
    }
  }

  async fetchCategoryFields () {
    const categoryId = this.state.filters.subCategoryId || this.state.filters.categoryId || null
    if (categoryId) {
      await Support.showLoading()
      try {
        const r = (await http.post(URLS.CATEGORIES + `/${categoryId}/fields`))
          .data
        await this.promisedSetState({
          fields: Array.isArray(r.result) ? r.result.filter(f => (!!f.use_as_filter)) : []
        })
      } catch (e) {}
      await Support.hideLoading()
    }
  }

  onChangeCategory (v) {
    if (this.state.filters.categoryId != v) {
      const filters = { ...this.state.filters }
      filters.categoryId = v
      if (filters.subCategoryId) { delete filters.subCategoryId }
      filters.cf = {}
      const subCategories = []
      const category = this.categories.find(c => (c.id == v))
      const categorySelected = { label: category.name }
      if (category.children) {
        category.children.forEach(sc => {
          subCategories.push(({
            label: sc.name,
            value: sc.id.toString()
          }))
        })
      }
      this.setState({
        filters,
        categorySelected,
        subCategories,
        fields: []
      }, this.fetchCategoryFields)
    }
  }

  onChangeSubCategory (v) {
    if (this.state.filters.subCategoryId != v) {
      const filters = { ...this.state.filters }
      filters.subCategoryId = v
      filters.cf = {}
      this.setState({
        filters,
        fields: []
      }, this.fetchCategoryFields)
    }
  }

  onCustomFieldChange (field, value) {
    const filters = { ...this.state.filters }
    if (!filters.cf) { filters.cf = {} }
    filters.cf[field] = value
    this.setState({ filters })
  }

  renderSubCategory () {
    return (
      <>
        <Text style={styles.modalLabel}>{this.state.categorySelected?.label || __('Sub Category')}</Text>
        <View style={styles.modalPicker}>
          <Picker
            name='Sub Categories'
            items={this.state.subCategories}
            placeholder='Select'
            onChange={this.onChangeSubCategory}
            showHeader
            showArrow
            buttonStyle={styles.pickerButtonStyle}
            value={this.state.filters.subCategoryId}
          />
        </View>
      </>
    )
  }

  renderCategory () {
    return (
      <>
        <Text style={styles.modalLabel}>{__('Category')}</Text>
        <View style={styles.modalPicker}>
          <Picker
            name='Categories'
            items={this.state.categories}
            placeholder='Select'
            onChange={this.onChangeCategory}
            showHeader
            showArrow
            buttonStyle={styles.pickerButtonStyle}
            value={this.state.filters.categoryId}
          />
        </View>
        {this.state.filters.categoryId ? this.renderSubCategory() : null}
      </>
    )
  }

  renderContent () {
    return (
      <SafeAreaView>
        <View style={styles.modal}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderTitle}>{__('Filter')}</Text>
            <Button style={styles.modalHeaderBtn} onPress={this.close}>
              <Icon name='close' type='MaterialCommunityIcons' style={styles.modalHeaderBtnIcon} />
            </Button>
          </View>
          <View style={styles.modalBody}>
            <ScrollView>
              <View>
                {this.renderCategory()}

                <Text style={styles.modalLabel}>{__('Price')}</Text>
                <View style={styles.modalSelect}>
                  {
                  priceRanges.map((r, index) => {
                    const checked = this.state.filters.priceRange === index
                    return (
                      <Button
                        key={r.title}
                        style={styles.modalSelectBtn}
                        onPress={() => {
                          const filters = { ...this.state.filters }
                          filters.priceRange = index
                          this.setState({ filters })
                        }}
                      >
                        <Text style={styles.modalSelectBtnText}>{__(r.title)}</Text>
                        <Checkbox
                          checked={checked} style={checked ? styles.modalSelectBtnIconActive : styles.modalSelectBtnIcon}
                        />
                      </Button>
                    )
                  })
                }
                </View>

                <Fields
                  fields={this.state.fields}
                  filters={this.state.filters}
                  onChange={this.onCustomFieldChange}
                />
              </View>
            </ScrollView>
          </View>
          <View style={styles.modalFooter}>
            <Button style={styles.modalClearBtn} onPress={this.close}>
              <Text style={styles.modalClearBtnText}>{__('Clear')}</Text>
            </Button>
            <Button style={styles.modalApplyBtn} onPress={this.apply}>
              <Text style={styles.modalApplyBtnText}>{__('Apply')}</Text>
            </Button>
          </View>
        </View>
      </SafeAreaView>
    )
  }

  render () {
    return (
      <Modal
        ref={c => (this.refModal = c)}
        position='bottom'
        backButtonClose={false}
        backdropPressToClose={false}
        swipeToClose={false}
        // coverScreen
        style={styles.mSelectFilterBox}
        onOpened={this.onOpened}
        onClosed={this.onClosed}
      >
        {this.state.isOpened ? this.renderContent() : null}
      </Modal>
    )
  }
}

export default Filter
