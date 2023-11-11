import {
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProfileNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import MainLayout from 'layouts/MainLayout';
import styles from './styles';
import assets from 'assets';

import CameraIcon from 'assets/svgs/camera.svg';
import { moderateScale } from 'utils/styles';
import Typography from 'components/Typography';

import ProfileIcon from 'assets/svgs/profile-red.svg';
import PasswordIcon from 'assets/svgs/password-red.svg';
import NotificationIcon from 'assets/svgs/notification.svg';
import LanguageIcon from 'assets/svgs/language.svg';
import CurrencyIcon from 'assets/svgs/currency.svg';
import FaqsIcon from 'assets/svgs/faqs.svg';
import AboutUsIcon from 'assets/svgs/about-us.svg';
import LogoutIcon from 'assets/svgs/logout.svg';
import { BottomSheetDriver } from 'hooks/use-bottom-sheet';

type ProfileProps = NativeStackScreenProps<
  ProfileNavigatorParamList,
  typeof SCREENS.PROFILE
>;

type ProfileScreen = React.FC<ProfileProps>;

const iconSize = moderateScale(18);

const Profile: ProfileScreen = ({ navigation }) => {
  return (
    <>
      <MainLayout type="core" scrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableHighlight style={styles.imageContainer}>
              <Image
                source={assets.images.profilePicX2}
                resizeMode="contain"
                style={styles.image}
              />
            </TouchableHighlight>
            <View style={styles.cameraIcon}>
              <CameraIcon
                width={moderateScale(25)}
                height={moderateScale(25)}
              />
            </View>

            <Typography variant="heading2">John Doe</Typography>
          </View>

          <View style={styles.list}>
            <TouchableOpacity
              onPress={() => navigation.navigate(SCREENS.EDIT_PROFILE)}
              style={styles.card}
            >
              <ProfileIcon width={iconSize} height={iconSize} />
              <Typography variant="body3">Profile</Typography>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(SCREENS.CHANGE_PASSWORD)}
              style={styles.card}
            >
              <PasswordIcon width={iconSize} height={iconSize} />
              <Typography variant="body3">Change Password</Typography>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <NotificationIcon width={iconSize} height={iconSize} />
              <Typography variant="body3">Notifications</Typography>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(SCREENS.LANGUAGE)}
              style={styles.card}
            >
              <LanguageIcon width={iconSize} height={iconSize} />
              <Typography variant="body3">Language</Typography>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <CurrencyIcon width={iconSize} height={iconSize} />
              <Typography variant="body3">Payment Method</Typography>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(SCREENS.FAQS)}
              style={styles.card}
            >
              <FaqsIcon width={iconSize} height={iconSize} />
              <Typography variant="body3">FAQs</Typography>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(SCREENS.ABOUT_US)}
              style={styles.card}
            >
              <AboutUsIcon width={iconSize} height={iconSize} />
              <Typography variant="body3">About Us</Typography>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                BottomSheetDriver.toggle();
              }}
              style={styles.card}
            >
              <LogoutIcon width={iconSize} height={iconSize} />
              <Typography variant="body3">Logout</Typography>
            </TouchableOpacity>
          </View>
        </View>
      </MainLayout>
    </>
  );
};

export default Profile;
