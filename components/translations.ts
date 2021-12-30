import { defineMessages } from "react-intl";

export const messages = defineMessages({
  more: {
    id: "app.home.greeting",
    description: "Link to proceed to the product collection view.",
    defaultMessage: "More →",
  },
  logIn: {
    id: "app.navigation.login",
    description: "Link to login view.",
    defaultMessage: "Log in",
  },
  addToCart: {
    id: "app.product.addToCart",
    description: "Add to cart button label.",
    defaultMessage: "Add to cart",
  },
  variantNotChosen: {
    id: "app.product.variantNotChosen",
    description: "Warning message when variant is not chosen.",
    defaultMessage: "Please chose the variant",
  },
  soldOut: {
    id: "app.product.soldOut",
    description: "Warning message when variant is sold out.",
    defaultMessage: "Sold out!",
  },
  attributes: {
    id: "app.product.attributes",
    description: "Attributes table header.",
    defaultMessage: "Attributes",
  },
});
