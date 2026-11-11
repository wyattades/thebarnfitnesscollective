/**
 * WEEKLY SCHEDULE — the "picture" version of the class schedule shown on the
 * Schedule & Book page. This is a snapshot of the recurring weekly classes
 * from the booking system (class name + start times only: no coaches, no
 * spot counts, no one-off events). All classes are one hour.
 *
 * It does not update by itself. When the real schedule changes, edit the times
 * here (or ask Claude to re-pull it from the booking portal).
 *
 * Last pulled from the booking portal: Nov 11, 2026.
 */
export interface ScheduledClass {
  name: string;
  /** Start times, earliest first, e.g. "6:15 AM". */
  times: string[];
  /** Accent color key used for the left stripe + chips (see WeeklySchedule.astro). */
  color: "coral" | "sky" | "teal" | "acid" | "peach" | "lavender" | "cream";
}

export interface ScheduleDay {
  day: string;
  classes: ScheduledClass[];
}

export const weeklySchedule: ScheduleDay[] = [
  {
    day: "Monday",
    classes: [
      { name: "Body Armor", color: "coral", times: ["6:15 AM", "7:30 AM", "9:00 AM", "12:00 PM", "4:00 PM", "5:30 PM"] },
      { name: "Legends (55+)", color: "cream", times: ["10:30 AM", "1:15 PM"] },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      { name: "Build + Blast", color: "sky", times: ["6:15 AM", "7:30 AM", "9:00 AM", "5:30 PM"] },
      { name: "Buttery Bod", color: "lavender", times: ["6:45 PM"] },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      { name: "Body Armor", color: "coral", times: ["6:15 AM", "7:30 AM", "9:00 AM", "12:00 PM", "4:00 PM", "5:30 PM"] },
      { name: "Legends (55+)", color: "cream", times: ["10:30 AM"] },
    ],
  },
  {
    day: "Thursday",
    classes: [
      { name: "Build + Endurance", color: "teal", times: ["6:15 AM", "7:30 AM", "9:00 AM", "5:30 PM"] },
      { name: "Buttery Bod", color: "lavender", times: ["12:00 PM"] },
    ],
  },
  {
    day: "Friday",
    classes: [
      { name: "Pump Party", color: "acid", times: ["6:15 AM", "7:30 AM", "9:00 AM", "12:00 PM", "5:30 PM"] },
      { name: "Legends (55+)", color: "cream", times: ["10:30 AM"] },
    ],
  },
  {
    day: "Saturday",
    classes: [
      { name: "Hybrid Hustle/HYROX", color: "peach", times: ["8:00 AM", "9:15 AM"] },
    ],
  },
];
