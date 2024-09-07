import { StyleSheet } from 'react-native';

import HomeScreenView from '../view/index';
import { getData } from '../model/index';

export default function HomeScreenController() {
  const items = getData();
  
  return (
    <HomeScreenView items={items} />
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
