import {
  CreditButtonColor,
  PayLaterButtonColor,
  PaymentButtonColor,
  PaymentButtonEdges,
  PaymentButtonFundingSource,
  PaymentButtonSize,
  PayPalButton,
  PayPalButtonColor,
  PayPalButtonLabel,
  PayPalCreditButton,
  PayPalPayLaterButton,
} from 'react-native-paypal-buttons';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { useState } from 'react';

const fundingSources = [
  PaymentButtonFundingSource.PAYPAL,
  PaymentButtonFundingSource.CREDIT,
  PaymentButtonFundingSource.PAY_LATER,
];

const colorMapping = {
  [PaymentButtonColor.GOLD]: 'GOLD',
  [PaymentButtonColor.WHITE]: 'WHITE',
  [PaymentButtonColor.BLACK]: 'BLACK',
  [PaymentButtonColor.SILVER]: 'SILVER',
  [PaymentButtonColor.BLUE]: 'BLUE',
  [PaymentButtonColor.DARK_BLUE]: 'DARK BLUE',
};

const paypalColors = [
  PayPalButtonColor.GOLD,
  PayPalButtonColor.WHITE,
  PayPalButtonColor.BLACK,
  PayPalButtonColor.SILVER,
  PayPalButtonColor.BLUE,
];

const payLaterColors = [
  PayLaterButtonColor.GOLD,
  PayLaterButtonColor.WHITE,
  PayLaterButtonColor.BLACK,
  PayLaterButtonColor.SILVER,
  PayLaterButtonColor.BLUE,
];

const creditColors = [
  CreditButtonColor.WHITE,
  CreditButtonColor.BLACK,
  CreditButtonColor.DARK_BLUE,
];

const labels = [
  PayPalButtonLabel.NONE,
  PayPalButtonLabel.BUY_NOW,
  PayPalButtonLabel.CHECKOUT,
  PayPalButtonLabel.PAY_WITH,
];

const sizes = [
  PaymentButtonSize.MINI,
  PaymentButtonSize.COLLAPSED,
  PaymentButtonSize.EXPANDED,
  PaymentButtonSize.FULL,
];

const edges = [
  PaymentButtonEdges.HARD_EDGES,
  PaymentButtonEdges.SOFT_EDGES,
  PaymentButtonEdges.ROUNDED,
  'custom',
];

export default function Example() {
  const [fundingSourceIndex, setFundingSourceIndex] = useState(0);

  const [paypalColorsIndex, setPaypalColorsIndex] = useState(0);
  const [payLaterColorsIndex, setPayLaterColorsIndex] = useState(0);
  const [creditColorsIndex, setCreditColorsIndex] = useState(0);

  const [labelIndex, setLabelIndex] = useState(2);

  const [sizeIndex, setSizeIndex] = useState(0);

  const [edgesIndex, setEdgesIndex] = useState(0);
  const [customEdge, setCustomEdge] = useState(0);

  const fundingSource = fundingSources[fundingSourceIndex];
  const size = sizes[sizeIndex];
  const label = labels[labelIndex];

  const edge =
    edges[edgesIndex] === 'custom'
      ? customEdge
      : (edges[edgesIndex] as PaymentButtonEdges);

  const showPayPal = fundingSource === PaymentButtonFundingSource.PAYPAL;
  const showPayLater = fundingSource === PaymentButtonFundingSource.PAY_LATER;
  const showCredit = fundingSource === PaymentButtonFundingSource.CREDIT;

  return (
    <View style={styles.container}>
      <SegmentedControlTab
        values={fundingSources}
        selectedIndex={fundingSourceIndex}
        onTabPress={setFundingSourceIndex}
      />

      {showPayPal && (
        <SegmentedControlTab
          values={paypalColors.map((it) => colorMapping[it])}
          selectedIndex={paypalColorsIndex}
          onTabPress={setPaypalColorsIndex}
        />
      )}

      {showPayLater && (
        <SegmentedControlTab
          values={payLaterColors.map((it) => colorMapping[it])}
          selectedIndex={payLaterColorsIndex}
          onTabPress={setPayLaterColorsIndex}
        />
      )}

      {showCredit && (
        <SegmentedControlTab
          values={creditColors.map((it) => colorMapping[it])}
          selectedIndex={creditColorsIndex}
          onTabPress={setCreditColorsIndex}
        />
      )}

      <SegmentedControlTab
        values={sizes}
        selectedIndex={sizeIndex}
        onTabPress={setSizeIndex}
      />

      <SegmentedControlTab
        values={edges}
        selectedIndex={edgesIndex}
        onTabPress={setEdgesIndex}
      />
      {edges[edgesIndex] === 'custom' && (
        <View style={styles.customEdgeContainer}>
          <Text style={styles.customEdgeText}>Custom Edges : {customEdge}</Text>
          <TouchableHighlight
            disabled={customEdge === 0}
            onPress={() => setCustomEdge(customEdge - 1)}
          >
            <Text style={styles.customEdgeControls}>-</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => setCustomEdge(customEdge + 1)}>
            <Text style={styles.customEdgeControls}>+</Text>
          </TouchableHighlight>
        </View>
      )}

      {showPayPal && (
        <SegmentedControlTab
          values={labels}
          selectedIndex={labelIndex}
          onTabPress={setLabelIndex}
        />
      )}

      {showPayPal && (
        <PayPalButton
          color={paypalColors[paypalColorsIndex]}
          size={size}
          label={label}
          edges={edge}
        />
      )}
      {showPayLater && (
        <PayPalPayLaterButton
          color={payLaterColors[payLaterColorsIndex]}
          size={size}
          edges={edge}
        />
      )}
      {showCredit && (
        <PayPalCreditButton
          color={creditColors[creditColorsIndex]}
          size={size}
          edges={edge}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    alignContent: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  customEdgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  customEdgeText: {
    flex: 1,
  },
  customEdgeControls: {
    fontSize: 24,
    padding: 10,
    backgroundColor: 'grey',
  },
});
