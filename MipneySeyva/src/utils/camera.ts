import { PermissionsAndroid, Platform } from "react-native";
import * as ImagePicker from "react-native-image-picker";
import { MediaType } from "react-native-image-picker";
import { authSetPhotoAction } from "../pages/auth/actions/auth.action";
import { store } from "../store";

const requestCameraPermission = async () => {
  if (Platform.OS === "android") {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "App Camera Permission",
          message: "App needs access to your camera ",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      // If CAMERA Permission is granted
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  } else return true;
};

const requestExternalWritePermission = async () => {
  if (Platform.OS === "android") {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: "App Camera Permission",
          message: "App needs access to your camera ",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      // If WRITE_EXTERNAL_STORAGE Permission is granted
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      console.log("Write permission err", err);
    }
    return false;
  } else return true;
};

export const captureImage = async () => {
  let options = {
    mediaType: "photo" as MediaType,
    maxWidth: 300,
    maxHeight: 550,
    durationLimit: 30, //Video max duration in seconds
    saveToPhotos: true,
  };
  let isCameraPermitted = await requestCameraPermission();
  let isStoragePermitted = await requestExternalWritePermission();
  if (isCameraPermitted && isStoragePermitted) {
    ImagePicker.launchCamera(options, (response) => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled camera picker");
        return;
      } else if (response.errorCode == "camera_unavailable") {
        console.log("Camera not available on device");
        return;
      } else if (response.errorCode == "permission") {
        console.log("Permission not satisfied");
        return;
      } else if (response.errorCode == "other") {
        console.log(response.errorMessage);
        return;
      }
      console.log("base64 -> ", response.base64);
      console.log("uri -> ", response.uri);
      console.log("width -> ", response.width);
      console.log("height -> ", response.height);
      console.log("fileSize -> ", response.fileSize);
      console.log("type -> ", response.type);
      console.log("fileName -> ", response.fileName);
      store.dispatch(authSetPhotoAction(response));
    });
  }
};

const chooseFile = (type: MediaType) => {
  let options = {
    mediaType: type,
    maxWidth: 300,
    maxHeight: 550,
  };
  ImagePicker.launchImageLibrary(options, (response) => {
    console.log("Response = ", response);

    if (response.didCancel) {
      console.log("User cancelled camera picker");
      return;
    } else if (response.errorCode == "camera_unavailable") {
      console.log("Camera not available on device");
      return;
    } else if (response.errorCode == "permission") {
      console.log("Permission not satisfied");
      return;
    } else if (response.errorCode == "other") {
      console.log(response.errorMessage);
      return;
    }
    console.log("base64 -> ", response.base64);
    console.log("uri -> ", response.uri);
    console.log("width -> ", response.width);
    console.log("height -> ", response.height);
    console.log("fileSize -> ", response.fileSize);
    console.log("type -> ", response.type);
    console.log("fileName -> ", response.fileName);
    store.dispatch(authSetPhotoAction(response));
  });
};
