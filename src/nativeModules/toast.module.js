
import { NativeModules } from 'react-native';

const { NativeToastModule } = NativeModules;

export const ToastDuration = {
  SHORT: 0,
  LONG: 1,
}

export default NativeToastModule;
