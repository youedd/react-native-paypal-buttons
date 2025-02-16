# react-native-paypal-buttons

React native implementation of PayPal Buttons

## Summary

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
  - [Common Props](#common-props)
  - [PayPalButton Specific Props](#paypalbutton-specific-props)
  - [PayPalPayLaterButton Specific Props](#paypalpaylaterbutton-specific-props)
  - [PayPalCreditButton Specific Props](#paypalcreditbutton-specific-props)
- [Contributing](#contributing)
- [License](#license)

## Installation

```sh
npm install react-native-paypal-buttons
```

## Usage

```tsx
import { 
  PayPalButton,
  PayPalCreditButton,
  PayPalPayLaterButton,
} from 'react-native-paypal-buttons';

const MyComponent = () => (
  <>
    <PayPalButton />
    <PayPalPayLaterButton />
    <PayPalCreditButton />
  </>
);
```

## Props

Buttons support `PressableProps`.

### Common Props

| Prop     | Description                                                                 | Values                                                                                   |
|----------|-----------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| `edges`  | The edges of the button.                                                    | `PaymentButtonEdges.HARD_EDGES`, `PaymentButtonEdges.SOFT_EDGES`, `PaymentButtonEdges.ROUNDED`, or a custom number                                 |
| `size`   | The size of the button.                                                     | `PaymentButtonSize.MINI`, `PaymentButtonSize.COLLAPSED`, `PaymentButtonSize.EXPANDED`, `PaymentButtonSize.FULL`                                                   |

### PayPalButton Specific Props

| Prop   | Description                        | Values                                      |
|--------|------------------------------------|---------------------------------------------|
| `color`| The color of the button.           | `PayPalButtonColor.GOLD`, `PayPalButtonColor.WHITE`, `PayPalButtonColor.BLACK`, `PayPalButtonColor.SILVER`, `PayPalButtonColor.BLUE` |
| `label`| The label of the button.           | `PayPalButtonLabel.NONE`, `PayPalButtonLabel.CHECKOUT`, `PayPalButtonLabel.BUY_NOW`, `PayPalButtonLabel.PAY_WITH`   |

### PayPalPayLaterButton Specific Props

| Prop   | Description                        | Values                                      |
|--------|------------------------------------|---------------------------------------------|
| `color`| The color of the button.           | `PayLaterButtonColor.GOLD`, `PayLaterButtonColor.WHITE`, `PayLaterButtonColor.BLACK`, `PayLaterButtonColor.SILVER`, `PayLaterButtonColor.BLUE` |

### PayPalCreditButton Specific Props

| Prop   | Description                        | Values                                      |
|--------|------------------------------------|---------------------------------------------|
| `color`| The color of the button.           | `CreditButtonColor.WHITE`, `CreditButtonColor.BLACK`, `CreditButtonColor.DARK_BLUE` |

## Contributing

See the contributing guide to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
