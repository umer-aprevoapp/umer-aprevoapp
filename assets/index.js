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
