import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { store } from "./store";

i18n.use(LanguageDetector).init({
  resources: {
    he: {
      translations: {
        register: {
          smsPasswordPage: {
            header: "קוד אימות",
            typePassword: "הזן בבקשה את קוד האימות שנשלח אליך",
            wrongPassword: "הקוד שגוי, נסה שוב",
            continue: "המשך",
          },
          registeration: {
            passwordDetails:
              "יש להזין סיסמה בעלת 8 תווים שתכלול אותיות ומספרים",
            matchingPassword: "יש להזין סיסמה תואמת לסיסמה שהקלדת",
            password: "סיסמה",
            typePassword: "הזן סיסמה",
            passwordAuthentication: "אימות סיסמה",
            typeAgain: "הזן סיסמה פעם נוספת",
            takePicture: "הכנס את תמונת הפרופיל שלך שתוצג לבני המשפחה שלך",
            continue: "המשך",
            lengthZero: "יש להזין סיסמה",
            header: "היי {{name}},",
            profilePicture: "תמונת פרופיל",
            details: "לצורך כניסה למערכת, המשך/י בתהליך ההרשמה.",
            addPicture: "הוסף תמונה",
            goBack: "חזור",
            register: "הירשם",
          },
          settings: {
            header: "הגדרות",
            languages: "שפות",
            editProfilePicutre: "עריכת תמונת פרופיל",
            logout: "התנתקות",
            hebrew: "עברית",
            english: "English",
            french: "français",
            russian: "русский",
            arabic: "عربيه",
          },
        },
        login: {
          loginTo: 'התחבר ל"מפני שיבה"',
          phoneNumber: "פלאפון",
          typePhoneNumber: "הזן מס' פלאפון מלא",
          password: "סיסמה",
          typePassword: "הזן סיסמה",
          phoneError: "יש להזין מספר פלאפון",
          passError: "יש להזין סיסמה",
          wrongInput:"שם משתמש או סיסמה לא תקינים",
        },
        mainScreen: {
          momentsTogether: "רגעים של יחד",
        }
      },
    },
    en: {
      translations: {
        register: {
          smsPasswordPage: {
            header: "Verification code",
            typePassword: "Please enter the verification code sent to you",
            wrongPassword: "The code is incorrect, please try again",
            continue: "continue",
          },
          registeration: {
            passwordDetails:
              "Enter an 8-character password that includes letters and numbers",
            matchingPassword:
              "You must enter a password that matches the password you typed",
            password: "Password",
            typePassword: "Enter a password",
            passwordAuthentication: "Password Authentication",
            typeAgain: "Enter password again",
            takePicture:
              "Insert your profile picture will be displayed for your family",
            continue: "continue",
            lengthZero: "A password must be entered",
            header: "Hi {{name}},",
            profilePicture: "Profile Picture",
            details: "In order to log in, continue the registration process.",
            addPicture: "Add a picture",
            goBack: "go back",
            register: "register",
          },
          settings: {
            header: "Settings",
            languages: "Languages",
            editProfilePicutre: "Edit profile picture",
            logout: "Logiut",
            hebrew: "עברית",
            english: "English",
            french: "français",
            russian: "русский",
            arabic: "عربيه",
          },
        },
        login: {
          loginTo: 'Login to "Mipney Seyva"',
          phoneNumber: "Phone Number",
          typePhoneNumber: "Enter a full cell phone number",
          password: "Password",
          typePassword: "Enter a password",
          phoneError: "A cell phone number must be entered",
          passError: "Password must be entered",
        },
      },
    },
  },

  lng: "he",
  fallbackLng: "he",
  debug: true,
  ns: ["translations"],
  defaultNS: "translations",
  interpolation: {
    escapeValue: false,
    formatSeparator: ",",
  },
  react: {
    // wait: true,
    useSuspense: false,
  },
});

export default i18n;
