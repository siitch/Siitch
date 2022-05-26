import {StyleSheet, Dimensions} from 'react-native';

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  databaseView: {
    width: 350,
  },
  barTitle: {
    width: 300,
  },
  eachAvatar: {
    paddingRight: 20,
    alignItems: 'center',
    maxHeight: 100,
  },
  avatarView: {
    paddingTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    height: 150,
  },
  searchTab: {
    width: 100,
    height: 70,
  },
  searchInput: {
    borderColor: '#80CAFF',
    height: 50,
    borderWidth: 2,
    borderRadius: 5,
  },
  searchFrame: {
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 40,
    marginBottom: 20,
  },
  MainContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: DeviceHeight * 0.015,
    paddingBottom: DeviceHeight * 0.02
  },
  text: {
    textAlign: 'center',
    fontSize: 22,
    color: 'black',
    marginTop: DeviceHeight * 0.01
  },
  bottomtext: {
    position: 'relative',
    textAlign: 'center',
    color: 'black',
    fontSize: 22,
  },
  colflex: {
    paddingTop: 70,
    alignItems: 'center',
    justifyContent: 'center',

    flexDirection: 'row',
    position: 'relative',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: DeviceHeight * 0.04,
  },
  centerearth: {
    right: 190,
    top: 70,
  },
  centerwaterdrops: {
    top: 70,
    left: 190,
  },
  alpha: {
    marginLeft: DeviceWidth * 0.05,
    width: DeviceWidth * 0.25,
    marginBottom: DeviceHeight - DeviceHeight * 1.03
  },
  logo: {
    marginTop: DeviceHeight - (DeviceHeight * 1.04),
    width: 250,
    height: 150,
  },
  rankingPage: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  rankingPageImage: {
    width: 65,
    height: 65,
    marginLeft: 40,
  },
  meats: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  meatsImage: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  meatsText: {
    flexDirection: 'row',
  },

  modalView: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 20,
  },
});
export {styles};
