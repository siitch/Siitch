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
    marginTop: "5%",
    marginLeft: 20,
    borderColor: "#00ADEF",
    borderWidth: 2,
    borderRadius: 10,
    width: 65,
    height: 26,
    paddingLeft: 10,
    paddingRight: 10,
  },
  letterG: globalUnit => ({
    color: globalUnit === "G" ? "#00ADEF" : "black",
    paddingTop: 5,
    fontSize: 20,
    fontWeight: globalUnit === "G" ? "bold" : "normal",
  }),
  letterL: globalUnit => ({
    color: globalUnit === "L" ? "#00ADEF" : "black",
    paddingTop: 5,
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
