import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createWhatsAppLink(message: string) {
  const WHATSAPP_NUMBER = "252618857272"; // DurDur Pharmacy number
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function formatPrice(price: string) {
  // If we wanted to parse and format, we could. 
  // Given prices can be "Contact for Price", we just return the string.
  return price;
}
