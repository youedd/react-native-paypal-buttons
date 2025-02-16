export enum PaymentButtonSize {
  MINI = 'MINI',
  COLLAPSED = 'COLLAPSED',
  EXPANDED = 'EXPANDED',
  FULL = 'FULL',
}

export enum PaymentButtonLabel {
  NONE = 'None',
  CHECKOUT = 'Checkout',
  BUY_NOW = 'Buy Now',
  PAY_WITH = 'Pay with',
  PAY_LATER = 'Pay Later',
}

export enum PayPalButtonLabel {
  NONE = PaymentButtonLabel.NONE,
  CHECKOUT = PaymentButtonLabel.CHECKOUT,
  BUY_NOW = PaymentButtonLabel.BUY_NOW,
  PAY_WITH = PaymentButtonLabel.PAY_WITH,
}

export enum PaymentButtonFundingSource {
  PAYPAL = 'PayPal',
  PAY_LATER = 'Pay Later',
  CREDIT = 'Credit',
}

export enum PaymentButtonEdges {
  HARD_EDGES = 'hardEdges',
  SOFT_EDGES = 'softEdges',
  ROUNDED = 'rounded',
}

export enum PaymentButtonColor {
  GOLD = '#FFC439',
  WHITE = '#FFFFFF',
  BLACK = '#000000',
  SILVER = '#EEEEEE',
  BLUE = '#0070BA',
  DARK_BLUE = '#073990',
}

export enum PayPalButtonColor {
  GOLD = PaymentButtonColor.GOLD,
  WHITE = PaymentButtonColor.WHITE,
  BLACK = PaymentButtonColor.BLACK,
  SILVER = PaymentButtonColor.SILVER,
  BLUE = PaymentButtonColor.BLUE,
}

export enum PayLaterButtonColor {
  GOLD = PaymentButtonColor.GOLD,
  WHITE = PaymentButtonColor.WHITE,
  BLACK = PaymentButtonColor.BLACK,
  SILVER = PaymentButtonColor.SILVER,
  BLUE = PaymentButtonColor.BLUE,
}

export enum CreditButtonColor {
  WHITE = PaymentButtonColor.WHITE,
  BLACK = PaymentButtonColor.BLACK,
  DARK_BLUE = PaymentButtonColor.DARK_BLUE,
}
