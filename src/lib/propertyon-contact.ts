export const PROPERTYON_CONTACT = {
  email: "support@f4lcon.tech",
  whatsappDisplay: "+966 55 964 3350",
  whatsappNumber: "966559643350",
  whatsappMessages: {
    ar: "السلام عليكم، مهتم بـ PropertyON وأرغب بمعرفة المزيد عن النظام.",
    en: "Hello, I'm interested in PropertyON and would like to learn more about the platform.",
  },
} as const;

export type PropertyONContactLanguage = keyof typeof PROPERTYON_CONTACT.whatsappMessages;

export function getPropertyONWhatsAppUrl(language: PropertyONContactLanguage) {
  const message = PROPERTYON_CONTACT.whatsappMessages[language];
  return `https://wa.me/${PROPERTYON_CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
