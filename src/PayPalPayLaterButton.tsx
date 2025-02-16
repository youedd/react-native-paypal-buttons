import type { PressableProps, ViewStyle } from 'react-native';
import { PaymentButton } from './PaymentButton';
import {
  PaymentButtonColor,
  PaymentButtonEdges,
  PaymentButtonFundingSource,
  PaymentButtonSize,
  PaymentButtonLabel,
  PayLaterButtonColor,
} from './types';

export interface PayPalPayLaterButtonProps extends PressableProps {
  style?: ViewStyle;
  color?: PayLaterButtonColor;
  edges?: PaymentButtonEdges | number;
  size?: PaymentButtonSize;
}
export const PayPalPayLaterButton = ({
  color = PayLaterButtonColor.GOLD,
  edges = PaymentButtonEdges.SOFT_EDGES,
  size = PaymentButtonSize.EXPANDED,
  ...props
}: PayPalPayLaterButtonProps) => {
  return (
    <PaymentButton
      color={color as unknown as PaymentButtonColor}
      label={PaymentButtonLabel.PAY_LATER}
      edges={edges}
      size={size}
      fundingSource={PaymentButtonFundingSource.PAY_LATER}
      {...props}
    />
  );
};
