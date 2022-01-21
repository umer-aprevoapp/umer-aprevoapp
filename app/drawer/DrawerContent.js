import React, { Fragment, useCallback } from "react";
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
import FontAwsomeIcon from "../components/FontAwsomeIcon";

import Color from "../../assets/colors/Color";
import ITextView from "../components/ITextView";
import font from "../../assets/fonts/font";
import AntDesignIcon from "../components/AntDesignIcon";
import IonIcons from "../components/IonIcons";
import FoundationIcon from "../components/FoundationIcon";

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
            alignItems: "center",
          }}
        >
          {/* User Profile Container */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: RFValue(20),
            }}
          >
            <View
              style={{
                borderColor: Color.black,
                borderWidth: 1,
                width: RFValue(60),
                justifyContent: "center",
                alignItems: "center",
                height: RFValue(60),
              }}
            >
              <FontAwsomeIcon name="user" fontSize={RFValue(40)} />
            </View>
            <ITextView
              style={{
                fontFamily: font.opensans_bold,
                color: Color.white,
                marginTop: RFValue(5),
              }}
              text="James Ferguson"
            />
            <ITextView
              style={{
                color: Color.white,
                fontSize: RFValue(12),
              }}
              text="aprevo Specialist"
            />
          </View>

          {/* CaseList Navigation Container */}
          <View style={{ ...styles.viewContainer }}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={{ width: "100%", flexDirection: "row" }}
              onPress={() => {
                props.navigation.toggleDrawer();
                props.navigation.navigate("CaseList");
              }}
            >
              <View style={{ ...styles.iconContainer }}>
                <AntDesignIcon name="bars" color={Color.white} />
              </View>
              <View style={{ ...styles.textContainer }}>
                <Text style={{ ...styles.textValue }}>Case List</Text>
                <View style={{ ...styles.viewDivider }}></View>
              </View>
            </TouchableOpacity>
          </View>

          {/* Settings Navigation Container */}
          <View style={{ ...styles.viewContainer }}>
            <TouchableOpacity
              style={{ width: "100%", flexDirection: "row" }}
              onPress={() => {
                props.navigation.navigate("Settings");
              }}
            >
              <View style={{ ...styles.iconContainer }}>
                <AntDesignIcon name="setting" color={Color.white} />
              </View>
              <View style={{ ...styles.textContainer }}>
                <Text style={{ ...styles.textValue }}>Settings</Text>
                <View style={{ ...styles.viewDivider }}></View>
              </View>
            </TouchableOpacity>
          </View>

          {/* Compliance Section */}
          <View style={{ ...styles.viewContainer }}>
            <TouchableOpacity
              style={{ width: "100%", flexDirection: "row" }}
              onPress={() => {
                props.navigation.navigate("Compliance");
              }}
            >
              <View style={{ ...styles.iconContainer }}>
                <FontAwsomeIcon
                  name="thumbs-o-up"
                  color={Color.white}
                  style={{ marginStart: RFValue(5) }}
                />
              </View>
              <View
                style={{
                  ...styles.textContainer,
                  ...{ marginStart: RFValue(3) },
                }}
              >
                <Text style={{ ...styles.textValue }}>Compliance</Text>
                <View style={{ ...styles.viewDivider }}></View>
              </View>
            </TouchableOpacity>
          </View>

          {/* About Section */}
          <View style={{ ...styles.viewContainer }}>
            <TouchableOpacity
              style={{ width: "100%", flexDirection: "row" }}
              onPress={() => {
                props.navigation.navigate("About");
              }}
            >
              <View style={{ ...styles.iconContainer }}>
                <FontAwsomeIcon
                  name="info"
                  color={Color.white}
                  style={{ marginStart: RFValue(8) }}
                />
              </View>
              <View
                style={{
                  ...styles.textContainer,
                  ...{ marginStart: RFValue(10) },
                }}
              >
                <Text style={{ ...styles.textValue }}>About</Text>
                <View style={{ ...styles.viewDivider }}></View>
              </View>
            </TouchableOpacity>
          </View>

          {/* Reports Section */}
          <View style={{ ...styles.viewContainer }}>
            <TouchableOpacity
              style={{ width: "100%", flexDirection: "row" }}
              onPress={() => {
                props.navigation.navigate("Reports");
              }}
            >
              <View style={{ ...styles.iconContainer }}>
                <FoundationIcon
                  name="alert"
                  color={Color.white}
                  fontSize={RFValue(22)}
                />
              </View>
              <View
                style={{
                  ...styles.textContainer,
                  ...{ marginStart: RFValue(5) },
                }}
              >
                <Text style={{ ...styles.textValue }}>Reports</Text>
                <View style={{ ...styles.viewDivider }}></View>
              </View>
            </TouchableOpacity>
          </View>

          {/* Logout Section */}

          <View style={{ ...styles.viewContainer }}>
            <TouchableOpacity
              style={{ width: "100%", flexDirection: "row" }}
              onPress={() => {
                props.navigation.navigate("Logo");
              }}
            >
              <View style={{ ...styles.iconContainer }}>
                <AntDesignIcon
                  name="logout"
                  color={Color.white}
                  fontSize={RFValue(20)}
                />
              </View>
              <View
                style={{
                  ...styles.textContainer,
                  ...{ marginStart: RFValue(5) },
                }}
              >
                <Text style={{ ...styles.textValue }}>Logout</Text>
                <View style={{ ...styles.viewDivider }}></View>
              </View>
            </TouchableOpacity>
          </View>
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
    marginTop: RFValue(25),
    width: "100%",
    flexDirection: "row",
  },
  iconContainer: {
    // backgroundColor: '#099999',
    marginHorizontal: RFValue(5),
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
    marginTop: RFValue(5),
  },
});
