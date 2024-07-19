import React from 'react';
import Modal from 'react-native-modalbox';

import {bind} from '@utility/component';
import {URLS} from '@config/url';
import http from '@utility/http';
import {FlatList, Image, View} from 'react-native';
import {COLOR, FAMILY, SIZE} from '@theme/typography';
import {Button} from '@component/Form';
import {STORAGE_URL} from '@config/env';
import {Icon, Text} from '@component/Basic';
import Support from '@component/Support';

class CategorySelection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
      categories: [],
      tmpSelected: null,
    };

    bind(this);

    this.onOpened = this.onOpened.bind(this);
    this.onClosed = this.onClosed.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.fetchCategories = this.fetchCategories.bind(this);
    this.onPressCategory = this.onPressCategory.bind(this);
    this.goToParent = this.goToParent.bind(this);
    this.renderCategoryItem = this.renderCategoryItem.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  onOpened() {
    this.setState({
      isOpened: true,
    });
  }

  onClosed() {
    this.setState({
      isOpened: false,
    });
  }

  async open() {
    await this.promisedSetState({
      categories: [],
      tmpSelected: this.props.selectedCategory?.parent ?? null,
    });
    await this.fetchCategories(
      this.props.selectedCategory
        ? this.props.selectedCategory.parent_id
        : null,
    );
    await this.refModal.open();
  }

  async close() {
    await this.refModal.close();
  }

  async fetchCategories(parentId = null) {
    let cb = () => {};
    await Support.showLoading();
    try {
      const params = {parentId, embed: 'parent', sort: '-lft'};
      const r = (await http.get(URLS.CATEGORIES, {params})).data;
      if (r.result.data.length > 0) {
        await this.promisedSetState({categories: r.result.data});
      } else {
        if (this.state.tmpSelected?.id) {
          cb = () => {
            this.close();
            this.props.selectCategory(this.state.tmpSelected);
          };
        }
      }
    } catch (e) {}
    await Support.hideLoading();
    cb();
  }

  async onPressCategory(category) {
    await this.promisedSetState({tmpSelected: category});
    await this.fetchCategories(category.id);
  }

  async goToParent () {
    if (this.state.tmpSelected?.id) {
        const c = this.state.tmpSelected.parent
        await this.promisedSetState({tmpSelected: c ?? null});
        await this.fetchCategories(c?.id ?? null);
    }
  }

  renderCategoryItem({item}) {
    let img = require('@asset/images/no_image.png');
    if (item.picture) {
      img = {uri: STORAGE_URL + '/' + item.picture};
    }

    const onPress = () => this.onPressCategory(item);

    return (
      <Button style={styles.categoryItem} onPress={onPress}>
        <Image source={img} style={styles.categoryThumb} resizeMode="contain" />
        <Text style={styles.categoryName}>{item.name}</Text>
      </Button>
    );
  }

  renderContent() {
    return (
      <View style={styles.category}>
        {this.state.tmpSelected?.id ? (
          <Button onPress={this.goToParent} style={styles.backBtn}>
            <Icon name='arrow-left' type='Feather' style={styles.backBtnIcon} />
            <Text style={styles.backBtnText}>Go to Parent</Text>
          </Button>
        ) : null}

        <FlatList
          data={this.state.categories}
          contentContainerStyle={styles.productFlatList}
          showsHorizontalScrollIndicator={false}
          style={{marginHorizontal: 10}}
          renderItem={this.renderCategoryItem}
        />
      </View>
    );
  }

  render() {
    return (
      <Modal
        ref={c => (this.refModal = c)}
        position="center"
        backButtonClose
        backdropPressToClose
        swipeToClose={false}
        style={styles.modal}
        onOpened={this.onOpened}
        onClosed={this.onClosed}>
        {this.state.isOpened ? this.renderContent() : null}
      </Modal>
    );
  }
}

const styles = {
  modal: {
    width: '100%',
    minHeight: '100%',
    height: 'auto',
    paddingVertical: 15,
  },
  category: {
  },
  categoryItem: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)'
  },
  categoryThumb: {
    width: 36,
    height: 36,
    marginRight: 10,
  },
  categoryName: {
    fontFamily: FAMILY.MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
    textAlign: 'center',
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  backBtnIcon: {

  },
  backBtnText: {
    fontFamily: FAMILY.REGULAR,
    fontSize: SIZE.SIZE_14,
    marginHorizontal: 5
  },
};

export default CategorySelection;
