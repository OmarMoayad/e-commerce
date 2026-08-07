import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";


i18n
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            en: {
                translation: {
                    "Home": "Home",
                    "Shop": "Shop",
                    "About": "About",
                    "Contact": "Contact",
                    "Cart": "Cart",
                    "Login": "Login",
                    "Register": "Register",
                    "Logout": "Logout",
                    "Footer": "Footer",
                    "Write a Review": "Write a Review",
                    "Cancel": "Cancel",
                    "Client Reviews": "Client Reviews",
                    "based on": "based on",
                    "reviews": "reviews",
                    "Rating": "Rating",
                    "Add to Cart": "Add to Cart",
                    "Submit Review": "Submit Review",
                    "Remix Store": "Remix Store",
                    "All rights reserved.": "All rights reserved.",
                    "Your cart is empty": "Your cart is empty",
                    "Continue Shopping": "Continue Shopping",
                    "Your Shopping Bag": "Your Shopping Bag",
                    "Total": "Total",
                    "Remove": "Remove",
                    "Order Summary": "Order Summary",
                    "Subtotal": "Subtotal",
                    "Shipping": "Shipping",
                    "Complimentary": "Complimentary",
                    "Proceed to Checkout": "Proceed to Checkout",
                    "Clear Cart": "Clear Cart",
                    "Cash on Delivery": "Cash on Delivery",
                    "Order Summary": "Order Summary",
                    "Payment Method": "Payment Method",
                    "Complete Order": "Complete Order",
                    "Checkout": "Checkout",
                    "Visa": "Visa",
                    "Cash on Delivery": "Cash on Delivery",
                    "Remove": "Remove",
                }
            },
            ar: {
                translation: {
                    "Home": "الصفحة الرئيسية",
                    "Shop": "المتجر",
                    "About": "من نحن",
                    "Contact": "اتصل بنا",
                    "Cart": "السلة",
                    "Login": "تسجيل الدخول",
                    "Register": "تسجيل",
                    "Logout": "تسجيل الخروج",
                    "Footer": "الاخر",
                    "Write a Review": "كتابة مراجعة",
                    "Cancel": "الغاء",
                    "Client Reviews": "مراجعات العملاء",
                    "based on": "بناء على",
                    "reviews": "مراجعات",
                    "Rating": "التقييم",
                    "Add to Cart": "اضافة الى السلة",
                    "Submit Review": "ارسال مراجعة",
                    "Remix Store": "متجر ريمكس",
                    "All rights reserved.": "جميع الحقوق محفوظة",
                    "Your cart is empty": "سلة التسوق فارغة",
                    "Continue Shopping": "مواصلة التسوق",
                    "Your Shopping Bag": "حقيبة التسوق الخاصة بك",
                    "Subtotal": "المجموع الفرعي",
                    "Shipping": "الشحن",
                    "Complimentary": "مجاني",
                    "Proceed to Checkout": "الانتقال الى الدفع",
                    "Clear Cart": "مسح السلة",
                    "Total": "المجموع",
                    "Order Summary": "ملخص الطلب",
                    "Payment Method": "طريقة الدفع",
                    "Complete Order": "اكمال الطلب",
                    "Checkout": "الدفع",
                    "Visa": "فيزا",
                    "Cash on Delivery":"الدفع عند الاستلام",
                    "Remove": "حذف",
                }
                
            }

        },
        lng: "", // if you're using a language detector, do not define the lng option
        fallbackLng: "en",

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });

    export default i18n;