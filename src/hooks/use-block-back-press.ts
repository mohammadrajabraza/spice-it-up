import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { BackHandler } from 'react-native';

const useBlockBackPress = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const navigationSubscription = navigation.addListener(
      'beforeRemove',
      () => {},
    );
    const backHandleSubscription = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        BackHandler.exitApp();
        return false;
      },
    );
    return () => {
      navigationSubscription();
      backHandleSubscription.remove();
    };
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);
};

export default useBlockBackPress;
