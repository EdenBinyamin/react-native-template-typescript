import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  resources: {
    he: {
      translations: {
        register: {
          smsPasswordPage: {
            header: "קוד אימות",
            typePassword: "הזן בבקשה את קוד האימות שנשלח אליך",
            wrongPassword: "הקוד שגוי, נסה שוב",
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
            registeration: "הרשמה",
            addPicture: "הוסף תמונה",
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
