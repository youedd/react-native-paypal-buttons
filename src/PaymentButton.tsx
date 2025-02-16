import {
  Pressable,
  Text,
  Image,
  type PressableProps,
  type ViewStyle,
  StyleSheet,
} from 'react-native';
import { useState } from 'react';
import {
  PaymentButtonColor,
  type PaymentButtonEdges,
  type PaymentButtonFundingSource,
  type PaymentButtonLabel,
  type PaymentButtonSize,
} from './types';
import {
  getDefaultBorderRadius,
  getDefaultPadding,
  getDefaultSpacing,
} from './utils';
import { getLogoInfo } from './logo';
import { getLabelColor, getLabelMode } from './label';

export interface PaymentButtonProps extends PressableProps {
  fundingSource: PaymentButtonFundingSource;
  color: PaymentButtonColor;
  edges: PaymentButtonEdges | number;
  label: PaymentButtonLabel;
  size: PaymentButtonSize;
  style?: ViewStyle;
}

export const PaymentButton = ({
  fundingSource,
  color: backgroundColor,
  edges,
  label,
  size,
  ...props
}: PaymentButtonProps) => {
  const [height, setHeight] = useState(0);

  const logo = getLogoInfo(fundingSource, size, backgroundColor);
  const labelMode = getLabelMode(label, size);

  const borderColor =
    backgroundColor === PaymentButtonColor.WHITE ? 'black' : backgroundColor;
  const opacity = height === 0 ? 0 : 1;
  const flexDirection = labelMode === 'suffix' ? 'row' : 'row-reverse';

  return (
    <Pressable
      {...props}
      onLayout={(event) => {
        setHeight(event.nativeEvent.layout.height);
        props.onLayout?.(event);
      }}
      style={[
        styles.button,
        {
          opacity,
          flexDirection,
          backgroundColor,
          ...getDefaultPadding(size),
          borderRadius: getDefaultBorderRadius(edges, height),
          borderColor,
        },
      ]}
    >
      <Image
        source={logo.uri}
        resizeMode="contain"
        style={{
          height: logo.height,
          width: logo.width,
          marginHorizontal: getDefaultSpacing(size),
        }}
      />
      {labelMode !== 'none' && (
        <Text
          style={[
            styles.label,
            {
              color: getLabelColor(backgroundColor),
            },
          ]}
        >
          {label}
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  label: {
    fontSize: 14,
    fontFamily: 'PayPalOpen-Regular',
  },
});
