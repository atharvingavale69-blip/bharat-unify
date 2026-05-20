import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      brand: "RLHS",
      tagline: "Rashtriya Lok Hit Sangathan",
      nav: {
        home: "Home",
        forum: "Forum",
        movement: "Movement",
        admin: "Command",
        login: "Sign in",
        signup: "Join",
      },
      hero: {
        kicker: "A disciplined platform for Bharat",
        title: "Truth. Discipline. Bharat.",
        sub: "A command-grade civic platform where citizens debate, organise, and build the next India — without noise, without propaganda.",
        ctaPrimary: "Join the movement",
        ctaSecondary: "Enter the forum",
      },
      pillars: {
        title: "Four pillars",
        intellect: {
          t: "Intellect",
          d: "Reasoned discourse over outrage. Every claim cited, every voice accountable.",
        },
        discipline: {
          t: "Discipline",
          d: "Ranks, XP and reputation. Earned, not bought.",
        },
        bharat: {
          t: "Bharat",
          d: "Pan-India, multilingual, federated by state and district.",
        },
        truth: {
          t: "Truth",
          d: "Transparent moderation. Public audit log. No shadow bans.",
        },
      },
      footer: {
        rights: "All rights reserved.",
      },
    },
  },
  hi: {
    translation: {
      brand: "RLHS",
      tagline: "राष्ट्रीय लोक हित संगठन",
      nav: {
        home: "मुख्य",
        forum: "मंच",
        movement: "आंदोलन",
        admin: "कमांड",
        login: "लॉगिन",
        signup: "जुड़ें",
      },
      hero: {
        kicker: "भारत के लिए एक अनुशासित मंच",
        title: "सत्य. अनुशासन. भारत.",
        sub: "एक कमांड-स्तरीय नागरिक मंच जहाँ नागरिक बहस करें, संगठित हों और अगला भारत गढ़ें — बिना शोर, बिना प्रचार।",
        ctaPrimary: "आंदोलन में जुड़ें",
        ctaSecondary: "मंच पर जाएँ",
      },
      pillars: {
        title: "चार स्तंभ",
        intellect: { t: "बुद्धि", d: "क्रोध नहीं, तर्क।" },
        discipline: { t: "अनुशासन", d: "रैंक, XP और प्रतिष्ठा — अर्जित।" },
        bharat: { t: "भारत", d: "पैन-भारत, बहुभाषी, राज्य व जिले से जुड़ा।" },
        truth: { t: "सत्य", d: "पारदर्शी संचालन। सार्वजनिक ऑडिट।" },
      },
      footer: { rights: "सर्वाधिकार सुरक्षित।" },
    },
  },
};

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: "en",
      supportedLngs: ["en", "hi"],
      interpolation: { escapeValue: false },
    });
}

export default i18n;
