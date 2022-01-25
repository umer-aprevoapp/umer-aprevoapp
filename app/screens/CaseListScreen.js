import React, { useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";
// import CASE_LIST_ITEMS from "../models/CaseListItems";
import Color from "../../assets/colors/Color";
import font from "../../assets/fonts/font";
import IHeader from "../components/IHeader";
import CaseListItems from "../models/CaseListItems";
import case_item_view from "../views/case_item_view";
import FilterScreen from "./FilterScreen";

function CaseListScreen(props) {
  const [isFlatListView, setisFlatListView] = useState(true);
  const showNoInternetDialog = () => {
    Alert.alert(
      "Offline Mode",
      "Due to no internet connection, application is currently in offline mode."
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
      <View>
        <IHeader
          headerTitle="Case List"
          navigation={props.navigation}
          onFilterIconPressed={() => {
            console.log("Filter Icon Pressed");
            setisFlatListView(false);
          }}
        />
        {isFlatListView ? (
          <FlatList
            style={{ width: "100%", height: "100%" }}
            data={CaseListItems}
            renderItem={case_item_view}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        ) : (
          <FilterScreen
            // navigation={props.navigation}
            onReset={() => setisFlatListView(true)}
            onCancel={() => setisFlatListView(true)}
            onApply={() => setisFlatListView(true)}
          />
        )}

        {/* <IButton text="Show Dialog" onPress={() => showNoInternetDialog()} /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default CaseListScreen;
