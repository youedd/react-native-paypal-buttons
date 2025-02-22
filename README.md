# react-native-paypal-buttons

React native implementation of PayPal Buttons
[Expo snack Demo](https://snack.expo.dev/@youedd/paypal-buttons)

<img src="./preview.gif" alt="Preview" width="300" />

## Table of Contents

- [Installation](#installation)
  - [Setup](#setup)
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

### Setup


This package uses `PayPalOpen-Regular` font for the button labels.

<details>
<summary>Bare React Native</summary>

1. Update `react-native.config.js`
    ````
    ...
      assets: [
        "./node_modules/react-native-paypal-buttons/src/assets/fonts"
      ]
    ````
2. Run command 
    ````
    npx react-native-asset
    ````
</details>

<details>
<summary>Expo</summary>

1. Install the `expo-font` package:
    ```sh
    expo install expo-font
    ```
2. Update expo config
    ```tsx
    {
      "expo": {
        "plugins": [
          [
            "expo-font",
            {
              "fonts": ["./node_modules/react-native-paypal-buttons/src/assets/fonts/PayPalOpen-Regular.otf"]
            }
          ]
        ]
      }
    }
    ```

</details>

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

### Common Props
Any [PressableProps](https://reactnative.dev/docs/pressable.html#props) and the following:
| Prop     | Values                                                                                   | Default Value |
|----------|------------------------------------------------------------------------------------------|---------------|
| `edges`  | `PaymentButtonEdges.HARD_EDGES`, `PaymentButtonEdges.SOFT_EDGES`, `PaymentButtonEdges.ROUNDED`, or a custom number | `PaymentButtonEdges.SOFT_EDGES` |
| `size`   | `PaymentButtonSize.MINI`, `PaymentButtonSize.COLLAPSED`, `PaymentButtonSize.EXPANDED`, `PaymentButtonSize.FULL` | `PaymentButtonSize.EXPANDED` |

### PayPalButton Specific Props

| Prop   | Values                                      | Default Value |
|--------|---------------------------------------------|---------------|
| `color`| `PayPalButtonColor.GOLD`, `PayPalButtonColor.WHITE`, `PayPalButtonColor.BLACK`, `PayPalButtonColor.SILVER`, `PayPalButtonColor.BLUE` | `PayPalButtonColor.GOLD` |
| `label`| `PayPalButtonLabel.NONE`, `PayPalButtonLabel.CHECKOUT`, `PayPalButtonLabel.BUY_NOW`, `PayPalButtonLabel.PAY_WITH` | `PayPalButtonLabel.NONE` |

### PayPalPayLaterButton Specific Props

| Prop   | Values                                      | Default Value |
|--------|---------------------------------------------|---------------|
| `color`| `PayLaterButtonColor.GOLD`, `PayLaterButtonColor.WHITE`, `PayLaterButtonColor.BLACK`, `PayLaterButtonColor.SILVER`, `PayLaterButtonColor.BLUE` | `PayLaterButtonColor.GOLD` |

### PayPalCreditButton Specific Props

| Prop   | Values                                      | Default Value |
|--------|---------------------------------------------|---------------|
| `color`| `CreditButtonColor.WHITE`, `CreditButtonColor.BLACK`, `CreditButtonColor.DARK_BLUE` | `CreditButtonColor.WHITE` |

## Contributing

See the contributing guide to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
