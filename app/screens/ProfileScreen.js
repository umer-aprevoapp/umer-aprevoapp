import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../../assets/colors/Color";
import font from "../../assets/fonts/font";
import FontAwsomeIcon from "../components/FontAwsomeIcon";
import IHeader from "../components/IHeader";
import ITextInput from "../components/ITextInput";
import ITextView from "../components/ITextView";

function ProfileScreen(props) {
  return (
    <View>
      <IHeader
        headerTitle="Profile"
        navigation={props.navigation}
        isMenuButton={false}
        showInputField={false}
        showAddIcon={false}
        isProfileIcon={false}
      />

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: RFValue(30),
        }}
      >
        <View
          style={{
            borderColor: Color.black,
            borderWidth: 1,
            width: RFValue(90),
            justifyContent: "center",
            alignItems: "center",
            height: RFValue(90),
            borderRadius: RFValue(5),
          }}
        >
          <FontAwsomeIcon name="user" fontSize={RFValue(60)} />
        </View>
        <ITextView
          style={{
            fontFamily: font.opensans_bold,
            color: Color.black,
            marginTop: RFValue(5),
          }}
          text="James Ferguson"
        />
        <ITextView
          style={{
            color: Color.black,
            fontSize: RFValue(12),
          }}
          text="aprevo Specialist"
        />
      </View>

      <View style={styles.viewContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "baseline",
            justifyContent: "space-around",
          }}
        >
          <ITextView
            text="Email"
            style={{
              textAlign: "left",
              width: "40%",
              fontSize: RFValue(15),
            }}
          />
          <TextInput
            placeholder="Email"
            value="umer.abidin@nxvt.com"
            style={{
              width: "60%",
              paddingTop: RFValue(10),
              paddingHorizontal: RFValue(10),
              fontFamily: font.opensans_medium,
              color: Color.black,
              fontSize: RFValue(12),
            }}
          />
        </View>
        <View style={{ ...styles.viewDivider }}></View>
      </View>

      <View style={styles.viewContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "baseline",
            justifyContent: "space-around",
          }}
        >
          <ITextView
            text="Contact:"
            style={{
              textAlign: "left",
              width: "40%",
              fontSize: RFValue(15),
            }}
          />
          <TextInput
            placeholder="Contact number"
            value="+1 555 444 8899"
            style={{
              width: "60%",
              paddingTop: RFValue(10),
              paddingHorizontal: RFValue(10),
              fontFamily: font.opensans_medium,
              color: Color.black,
              fontSize: RFValue(12),
            }}
          />
        </View>
        <View style={{ ...styles.viewDivider }}></View>
      </View>

      <View style={styles.viewContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "baseline",
            justifyContent: "space-around",
          }}
        >
          <ITextView
            text="City, State:"
            style={{
              textAlign: "left",
              width: "40%",
              fontSize: RFValue(15),
            }}
          />
          <TextInput
            placeholder="City, State"
            value="California"
            style={{
              width: "60%",
              paddingTop: RFValue(10),
              paddingHorizontal: RFValue(10),
              fontFamily: font.opensans_medium,
              color: Color.black,
              fontSize: RFValue(12),
            }}
          />
        </View>
        <View style={{ ...styles.viewDivider }}></View>
      </View>

      <View style={styles.viewContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "baseline",
            justifyContent: "space-around",
          }}
        >
          <ITextView
            text="Country:"
            style={{
              textAlign: "left",
              width: "40%",
              fontSize: RFValue(15),
            }}
          />
          <TextInput
            placeholder="Country"
            value="United States"
            style={{
              width: "60%",
              paddingTop: RFValue(10),
              paddingHorizontal: RFValue(10),
              fontFamily: font.opensans_medium,
              color: Color.black,
              fontSize: RFValue(12),
            }}
          />
        </View>
        <View style={{ ...styles.viewDivider }}></View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  //main container
  viewContainer: {
    marginHorizontal: RFValue(20),
    marginVertical: RFValue(10),
  },
  textContainer: {
    width: "80%",
    // backgroundColor: '#778788',
    justifyContent: "center",
    alignContent: "center",
  },

  viewDivider: {
    borderColor: Color.test,
    borderWidth: 0.5,
    marginTop: RFValue(5),
  },
});

export default ProfileScreen;
