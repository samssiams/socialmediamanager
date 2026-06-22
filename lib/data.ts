import {
  BarChart3,
  CalendarCheck,
  Captions,
  Scissors,
  Users,
  Video,
} from "lucide-react";
import { servicesCopy } from "@/content/main-page/services";
export { skills, tools } from "@/content/main-page/skills-tools";

export const services = servicesCopy.map((service, index) => ({
  ...service,
  icon: [Scissors, Video, CalendarCheck, Captions, Users, BarChart3][index],
}));

export { testimonials } from "@/content/main-page/testimonials";

export { packages } from "@/content/main-page/pricing";

export { calendarRows } from "@/content/main-page/calendar";
