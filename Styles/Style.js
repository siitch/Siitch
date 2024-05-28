import { Dimensions, StyleSheet } from "react-native";
const DeviceWidth = Dimensions.get('window').width;
export const calculatorStyle = StyleSheet.create({
  switchAndTitleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80
  },
  unitSwitchContainer: {
    position: 'absolute',
    alignSelf: 'flex-start',
    marginLeft: DeviceWidth * 0.05,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 65,
    height: 44,
    paddingHorizontal: 10,
    borderColor: '#00ADEF',
    borderWidth: 2,
    borderRadius: 10,
  },
  calculatorTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 50,
  },
  calculatorImageContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  chevronIconStyle: {
    width: 30,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickerContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: DeviceWidth * 0.4,
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#80CAFF',
    borderRadius: 20,
  },
  calculateButton: {
    padding: 15,
    marginRight: 5,
    borderRadius: 30,
    backgroundColor:'#70BF41',
    alignItems: 'center',
    justifyContent: 'center',
  },
  runningTotalBarContainer: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C6C6C633'
  },
  waterDropIcon: {
    width: 30,
    height: 30,
    position: 'absolute',
    right: 45,
    marginTop: 5
  },
  summaryBarSwitchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 65,
    height: 44,
    paddingHorizontal: 10,
    borderColor: '#00ADEF',
    borderWidth: 2,
    borderRadius: 10,
  },
  animatedShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 2,
  },
});

export const itemDetailStyle = StyleSheet.create({
  divider: {
    borderBottomColor: "rgba(0,0,0,0.25)",
    borderBottomWidth: 1,
  },
  GLSwitchContainer: {
    position: "absolute",
    alignSelf: "flex-start",
    zIndex: 10,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "5%",
    marginLeft: 20,
    borderColor: "#00ADEF",
    borderWidth: 2,
    borderRadius: 10,
    width: 65,
    height: 44,
    paddingLeft: 10,
    paddingRight: 10,
  },
  letterG: globalUnit => ({
    color: globalUnit === "G" ? "#00ADEF" : "black",
    //paddingTop: 5,
    fontSize: 20,
    fontWeight: globalUnit === "G" ? "bold" : "normal",
  }),
  letterL: globalUnit => ({
    color: globalUnit === "L" ? "#00ADEF" : "black",
    //paddingTop: 5,
    fontSize: 20,
    fontWeight: globalUnit === "L" ? "bold" : "normal",
  }),
  waterBreakdownText: {
    alignSelf: "center",
    marginTop: 5,
    fontSize: 17,
    fontWeight: "500",
  },
  waterBreakdownContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 4,
    marginLeft: 7,
    marginRight: 7,
    marginBottom: 7,
    padding: 5,
    height: 90,
  },
  waterCardContainer: backgroundColor => ({
    alignItems: "center",
    justifyContent: "center",
    margin: 6,
    backgroundColor: backgroundColor,
    shadowColor: "black",
    flex: 1,
  }),
  itemPropertyTitle: {
    fontSize: 17,
    fontWeight: "500",
    marginLeft: 5,
  },
  whatCanIDoButton: {
    width: "88%",
    marginTop: 20,
    padding: 12,
    borderRadius: 30,
    backgroundColor: "#70BF41",
    shadowColor: "rgba(0,0,0,0.4)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.5,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  whatCanIDoText: {
    marginTop: 15,
    alignSelf: "center",
    width: "77%",
    fontWeight: "600",
    fontSize: 16,
    color: "white",
  }
})

export const homepageStyle = StyleSheet.create({
  betaContainer: {
    paddingTop: 8,
    paddingEnd: 16,
    marginBottom: -8
  },
  betaBox: {
    height: 26,
    width: 58,
    backgroundColor: '#70BF41',
    borderRadius: 5,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  betaText: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: 'white',
  },
  waterDropImage: {
    height: 91,
    width: 58,
  },
  siitchLogoText: {
    fontFamily: 'Shrikhand-Regular',
    fontSize: 64,
    color: '#1C385E',
    paddingHorizontal: 10,
    paddingTop: 10,
    textShadowColor: '#00ADEF',
    textShadowOffset: {
      width: -2.5,
    },
    textShadowOpacity: 1,
    textShadowRadius: 1,
  },
  siitchSloganText: {
    fontFamily: 'Lato-Regular',
    fontSize: 20,
    lineHeight: 20,
    textAlign: 'center',
    marginTop: -3,
    marginBottom: 15,
  },
  ecoCamSectionContainer: {
    height: 162,
    backgroundColor: '#00ADEF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  takeAPicSectionContainer: {
    marginRight: 25,
  },
  takeAPicText: {
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginBottom: 7,
  },
  takeAPicOuterBox: {
    height: 105,
    width: 105,
    borderRadius: 15,
    borderWidth: 4,
    borderColor: 'white',
    alignItems: 'center',
  },
  takeAPicHorizontalRectangle: {
    height: 56,
    width: 105,
    backgroundColor: '#00ADEF',
    alignItems: 'center',
    zIndex: 1,
    top: 20.5,
  },
  takeAPicVerticalRectangle: {
    height: 105,
    width: 56,
    zIndex: 2,
    marginTop: -60,
    backgroundColor: '#00ADEF',
  },
  ecoCamItemSwiperContainer: {
    height: 105,
    width: 105,
    zIndex: 3,
    marginTop: -105,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ecoCamItems: {
    'Jeans': {
      height: 87.45,
      width: 87.45,
      transform: [{
        rotate: '-4.91deg',
      }]
    },
    'Plastic cup': {
      height: 85.03,
      width: 65.11,
      marginLeft: 8,
      transform: [{
        rotate: '-6.23deg',
      }]
    },
    'Cheese': {
      height: 82,
      width: 82,
      transform: [{
        rotate: '-3.19deg',
      }]
    },
    'Chicken': {
      height: 93,
      width: 93,
      marginLeft: -6,
      transform: [{
        rotate: '6.6deg',
      }]
    },
  },
  ecoCamItemInfoContainer: {
    height: 116,
    width: 182,
    borderRadius: 25,
    marginTop: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  compareSectionContainer: {
    height: 275,
    backgroundColor: '#1C385E',
  },
  compareSectionTitleText: {
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10
  },
  greenBorderBox: {
    height: 200,
    width: 145,
    backgroundColor: 'white',
    borderWidth: 3,
    borderRadius: 25,
    borderColor: '#6DBD64',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  greyBorderBox: {
    height: 200,
    width: 145,
    backgroundColor: 'white',
    borderWidth: 3,
    borderRadius: 25,
    borderColor: '#B2B0B0',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  compareItemImage: {
    height: 120,
    width: 120,
  },
  compareItemName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  compareItemWaterText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#00ADEF'
  },
  compareItemMetric: {
    fontSize: 13,
    marginBottom: 10,
    textAlign: 'center',
  },
  toolsSectionTitleText: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: '#404040',
    textAlign: 'center',
    paddingVertical: 25,
  },
  siitchVideoContainer: {
    height: (DeviceWidth*0.96 * 9) / 16,
    width: DeviceWidth*0.96,
    marginVertical: 10,
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: 'black',
  },
  toolsContainer: {
    height: 110,
    width: 110,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.5)',
    backgroundColor: 'white',
    shadowOpacity: 1,
    shadowColor: 'rgba(0,0,0,0.25)',
    shadowRadius: 1,
    shadowOffset: {
      width: 0,
      height: 1
    },
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  toolsText: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 4
  },
  rankingSectionContainer: {
    backgroundColor: '#1C385E',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  rankingSectionTitleText: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 20,
  },
  rankingListContainer: {
    width: '90%',
    borderWidth: 3,
    borderColor: '#B2B0B0',
    borderRadius: 25,
    backgroundColor: 'white',
    paddingTop: 15,
    paddingLeft: 5,
    marginBottom: 20,
  },
  rankingItemContainer: {
    flexDirection: 'row',
  },
  //Item Picture and Name
  rankingItemCol: {
    flexDirection: 'column',
    marginBottom: 12,
    width: 68,
    alignItems: 'center',
  },
  rankingItemText: {
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000000'
  },
  rankingItemImage: {
    height: DeviceWidth*.13,
    width: DeviceWidth*.13,
  },
  //Progress Bar and Total
  progressCol: {
    flexDirection: 'column',
    height: 85,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 10,
  },
  progressTxt: {
    fontSize: 17,
    fontWeight: '500',
    color: 'dimgrey',
    marginRight: 20,
  },
  searchSectionContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  searchSectionTitleText: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    marginTop: 35,
    marginBottom: 15,
  },
  searchItemImage: {
    backgroundColor: 'white',
    width: 60,
    height: 60,
    marginVertical: 10,
  },
  calculatorSectionContainer: {
    backgroundColor: '#1C385E',
    alignItems: 'center',
  },
  calculatorSectionTitleText: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: 'white',
    marginVertical: 17,
  },
  calculatorBox: {
    width: '95%',
    borderWidth: 3,
    borderColor: '#B2B0B0',
    borderRadius: 25,
    backgroundColor: 'white',
    paddingBottom: 10,
  },
  calculatorReminderText: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginTop: 22,
    marginBottom: 27,
  },
  footerContainer: {
    backgroundColor: '#1C385E',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: '8%',
    paddingVertical: 30,
  },
  footerText: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});
