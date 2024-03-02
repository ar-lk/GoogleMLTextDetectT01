import {
    useNavigation,
    useRoute,
    type RouteProp,
  } from '@react-navigation/native';
  import React, {useEffect, useState} from 'react';
  import {Image, ScrollView, Text, View, TouchableOpacity, TextInput} from 'react-native';
  import Clipboard from '@react-native-clipboard/clipboard';

  import {Icons} from '../../assets';
  import {Header} from '../../components';
  import styles from './ImageDetailsStyles';
  import {ImageDetailRouteType, responseType} from './ImageDetailsTypes';
  import {recognizeImage} from './ImageDetailsUtils';
  
  const ImageDetailsScreen = () => {
    const route = useRoute<RouteProp<ImageDetailRouteType, 'imageDetails'>>();
    const [response, setResponse] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isShowImage, setIsShowImage] = useState(false);

    const uri = route?.params?.uri;
    const navigation = useNavigation();
  
    useEffect(() => {
      if (uri) {
        processImage(uri);
      }
    }, [uri]);
  
    const processImage = async (url: string) => {
      if (url) {
        try {
          const result = await recognizeImage(url);
          setIsLoading(false);
          if (result?.blocks?.length > 0) {
            let blockTxt = '';
            for (let i = 0; i < result?.blocks.length; i++) {
              const block = result?.blocks[i];
              blockTxt += block.text+"\n";
            }
            setResponse(blockTxt);
          }
        } catch (error) {
          setIsLoading(false);
          console.log(error);
        }
      }
    };
  
    return (
      <>
        <Header
          title={'Google ML TD Test01'}
          leftIcon={Icons.back}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={() => setIsShowImage(false)}>
            <Text style={(!isShowImage?styles.titleResultActive:styles.titleResult)}>Results</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsShowImage(true)}>
            <Text style={(isShowImage?styles.titleResultActive:styles.titleResult)}>Image</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.outerView}>
          {isShowImage?
            <View style={styles.imageContainer}>
              <Image
                source={{uri}}
                style={styles.addedImage}
                resizeMode="contain"
              />
            </View>
          :
            <ScrollView style={styles.imageContainer}>
              {response?(<>
                <TextInput
                  multiline={true}
                  numberOfLines={4}
                  onChangeText={(text) => setResponse(text)}
                  value={response}
                  style={styles.textInputStyle}
                  />

                <TouchableOpacity style={styles.container} onPress={() => Clipboard.setString(response)}>
                  <Text style={styles.text}>{'Copy To Clipboard'}</Text>
                </TouchableOpacity>
                
              </>) : isLoading ? (
                <Text style={styles.titleResult}>Please Wait...</Text>
              ) : (
                <Text style={styles.titleResult}>No text found</Text>
              )}
            </ScrollView>
          }
        </View>
      </>
    );
  };
  export default ImageDetailsScreen;