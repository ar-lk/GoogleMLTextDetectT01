import {StyleSheet} from 'react-native';
import {Colors, horizontalScale, moderateScale, verticalScale} from '../../theme';

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  addedImage: {
    width: '100%',
    height: '100%',
  },
  titleImage: {
    fontSize: moderateScale(20),
    paddingVertical: moderateScale(15),
    paddingHorizontal: moderateScale(20),
    color: Colors.black,
    fontWeight: '500',
    display: "flex",
  },
  titleResult: {
    fontSize: moderateScale(20),
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    color: Colors.grey,
    fontWeight: '500',
    display: "flex",
    height: 50,
    borderRadius: 30,
    marginTop: 10,
  },
  titleResultActive: {
    fontSize: moderateScale(20),
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    color: Colors.black,
    fontWeight: '500',
    display: "flex",
    backgroundColor: Colors.white,
    height: 50,
    borderRadius: 30,
    marginTop: 10,
  },
  imageContainer: {
    flex: 1,
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(10),
  },
  resultWrapper: {
    margin: moderateScale(20),
  },
  textStyle: {
    fontSize: moderateScale(17),
    color: Colors.primaryColor,
  },
  textInputStyle: {
    fontSize: moderateScale(17),
    color: Colors.primaryColor,
    borderColor: "#B4D4FF",
    borderWidth: 1,
    padding: moderateScale(10),
    borderRadius: 6,
    backgroundColor: "#EEF5FF",
  },
  titleContainer: {
    flexDirection:'row', 
    flexWrap:'wrap', 
    marginBottom: 10, 
    justifyContent: "center"
  },
  container: {
    bottom: 0,
    justifyContent: 'center',
    alignSelf: 'center',
    height: verticalScale(45),
    backgroundColor: Colors.primaryColor,
    paddingHorizontal: horizontalScale(50),
    marginVertical: verticalScale(10),
    borderRadius: moderateScale(30),
  },
  text: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: moderateScale(16),
  },
});

export default styles;