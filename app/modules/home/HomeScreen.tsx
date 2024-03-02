import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {Icons} from '../../assets';
import {Header} from '../../components';
import {ROUTES} from '../../constants';
import styles from './HomeScreenStyles';
import {NavigationType} from './HomeScreenTypes';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationType>();
  
  const onProcessImage = (response:any) => {
    if (response) {
      navigation.navigate(ROUTES.ImageDetails, {
        uri: response?.assets?.[0]?.uri!!,
      });
    }
  };

  const onLaunchCamera = () => {
    ImagePicker.launchCamera({
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    }, onProcessImage);
  }
  
  onLaunchCamera();

  return (
    <View style={styles.mainContainer}>
      <Header title={'Google ML TD Test01'} />
      <View style={styles.imageWrapper}>
        <View style={styles.center}>
          <TouchableOpacity onPress={() => onLaunchCamera()}>
            <Image style={styles.addIcon} source={Icons.add} />
          </TouchableOpacity>
          <Text style={styles.addIconText}>Open Camera</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;