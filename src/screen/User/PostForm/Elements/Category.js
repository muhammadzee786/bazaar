import React, { useContext } from 'react';
import { View } from 'react-native';

import { Text } from '@component/Basic';
import { Button, Picker } from '@component/Form';
import { __ } from '@utility/translation';

import styles from '../styles';
import ContextMap from '../ContextMap';

const Category = () => {
  const {
    categories,
    subCategories,
    values,
    handleChange,
    handleBlur,
    fetchCategoryFields,
    selectedCategory,
    openCategorySelection
  } = useContext(ContextMap);
  return (
    <>
      <View style={styles.content}>
        <View style={styles.postRow}>
          <Text style={styles.postLabel}>{__('Category')}</Text>
        </View>
        <Button style={styles.postSelect} onPress={openCategorySelection}>
          {
            selectedCategory ?
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5 }}>
                <Text style={styles.postLabel}>{__(selectedCategory.name)}</Text>
                <Text style={styles.postLabel}>{__('Edit')}</Text>
              </View>
              :
              <Text style={styles.postLabel}>{__('Select')}</Text>
          }
        </Button>
      </View>
    </>
  );
};

export default Category;
