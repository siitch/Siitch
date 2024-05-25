import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
    height: '100%',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 40,
    marginBottom: 20,
  },
});
export {styles};
