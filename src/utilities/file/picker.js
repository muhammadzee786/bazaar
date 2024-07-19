import {Alert} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

// import Support from '@component/Support'

const onPickerError = e => {
  // Support.showError({ message: 'No file selected' })
};

const imagePicker = (method, onSuccess, onError, options = {}) => {
  const get = image => {
    const fileName = image.path.split('/');
    const data = {
      path: image.path,
      name: fileName[fileName.length - 1],
      mime: image.mime,
      width: image.width,
      height: image.height,
    };
    if (options.includeBase64) {
      if (!options.__hideBase64) {
        data.data = image.data;
      }
      if (options.__showUri) {
        data.uri = `data:${image.mime};base64,` + image.data;
      }
    }
    if (image.duration) {
      data.duration = image.duration;
    }
    if (image.size) {
      data.size = image.size;
    }

    return data;
  };
  ImagePicker[method](options)
    .then(r => {
      onSuccess(Array.isArray(r) ? r.map(get) : get(r));
    })
    .catch(onError || onPickerError);
};

export const openImagePicker = (options = {}) => {
  const defaultOptions = {
    width: 500,
    height: 500,
    cropping: false,
    multiple: false,
    includeBase64: true,
    mediaType: 'photo',
    waitAnimationEnd: false,
    sortOrder: 'desc',
    includeExif: false,
    forceJpg: true,

    __hideBase64: true,
    __showUri: false,
  };
  const coptions = {...defaultOptions, ...options};
  coptions.compressImageMaxWidth = coptions.width;
  coptions.compressImageMaxHeight = coptions.height;
  const {onSuccess, onError, title, message, ...ooptions} = coptions;

  if (coptions.openCamera) {
    imagePicker('openCamera', onSuccess, onError, ooptions);
    return;
  }

  if (coptions.openPicker) {
    imagePicker('openPicker', onSuccess, onError, ooptions);
    return;
  }

  Alert.alert(
    title || 'Choose',
    message || 'Select an option',
    [
      {text: 'Cancel', style: 'cancel'},
      {
        text: 'Gallery',
        onPress: () => imagePicker('openPicker', onSuccess, onError, ooptions),
      },
      {
        text: 'Camera',
        onPress: () => imagePicker('openCamera', onSuccess, onError, ooptions),
      },
    ],
    {cancelable: false},
  );
};
