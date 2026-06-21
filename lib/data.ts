import {
  BarChart3,
  CalendarCheck,
  Captions,
  Scissors,
  Users,
  Video,
} from "lucide-react";
import { servicesCopy } from "@/content/services";
export { skills, tools } from "@/content/skills-tools";

export const services = servicesCopy.map((service, index) => ({
  ...service,
  icon: [Scissors, Video, CalendarCheck, Captions, Users, BarChart3][index],
}));

export { testimonials } from "@/content/testimonials";

export { packages } from "@/content/pricing";

export { calendarRows } from "@/content/calendar";
