import {
  PaymentButtonColor,
  PaymentButtonFundingSource,
  PaymentButtonSize,
} from './types';

type LogoType = 'credit' | 'paypal' | 'paypal_monogram';
type LogoVariant = 'blue' | 'color' | 'monochrome';

interface LogoInfo {
  type: LogoType;
  variant: LogoVariant;
  uri: number;
  width: number;
  height: number;
}

const paypalLogos: LogoInfo[] = [
  {
    type: 'credit',
    variant: 'color',
    uri: require('./assets/logos/credit_color.png'),
    width: 262,
    height: 88,
  },
  {
    type: 'credit',
    variant: 'monochrome',
    uri: require('./assets/logos/credit_monochrome.png'),
    width: 262,
    height: 88,
  },
  {
    type: 'paypal_monogram',
    variant: 'blue',
    uri: require('./assets/logos/paypal_monogram_blue.png'),
    width: 34,
    height: 38,
  },
  {
    type: 'paypal_monogram',
    variant: 'color',
    uri: require('./assets/logos/paypal_monogram_color.png'),
    width: 34,
    height: 38,
  },
  {
    type: 'paypal_monogram',
    variant: 'monochrome',
    uri: require('./assets/logos/paypal_monogram_monochrome.png'),
    width: 34,
    height: 38,
  },
  {
    type: 'paypal',
    variant: 'blue',
    uri: require('./assets/logos/paypal_blue.png'),
    width: 206,
    height: 52,
  },
  {
    type: 'paypal',
    variant: 'color',
    uri: require('./assets/logos/paypal_color.png'),
    width: 206,
    height: 52,
  },
  {
    type: 'paypal',
    variant: 'monochrome',
    uri: require('./assets/logos/paypal_monochrome.png'),
    width: 206,
    height: 52,
  },
];

const getLogoType = (
  fundingSource: PaymentButtonFundingSource,
  size: PaymentButtonSize
): LogoType => {
  switch (fundingSource) {
    case PaymentButtonFundingSource.CREDIT:
      return 'credit';
    case PaymentButtonFundingSource.PAY_LATER:
      return 'paypal_monogram';
    case PaymentButtonFundingSource.PAYPAL:
      if (size === PaymentButtonSize.MINI) {
        return 'paypal_monogram';
      }
      return 'paypal';
  }
};

const getLogoVariant = (backgroundColor: PaymentButtonColor): LogoVariant => {
  switch (backgroundColor) {
    case PaymentButtonColor.BLUE:
      return 'blue';

    case PaymentButtonColor.GOLD:
    case PaymentButtonColor.WHITE:
    case PaymentButtonColor.SILVER:
      return 'color';

    case PaymentButtonColor.BLACK:
    case PaymentButtonColor.BLACK:
    case PaymentButtonColor.DARK_BLUE:
      return 'monochrome';
  }
};

const getLogoDefaultHeight = (
  fundingSource: PaymentButtonFundingSource,
  size: PaymentButtonSize
) => {
  switch (size) {
    case PaymentButtonSize.MINI:
      return [
        PaymentButtonFundingSource.PAY_LATER,
        PaymentButtonFundingSource.CREDIT,
      ].includes(fundingSource)
        ? 12
        : 24;

    case PaymentButtonSize.COLLAPSED:
      return 15;

    case PaymentButtonSize.EXPANDED:
      return 20;

    case PaymentButtonSize.FULL:
      return 26;
  }
};

export const getLogoInfo = (
  fundingSource: PaymentButtonFundingSource,
  size: PaymentButtonSize,
  backgroundColor: PaymentButtonColor
): LogoInfo => {
  const type = getLogoType(fundingSource, size);
  const variant = getLogoVariant(backgroundColor);

  const info = paypalLogos.find(
    (logo) => logo.type === type && logo.variant === variant
  );

  if (!info) {
    throw 'Unable to find logo infos';
  }

  const ratio = info.width / info.height;
  const height = getLogoDefaultHeight(fundingSource, size);

  return {
    ...info,
    height,
    width: height * ratio,
  };
};
