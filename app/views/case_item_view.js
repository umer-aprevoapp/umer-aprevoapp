import React from "react";
import { Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Color from "../../assets/colors/Color";
import font from "../../assets/fonts/font";

const case_item_view = ({ item }) => {
  return (
    <View
      style={{ marginVertical: RFValue(10), marginHorizontal: RFValue(10) }}
    >
      <Text style={{ fontFamily: font.opensans_bold, fontSize: RFValue(18) }}>
        {item.date}
      </Text>
      <View
        style={{
          textTransform: "uppercase",

          backgroundColor:
            item.caseStatus.toLowerCase() === "ready"
              ? Color.green
              : Color.test,
          borderColor: Color.black,
          padding: RFValue(10),
          borderWidth: 1,
        }}
      >
        <View
          style={{
            flexDirection: "row",

            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontFamily: font.opensans_medium,
              fontSize: RFValue(15),
            }}
          >
            Case # {item.caseNumber}
          </Text>
          <Text
            style={{
              textAlign: "right",
              alignSelf: "center",
              fontSize: RFValue(18),
              fontFamily: font.opensans_bold,
              textTransform: "uppercase",
            }}
          >
            {item.caseStatus}
          </Text>
        </View>
        <Text
          style={{ fontFamily: font.opensans_medium, fontSize: RFValue(15) }}
        >
          Patient: {item.patientName}
        </Text>
        <Text
          style={{ fontFamily: font.opensans_medium, fontSize: RFValue(15) }}
        >
          Surgeon: {item.surgeonName}
        </Text>
      </View>
    </View>
  );
};

export default case_item_view;
