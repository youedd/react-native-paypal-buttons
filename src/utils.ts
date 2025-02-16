import { PaymentButtonSize, PaymentButtonEdges } from './types';

export const getDefaultSpacing = (size: PaymentButtonSize) => {
  switch (size) {
    case PaymentButtonSize.MINI:
    case PaymentButtonSize.COLLAPSED:
      return 4;
    case PaymentButtonSize.EXPANDED:
      return 4.5;
    case PaymentButtonSize.FULL:
      return 6;
  }
};

export const getDefaultPadding = (size: PaymentButtonSize) => {
  switch (size) {
    case PaymentButtonSize.MINI:
      return {
        paddingTop: 14,
        paddingLeft: 14,
        paddingBottom: 14,
        paddingRight: 14,
      };

    case PaymentButtonSize.COLLAPSED:
      return {
        paddingTop: 15,
        paddingLeft: 20,
        paddingBottom: 15,
        paddingRight: 20,
      };

    case PaymentButtonSize.EXPANDED:
      return {
        paddingTop: 13,
        paddingLeft: 24,
        paddingBottom: 13,
        paddingRight: 24,
      };

    case PaymentButtonSize.FULL:
      return {
        paddingTop: 15,
        paddingLeft: 44,
        paddingBottom: 15,
        paddingRight: 44,
      };
  }
};

export const getDefaultBorderRadius = (
  edge: PaymentButtonEdges | number,
  height: number
) => {
  if (typeof edge === 'number') {
    return edge;
  }

  switch (edge) {
    case PaymentButtonEdges.HARD_EDGES:
      return 0;
    case PaymentButtonEdges.ROUNDED:
      return height / 2;
    case PaymentButtonEdges.SOFT_EDGES:
      return 4;
  }
};
