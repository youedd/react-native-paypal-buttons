import {
  PaymentButtonColor,
  PaymentButtonSize,
  PaymentButtonLabel,
} from './types';

export type LabelMode = 'suffix' | 'prefix' | 'none';

export const getLabelColor = (background: PaymentButtonColor) => {
  switch (background) {
    case PaymentButtonColor.GOLD:
    case PaymentButtonColor.WHITE:
    case PaymentButtonColor.SILVER:
      return 'black';

    default:
      return 'white';
  }
};

export const getLabelMode = (
  label: PaymentButtonLabel,
  size: PaymentButtonSize
): LabelMode => {
  if (label === PaymentButtonLabel.PAY_LATER) {
    return 'suffix';
  }

  if (
    label === PaymentButtonLabel.NONE ||
    [PaymentButtonSize.MINI, PaymentButtonSize.COLLAPSED].includes(size)
  ) {
    return 'none';
  }

  if (label === PaymentButtonLabel.PAY_WITH) {
    return 'prefix';
  }

  return 'suffix';
};
