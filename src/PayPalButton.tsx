import type { PressableProps, ViewStyle } from 'react-native';
import { PaymentButton } from './PaymentButton';
import {
  PaymentButtonColor,
  PaymentButtonEdges,
  PaymentButtonFundingSource,
  PaymentButtonLabel,
  PaymentButtonSize,
  PayPalButtonColor,
  PayPalButtonLabel,
} from './types';

export interface PayPalButtonProps extends PressableProps {
  style?: ViewStyle;
  color?: PayPalButtonColor;
  label?: PayPalButtonLabel;
  edges?: PaymentButtonEdges | number;
  size?: PaymentButtonSize;
}
export const PayPalButton = ({
  color = PayPalButtonColor.GOLD,
  label = PayPalButtonLabel.NONE,
  edges = PaymentButtonEdges.SOFT_EDGES,
  size = PaymentButtonSize.EXPANDED,
  ...props
}: PayPalButtonProps) => {
  return (
    <PaymentButton
      color={color as unknown as PaymentButtonColor}
      label={label as unknown as PaymentButtonLabel}
      edges={edges}
      size={size}
      fundingSource={PaymentButtonFundingSource.PAYPAL}
      {...props}
    />
  );
};
