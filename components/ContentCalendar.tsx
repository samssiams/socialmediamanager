import { ArrowUpRight } from "lucide-react";
import { calendarRows } from "@/lib/data";
import { interfaceCopy } from "@/content/interface";

export default function ContentCalendar() {
  return <div className="calendar-wrap"><div className="calendar-table"><div className="calendar-row calendar-head">{interfaceCopy.calendarColumns.map(x => <b key={x}>{x}</b>)}</div>{calendarRows.map(row => <div className="calendar-row" key={row[0]}>{row.slice(0, 5).map((cell, i) => <span key={i}>{cell}</span>)}<span><i className={`status ${row[5]}`} />{row[5]}</span></div>)}</div><div className="calendar-footer">{interfaceCopy.calendarFooter} <ArrowUpRight size={18} /></div></div>;
}
