import Example from './Example';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded, error] = useFonts({
    'PayPalOpen-Regular': require('../../assets/fonts/PayPalOpen-Regular.otf'),
  });

  if (!loaded && !error) {
    return null;
  }

  return <Example />;
}
