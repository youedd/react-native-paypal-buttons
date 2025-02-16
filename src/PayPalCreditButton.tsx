import type { PressableProps, ViewStyle } from 'react-native';
import { PaymentButton } from './PaymentButton';
import {
  CreditButtonColor,
  PaymentButtonColor,
  PaymentButtonEdges,
  PaymentButtonFundingSource,
  PaymentButtonLabel,
  PaymentButtonSize,
} from './types';

export interface PayPalCreditButtonProps extends PressableProps {
  style?: ViewStyle;
  color?: CreditButtonColor;
  edges?: PaymentButtonEdges | number;
  size?: PaymentButtonSize;
}
export const PayPalCreditButton = ({
  color = CreditButtonColor.WHITE,
  edges = PaymentButtonEdges.SOFT_EDGES,
  size = PaymentButtonSize.EXPANDED,
  ...props
}: PayPalCreditButtonProps) => {
  return (
    <PaymentButton
      color={color as unknown as PaymentButtonColor}
      label={PaymentButtonLabel.NONE}
      edges={edges}
      size={size}
      fundingSource={PaymentButtonFundingSource.CREDIT}
      {...props}
    />
  );
};
