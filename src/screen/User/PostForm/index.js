import React, {createRef} from 'react';
import {Image, View, ScrollView} from 'react-native';
import {Formik} from 'formik';
import {connect} from 'react-redux';
import {compile} from 'path-to-regexp';
import {serialize} from 'object-to-formdata';

import {Container, Content, Text, Icon} from '@component/Basic';
import {Button} from '@component/Form';
import Header from '@component/Header';
import {LightStatusBar} from '@component/StatusBar';
import Support from '@component/Support';
import {URLS} from '@config/url';
import {navigateCurrent} from '@navigation';
import {bind} from '@utility/component';
import {openImagePicker} from '@utility/file';
import http from '@utility/http';
import {__} from '@utility/translation';

import styles from './styles';
import {STORAGE_URL} from '@config/env';
import Single from './Single';
import Multi from './Multi';
import ContextMap from './ContextMap';
import NoAuth from '@component/Section/User/Auth/NoAuth';
import CategorySelection from './CategorySelection';

class PostFormUI extends React.Component {
  constructor(props) {
    super(props);

    let formType = '';
    let isEdit = false;
    switch (props.route.name) {
      case 'UserPostCreate':
        formType = 'create';
        break;
      case 'UserPostUpdate':
        isEdit = true;
        formType = 'update';
        break;
    }

    this.state = {
      formSettings: props.setting?.server?.form || {},

      isEdit,
      formType,
      categories: [],
      subCategories: {},
      postTypes: [],
      fields: [],
      cities: [],
      initialValues: {},
      images: [],
      selectedCategory: null,

      multiType: 'overview',
    };

    this.state.initialValues.country_code = props.session.user.country_code;
    this.state.initialValues.contact_name = props.session.user.name;
    // this.state.initialValues.phoneCountry = props.session.user?.country?.name || ''
    this.state.initialValues.phone = props.session.user.phone;
    this.state.initialValues.email = props.session.user.email;

    bind(this);

    this.refForm = createRef();

    this.fetchPost = this.fetchPost.bind(this);
    this.fetchCategories = this.fetchCategories.bind(this);
    this.fetchCategoryFields = this.fetchCategoryFields.bind(this);
    this.fetchPostTypes = this.fetchPostTypes.bind(this);
    this.fetchCities = this.fetchCities.bind(this);
    this.openCategorySelection = this.openCategorySelection.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    this.selectImage = this.selectImage.bind(this);
    this.removeImage = this.removeImage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitPictures = this.onSubmitPictures.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderFormContainer = this.renderFormContainer.bind(this);
  }

  async componentDidMount() {
    await Support.showLoading();
    if (this.state.isEdit) {
      await this.fetchPost();
      await this.fetchCategoryFields();
    }
    // await this.fetchCategories()
    if (this.state.formSettings.show_listing_types) {
      await this.fetchPostTypes();
    }
    await this.fetchCities();
    await Support.hideLoading();
  }

  async fetchPost() {
    try {
      const params = {
        detailed: 1,
        embed:
          'user,category,postType,city,latestPayment,savedByLoggedUser,pictures',
      };
      const r = (
        await http.get(URLS.POSTS + '/' + this.props.route.params.id, {params})
      ).data;
      const post = r.result;
      post.parent_id = post.category.parent_id;
      const selectedCategory = post.category ?? null;
      const fields = [
        'parent_id',
        'category_id',
        'post_type_id',
        'title',
        'description',
        'contact_name',
        'phone',
        'city_id',
        'email',
        'country_code',
        'phone_country',
        'admin_code',
        'price',
        'negotiable',
        'phone_hidden',
      ];
      const images = post.pictures.map(p => ({
        id: p.id,
        path: STORAGE_URL + '/' + p.filename,
      }));
      await this.promisedSetState({
        selectedCategory,
        post,
        images,
      });
      fields.forEach(field => {
        if (typeof post[field] !== 'undefined') {
          this.refForm.current.setFieldValue(field, post[field]);
        }
      });
      if (Array.isArray(r?.extra?.fields?.original?.result)) {
        r.extra.fields.original.result.forEach(v => {
          this.refForm.current.setFieldValue(`cf.f-${v.id}`, v.default_value);
        });
      }
    } catch (e) {
      await this.promisedSetState({
        pageError: true,
      });
    }
  }

  async fetchCategories() {
    try {
      const params = {embed: 'parent,children', sort: '-lft'};
      const r = (await http.get(URLS.CATEGORIES, {params})).data;
      const categories = [];
      const subCategories = {};
      r.result.data.forEach(c => {
        categories.push({label: c.name, value: c.id});
        subCategories[c.id] = Array.isArray(c.children)
          ? c.children.map(sc => ({label: sc.name, value: sc.id}))
          : [];
      });
      await this.promisedSetState({categories, subCategories});
    } catch (e) {}
  }

  async fetchCategoryFields() {
    const categoryId = this.refForm.current.values.category_id;
    if (categoryId) {
      try {
        const r = (await http.post(URLS.CATEGORIES + `/${categoryId}/fields`))
          .data;
        await this.promisedSetState({
          fields: Array.isArray(r.result) ? r.result : [],
        });
      } catch (e) {}
    }
  }

  async fetchPostTypes() {
    try {
      const r = (await http.get(URLS.POST_TYPES)).data;
      await this.promisedSetState({
        postTypes: r.result.data.map(pt => ({label: pt.name, value: pt.id})),
      });
    } catch (e) {}
  }

  async fetchCities() {
    try {
      const url = compile(URLS.CITIES)({
        country: this.props.session.user?.country_code?.toString(),
      });
      const r = (await http.get(url, {params: {perPage: 100, sort: '-name'}}))
        .data;
      if (Array.isArray(r?.result?.data)) {
        await this.promisedSetState({
          cities: r.result.data.map(c => ({label: c.name, value: c.id})),
        });
      }
    } catch (e) {}
  }

  async openCategorySelection() {
    this.refCategorySelection.open();
  }

  async selectCategory(category) {
    this.refForm.current.setFieldValue('category_id', category.id);
    await this.promisedSetState({
      selectedCategory: category,
    });
    this.fetchCategoryFields();
  }

  selectImage() {
    openImagePicker({
      title: 'Choose a Photo',
      message: 'Select from galley or camera',
      multiple: false,
      useFrontCamera: true,
      cropping: true,
      width: 480,
      height: 480,
      onSuccess: async data => {
        let images = [];
        if (Array.isArray(data)) {
          images = [...this.state.images, ...data];
        } else {
          images = [...this.state.images, data];
        }
        await this.promisedSetState({
          images,
        });
      },
    });
  }

  removeImage(index) {
    const image = this.state.images[index];
    if (!image) {
      return;
    }
    const updateRemoval = () => {
      const images = [...this.state.images];
      images.splice(index, 1);
      this.setState({
        images,
      });
    };
    const removeRequest = async () => {
      await Support.showLoading();
      try {
        const r = (
          await http.delete(URLS.PICTURES + '/' + image.id, {
            params: {post_id: this.props.route.params.id},
          })
        ).data;

        updateRemoval();
      } catch (e) {
        await Support.showServerError(e);
      }
      await Support.hideLoading();
    };
    const onYes = () => {
      if (image.id) {
        removeRequest();
      } else {
        updateRemoval();
      }
    };
    Support.showConfirm({
      message: __('Are you sure you want to remove this?'),
      onYes,
    });
  }

  async onSubmit({cf, ...values}) {
    if (
      this.state.isEdit &&
      this.state.formSettings.publication_form_type == 1 &&
      this.state.multiType === 'pictures'
    ) {
      setTimeout(this.onSubmitPictures, 1);
      return;
    }
    let cb = () => {};
    await Support.showLoading();
    try {
      if (typeof cf === 'object') {
        values.cf = {};
        Object.keys(cf).forEach(_k => {
          const k = _k.replace('f-', '');
          values.cf[k] = cf[_k];
        });
      }
      const formdata = serialize(values);
      if (!this.state.isEdit) {
        formdata.append(
          'phone_country',
          values.phone_country || values.country_code,
        );
      }

      if (this.state.images.length) {
        this.state.images.forEach(image => {
          if (!image.id) {
            formdata.append('pictures[]', {
              uri: image.path,
              type: image.mime,
              name: image.name,
            });
          }
        });
      }

      let url = URLS.POSTS;
      let method = 'post';
      if (this.state.isEdit) {
        url = URLS.POSTS + '/' + this.props.route.params.id;
        method = 'post';

        formdata.append('_method', 'PUT');
      }

      const r = (await http[method](url, formdata)).data;

      cb = async () => {
        if (
          this.state.isEdit &&
          this.state.formSettings.publication_form_type == 1
        ) {
          await Support.showSuccess({
            message: __('Successfully saved'),
            onHide: () => {
              this.setState({multiType: 'pictures'});
            },
            hideDelay: 2500,
          });
          return;
        }
        await Support.showSuccess({
          message: __('Successfully saved'),
          onHide: () => {
            navigateCurrent('UserPostList');
          },
          hideDelay: 2500,
        });
      };
    } catch (e) {
      await Support.showServerError(e);
    }
    await Support.hideLoading();
    cb();
  }

  async onSubmitPictures() {
    let cb = () => {};
    await Support.showLoading();
    try {
      const formdata = new FormData();

      formdata.append('phone_country', this.props.session.user.country_code);
      formdata.append('post_id', this.props.route.params.id);

      if (this.state.images.length) {
        this.state.images.forEach(image => {
          if (!image.id) {
            formdata.append('pictures[]', {
              uri: image.path,
              type: image.mime,
              name: image.name,
            });
          }
        });
      }

      const url = URLS.PICTURES;
      const method = 'post';

      const r = (await http[method](url, formdata)).data;

      cb = async () => {
        await Support.showSuccess({
          message: __('Successfully saved'),
          onHide: () => {
            navigateCurrent('UserPostList');
          },
          hideDelay: 2500,
        });
      };
    } catch (e) {
      await Support.showServerError(e);
    }
    await Support.hideLoading();
    cb();
  }

  renderForm({values, handleChange, handleBlur, setFieldValue, submitForm}) {
    let C;
    if (this.state.formSettings.publication_form_type == 2) {
      C = Single;
    } else if (this.state.formSettings.publication_form_type == 1) {
      C = Single;
      if (this.state.isEdit) {
        C = Multi;
      }
    } else {
      return null;
    }
    return (
      <ContextMap.Provider
        value={{
          formSettings: this.state.formSettings,

          categories: this.state.categories,
          subCategories: this.state.subCategories,
          postTypes: this.state.postTypes,
          cities: this.state.cities,
          fields: this.state.fields,
          images: this.state.images,
          selectedCategory: this.state.selectedCategory,

          values,
          handleChange,
          handleBlur,
          setFieldValue,
          submitForm,

          openCategorySelection: this.openCategorySelection,
          fetchCategoryFields: this.fetchCategoryFields,
          selectImage: this.selectImage,
          removeImage: this.removeImage,
        }}>
        <C multiType={this.state.multiType} />
      </ContextMap.Provider>
    );
  }

  renderFormContainer() {
    return (
      <Formik
        innerRef={this.refForm}
        initialValues={this.state.initialValues}
        onSubmit={this.onSubmit}>
        {this.renderForm}
      </Formik>
    );
  }

  render() {
    return (
      <Container>
        <LightStatusBar />
        <Header
          variant="secondary"
          leftType="backarrow"
          // middleContent={
          //   <Text style={styles.stepHeaderTitle}>{this.state.isEdit ? __('UPDATE AD') : __('CREATE AD')}</Text>
          // }
        />
        <Content>
          <ScrollView showsVerticalScrollIndicator={false}>
            {this.renderFormContainer()}
          </ScrollView>
        </Content>
        <CategorySelection
          ref={c => (this.refCategorySelection = c)}
          selectedCategory={this.state.selectedCategory}
          selectCategory={this.selectCategory}
        />
      </Container>
    );
  }
}

const PostForm = props => {
  return props.session.isLoggedIn ? <PostFormUI {...props} /> : <NoAuth />;
};

export default connect(({session, setting}) => ({session, setting}))(PostForm);
