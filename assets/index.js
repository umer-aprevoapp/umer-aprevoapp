export const GET_DROPDOWN_DIRECTION = (direction) => {
  switch (direction) {
    case DROPDOWN_DIRECTION.AUTO:
      return "top";
    case DROPDOWN_DIRECTION.TOP:
      return "bottom";
    case DROPDOWN_DIRECTION.BOTTOM:
      return "top";
    default:
      return "top";
  }
};

export const DROPDOWN_DIRECTION = {
  DEFAULT: "AUTO",
  TOP: "TOP",
  BOTTOM: "BOTTOM",
  AUTO: "AUTO",
};

export const SCREEN_NAMES = {
  ADD_NEW_CASE_SCREEN: "Add New Case",
  CASE_DETAILS: "Case Details",
  INTER_BODY: "Inter Body",
  PATIENT_TAB_SCREEN: "Patient",
  CASE_LIST_SCREEN: "CaseList",
};
