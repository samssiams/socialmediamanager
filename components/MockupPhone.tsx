"use client";

import Image from "next/image";
import {
  BarChart3,
  BatteryMedium,
  Bluetooth,
  Camera,
  Captions,
  ChevronLeft,
  Heart,
  Image as ImageIcon,
  MessageCircle,
  Minus,
  Moon,
  MoreHorizontal,
  Plane,
  Play,
  Plus,
  Scissors,
  Send,
  Settings,
  Signal,
  SlidersHorizontal,
  Sparkles,
  Volume2,
  Wifi,
  X,
} from "lucide-react";
import { useState } from "react";
import styles from "./MockupPhone.module.css";
import { phone } from "@/content/main-page/phone";

type PhoneApp = "home" | "editor" | "instagram" | "photos" | "insights";

function VlogEditor() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTool, setActiveTool] = useState<string>(phone.editor.tools[0]);
  const [exported, setExported] = useState(false);
  const tools = phone.editor.tools.map((label, index) => ({ label, icon: [Scissors, Captions, Volume2, SlidersHorizontal][index] }));

  return <div className={`${styles.creatorApp} creator-app`}>
    <header className="editor-top"><div><b>{phone.editor.project}</b><small>{phone.editor.title}</small></div><button onClick={() => { setExported(true); setTimeout(() => setExported(false), 1800); }}>{exported ? phone.editor.saved : phone.editor.export}</button></header>
    <div className={`vlog-preview ${isPlaying ? styles.playing : ""}`}>
      <div className="preview-meta"><span>{phone.editor.ratio}</span><span>{isPlaying ? phone.editor.playingTime : phone.editor.pausedTime}</span></div>
      <div className="manila-image" role="img" aria-label="Placeholder for A Day With Me in Manila vlog image"><div className="manila-sun"/><div className="manila-skyline"><i/><i/><i/><i/><i/></div><div className="creator-silhouette"/></div>
      <div className="vlog-frame"><strong>{phone.editor.frameTop}<br/><em>{phone.editor.frameScript}</em><br/>{phone.editor.frameBottom}</strong></div>
      <button aria-label={isPlaying ? "Pause vlog" : "Preview vlog"} onClick={() => setIsPlaying((playing) => !playing)}><Play size={14} fill="currentColor"/></button>
      <small>{phone.editor.byline}</small>
    </div>
    <div className="editor-tools">{tools.map(({ label, icon: Icon }) => <button key={label} className={activeTool === label ? styles.activeTool : ""} onClick={() => setActiveTool(label)}><Icon size={13}/>{label}</button>)}</div>
    <div className="edit-timeline"><div className="time-ruler">{phone.editor.timeline.map(time=><span key={time}>{time}</span>)}</div><div className={`timeline-playhead ${isPlaying ? styles.playheadMoving : ""}`}><i/></div><div className="video-track">{phone.editor.clips.map((clip,index)=><span key={clip} className={`clip clip-${index}`}>{clip}</span>)}</div><div className="audio-track"><Volume2 size={8}/><span/><span/><span/><span/><span/></div><div className="caption-track"><Captions size={8}/><span>{phone.editor.caption}</span></div></div>
    <div className="edit-status"><span><Sparkles size={11}/> {activeTool} {phone.editor.selected}</span><MoreHorizontal size={13}/></div>
  </div>;
}

function HomeScreen({ openApp }: { openApp: (app: PhoneApp) => void }) {
  const apps = [{ name: phone.home.apps[0], icon: Scissors, app: "editor" as const }, { name: phone.home.apps[1], icon: Camera, app: "instagram" as const }, { name: phone.home.apps[2], icon: ImageIcon, app: "photos" as const }, { name: phone.home.apps[3], icon: BarChart3, app: "insights" as const }];
  return <div className={styles.homeScreen}><div className={styles.homeDate}><small>{phone.home.weather}</small><strong>{phone.home.time}</strong><span>{phone.home.date}</span></div><div className={styles.appGrid}>{apps.map(({name,icon:Icon,app})=><button key={name} onClick={() => openApp(app)}><i className={styles[`app${name}`]}><Icon size={19}/></i><span>{name}</span></button>)}</div><div className={styles.homeWidget}><small>{phone.home.widgetLabel}</small><b>“{phone.home.widgetTitle}”</b><span>{phone.home.widgetStatus}</span><div><i/></div></div><div className={styles.dock}><button onClick={() => openApp("instagram")} aria-label="Open Instagram"><Camera/></button><button onClick={() => openApp("editor")} aria-label="Open editor"><Scissors/></button><button onClick={() => openApp("photos")} aria-label="Open photos"><ImageIcon/></button></div></div>;
}

function InstagramApp({ goBack }: { goBack: () => void }) {
  return <div className={styles.instagramApp}><header><button onClick={goBack} aria-label="Go back"><ChevronLeft/></button><b>{phone.instagram.account}</b><MoreHorizontal/></header><div className={styles.igStories}>{phone.instagram.stories.map((story)=><div key={story}><i>{story.slice(0,1)}</i><span>{story}</span></div>)}</div><article className={styles.igPost}><div className={styles.igAuthor}><i>{phone.instagram.account.slice(0,1).toUpperCase()}</i><span><b>{phone.instagram.account}</b><small>{phone.instagram.location}</small></span><MoreHorizontal/></div><div className={styles.igImage}><div/><strong>{phone.instagram.imageTop}<br/><em>{phone.instagram.imageScript}</em><br/>{phone.instagram.imageBottom}</strong><span>{phone.instagram.vlogNumber}</span></div><div className={styles.igActions}><span><Heart/><MessageCircle/><Send/></span><b>•••</b></div><p><b>{phone.instagram.likes}</b><br/>{phone.instagram.caption}</p></article></div>;
}

function SimpleApp({ app, goBack }: { app: "photos" | "insights"; goBack: () => void }) {
  return <div className={styles.simpleApp}><header><button onClick={goBack}><ChevronLeft/></button><b>{app === "photos" ? phone.insights.photosTitle : phone.insights.title}</b><Settings/></header>{app === "photos" ? <div className={styles.photoGrid}>{Array.from({length:9},(_,i)=><i key={i}/>)}</div> : <><strong>{phone.insights.reach}</strong><span>{phone.insights.growth}</span><div className={styles.insightBars}>{[42,58,36,72,65,88,100].map((h,i)=><i key={i} style={{height:`${h}%`}}/>)}</div></>}</div>;
}

function ControlCenter({ close, zoom, setZoom }: { close: () => void; zoom: number; setZoom: (zoom: number) => void }) {
  const [wifi, setWifi] = useState(true); const [bluetooth, setBluetooth] = useState(true); const [airplane, setAirplane] = useState(false); const [focus, setFocus] = useState(false);
  return <div className={styles.controlCenter}><header><b>{phone.controls.title}</b><button onClick={close}><X/></button></header><div className={styles.controlGrid}><button className={airplane ? styles.controlActive : ""} onClick={()=>setAirplane(!airplane)}><Plane/><span>{phone.controls.airplane}</span></button><button className={wifi ? styles.controlActive : ""} onClick={()=>setWifi(!wifi)}><Wifi/><span>{phone.controls.wifi}</span></button><button className={bluetooth ? styles.controlActive : ""} onClick={()=>setBluetooth(!bluetooth)}><Bluetooth/><span>{phone.controls.bluetooth}</span></button><button className={focus ? styles.controlActive : ""} onClick={()=>setFocus(!focus)}><Moon/><span>{phone.controls.focus}</span></button></div><div className={styles.sliders}><label><Sparkles/><input aria-label="Brightness" type="range" defaultValue="75"/></label><label><Volume2/><input aria-label="Volume" type="range" defaultValue="55"/></label></div><div className={styles.zoomControl}><span>{phone.controls.zoom}</span><div><button onClick={()=>setZoom(Math.max(.9,zoom-.1))}><Minus/></button><b>{Math.round(zoom*100)}%</b><button onClick={()=>setZoom(Math.min(1.2,zoom+.1))}><Plus/></button></div></div></div>;
}

function PhoneOS() {
  const [app, setApp] = useState<PhoneApp>("home"); const [controlOpen, setControlOpen] = useState(false); const [zoom, setZoom] = useState(1);
  return <><button className={styles.statusBar} onClick={() => setControlOpen(true)} aria-label="Open Control Center"><b>{phone.home.time}</b><span><Signal/><Wifi/><BatteryMedium/></span></button><div className={styles.appViewport} style={{ "--phone-zoom": zoom } as React.CSSProperties}>{app === "home" && <HomeScreen openApp={setApp}/>} {app === "editor" && <VlogEditor/>} {app === "instagram" && <InstagramApp goBack={()=>setApp("home")}/>} {(app === "photos" || app === "insights") && <SimpleApp app={app} goBack={()=>setApp("home")}/>}</div>{controlOpen && <ControlCenter close={()=>setControlOpen(false)} zoom={zoom} setZoom={setZoom}/>}<button className={styles.homeIndicator} onClick={()=>{setApp("home");setControlOpen(false)}} aria-label="Go to Home"/></>;
}

function FeedMockup() { return <><div className="phone-profile"><i /> {phone.feed.account}</div><div className="phone-post visual-placeholder warm"><Image src={phone.feed.image.src} alt={phone.feed.image.alt} fill sizes="220px"/></div><div className="phone-actions"><Heart size={16} /><MessageCircle size={16} /></div><b>{phone.feed.caption}</b></>; }

export default function MockupPhone({ variant = "logo" }: { variant?: "logo" | "feed" }) {
  return <div className={`phone ${variant} ${styles.device}`}><span className={`${styles.sideButton} ${styles.silentButton}`}/><span className={`${styles.sideButton} ${styles.volumeUp}`}/><span className={`${styles.sideButton} ${styles.volumeDown}`}/><span className={`${styles.sideButton} ${styles.powerButton}`}/><div className={`phone-speaker ${styles.dynamicIsland}`}><i/></div><div className={`phone-screen ${styles.screen}`}>{variant === "logo" ? <PhoneOS/> : <FeedMockup/>}</div></div>;
}
