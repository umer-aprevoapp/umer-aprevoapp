import React, { useCallback } from "react";
import {
  View,
  StyleSheet,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Fragment } from "react/cjs/react.production.min";

import Color from "../../assets/colors/Color";

export function DrawerContent(props) {
  return (
    <Fragment>
      <SafeAreaView backgroundColor={Color.dodgerblue} />
      <SafeAreaView>
        <View
          style={{
            width: "100%",
            height: "100%",
            flexDirection: "column",
            backgroundColor: Color.dodgerblue,
            justifyContent: "flex-start",
            alignContent: "flex-start",
          }}
        >
          <View style={{ ...styles.viewContainer }}>
            <TouchableOpacity
              style={{ width: "100%", flexDirection: "row" }}
              onPress={() => {
                props.navigation.toggleDrawer();
                props.navigation.navigate("CaseList");
              }}
            >
              <View style={{ ...styles.iconContainer }}></View>
              <View style={{ ...styles.textContainer }}>
                <Text style={{ ...styles.textValue }}>Case List</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ ...styles.viewDivider }}></View>

          <View style={{ ...styles.viewContainer }}>
            <TouchableOpacity
              style={{ width: "100%", flexDirection: "row" }}
              onPress={() => {
                props.navigation.navigate("Favourite");
              }}
            >
              <View style={{ ...styles.iconContainer }}></View>
              <View style={{ ...styles.textContainer }}>
                <Text style={{ ...styles.textValue }}>Favourite</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ ...styles.viewDivider }}></View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: Platform.OS === "ios" ? 20 : 18,
    color: Color.black,
  },
  caption: {
    fontSize: Platform.OS === "ios" ? 18 : 15.5,
    color: Color.black,

    marginTop: Platform.OS === "ios" ? 5 : -5,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 40,
  },
  bottomDrawerSectionOne: {
    marginBottom: 0,
    marginRight: 10,
    marginLeft: 10,
  },
  bottomDrawerSection: {
    marginTop: 0,
    borderColor: Color.grey,
    borderTopWidth: 0.5,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  //main container
  viewContainer: {
    height: 50,
    width: "100%",
    flexDirection: "row",
  },
  iconContainer: {
    height: "100%",
    width: "20%",
    // backgroundColor: '#099999',
    justifyContent: "center",
    alignContent: "center",
  },
  iconImage: {
    height: 25,
    width: 25,
    resizeMode: "contain",
    alignSelf: "flex-start",
  },
  textContainer: {
    height: "100%",
    width: "80%",
    // backgroundColor: '#778788',
    justifyContent: "center",
    alignContent: "center",
  },
  textValue: {
    color: "#ffffff",
    paddingStart: 0,
    fontSize: RFValue(15),
  },
  viewDivider: {
    width: "100%",
    borderColor: Color.white,
    borderWidth: 0.5,
    marginTop: 5,
    marginBottom: 5,
  },
});
