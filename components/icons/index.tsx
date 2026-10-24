"use client";

import { createAnimatedIcon, type AnimatedIconProps, type AnimatedIconHandle } from "./animated-icon-factory";

export type { AnimatedIconProps, AnimatedIconHandle };
export type LucideIcon = React.ComponentType<any>;
export type LucideProps = AnimatedIconProps;

export const X = createAnimatedIcon({
  name: "X",
  paths: [["path",{"d":"M18 6 6 18","key":"1bl5f8"}],["path",{"d":"m6 6 12 12","key":"d8bk6v"}]],
  transformOrigin: "center",
  variants: {
    normal: { rotate: 0, scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      rotate: [0, -90, 0],
      scale: [1, 1.15, 1],
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }
});

export const Wrench = createAnimatedIcon({
  name: "Wrench",
  paths: [["path",{"d":"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z","key":"cbrjhi"}]],
  transformOrigin: "85% 15%",
  variants: {
    normal: { rotate: 0, transition: { duration: 0.25, ease: "easeOut" } },
    animate: {
      rotate: [0, 15, -12, 5, 0],
      transition: { duration: 0.32, ease: "easeOut" }
    }
  }
});

export const Cpu = createAnimatedIcon({
  name: "Cpu",
  paths: [["rect",{"width":"16","height":"16","x":"4","y":"4","rx":"2","key":"14l7u7"}],["rect",{"width":"6","height":"6","x":"9","y":"9","rx":"1","key":"5aljv4"}],["path",{"d":"M15 2v2","key":"13l42r"}],["path",{"d":"M15 20v2","key":"15mkzm"}],["path",{"d":"M2 15h2","key":"1gxd5l"}],["path",{"d":"M2 9h2","key":"1bbxkp"}],["path",{"d":"M20 15h2","key":"19e6y8"}],["path",{"d":"M20 9h2","key":"19tzq7"}],["path",{"d":"M9 2v2","key":"165o2o"}],["path",{"d":"M9 20v2","key":"i2bqo8"}]],
  transformOrigin: "center",
  variants: {
    normal: { scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      scale: [1, 1.14, 1],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const Terminal = createAnimatedIcon({
  name: "Terminal",
  paths: [["polyline",{"points":"4 17 10 11 4 5","key":"akl6gq"}],["line",{"x1":"12","x2":"20","y1":"19","y2":"19","key":"q2wloq"}]],
  transformOrigin: "center",
  variants: {
    normal: { scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      scale: [1, 1.14, 1],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const Check = createAnimatedIcon({
  name: "Check",
  paths: [["path",{"d":"M20 6 9 17l-5-5","key":"1gmf2c"}]],
  transformOrigin: "center",
  variants: {
    normal: { scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      scale: [1, 1.22, 0.96, 1],
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }
});

export const AlertTriangle = createAnimatedIcon({
  name: "AlertTriangle",
  paths: [["path",{"d":"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3","key":"wmoenq"}],["path",{"d":"M12 9v4","key":"juzpu7"}],["path",{"d":"M12 17h.01","key":"p32p05"}]],
  transformOrigin: "center",
  variants: {
    normal: { rotate: 0, x: 0, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      rotate: [0, -8, 8, -4, 4, 0],
      x: [0, -2, 2, -1, 1, 0],
      transition: { duration: 0.32, ease: "easeOut" }
    }
  }
});

export const RotateCcw = createAnimatedIcon({
  name: "RotateCcw",
  paths: [["path",{"d":"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8","key":"1357e3"}],["path",{"d":"M3 3v5h5","key":"1xhq8a"}]],
  transformOrigin: "center",
  variants: {
    normal: { rotate: 0, transition: { duration: 0.25, ease: "easeOut" } },
    animate: {
      rotate: -360,
      transition: { duration: 0.35, ease: "easeOut" }
    }
  }
});

export const ArrowRight = createAnimatedIcon({
  name: "ArrowRight",
  paths: [["path",{"d":"M5 12h14","key":"1ays0h"}],["path",{"d":"m12 5 7 7-7 7","key":"xquz4c"}]],
  transformOrigin: "center",
  variants: {
    normal: { x: 0, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      x: [0, 3, 0],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const ShieldCheck = createAnimatedIcon({
  name: "ShieldCheck",
  paths: [["path",{"d":"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z","key":"oel41y"}],["path",{"d":"m9 12 2 2 4-4","key":"dzmm74"}]],
  transformOrigin: "center",
  variants: {
    normal: { scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      scale: [1, 1.22, 0.96, 1],
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }
});

export const Volume2 = createAnimatedIcon({
  name: "Volume2",
  paths: [["path",{"d":"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z","key":"uqj9uw"}],["path",{"d":"M16 9a5 5 0 0 1 0 6","key":"1q6k2b"}],["path",{"d":"M19.364 18.364a9 9 0 0 0 0-12.728","key":"ijwkga"}]],
  transformOrigin: "center",
  variants: {
    normal: { scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      scale: [1, 1.14, 1],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const Zap = createAnimatedIcon({
  name: "Zap",
  paths: [["path",{"d":"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z","key":"1xq2db"}]],
  transformOrigin: "center",
  variants: {
    normal: { scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      scale: [1, 1.22, 0.96, 1],
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }
});

export const MessageSquare = createAnimatedIcon({
  name: "MessageSquare",
  paths: [["path",{"d":"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z","key":"1lielz"}]],
  transformOrigin: "center",
  variants: {
    normal: { scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      scale: [1, 1.22, 0.96, 1],
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }
});

export const ChevronRight = createAnimatedIcon({
  name: "ChevronRight",
  paths: [["path",{"d":"m9 18 6-6-6-6","key":"mthhwq"}]],
  transformOrigin: "center",
  variants: {
    normal: { x: 0, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      x: [0, 3, 0],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const Flame = createAnimatedIcon({
  name: "Flame",
  paths: [["path",{"d":"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z","key":"96xj49"}]],
  transformOrigin: "center",
  variants: {
    normal: { scale: 1, rotate: 0, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      scale: [1, 1.16, 0.95, 1.06, 1],
      rotate: [0, -5, 5, 0],
      transition: { duration: 0.32, ease: "easeOut" }
    }
  }
});

export const HelpCircle = createAnimatedIcon({
  name: "HelpCircle",
  paths: [["circle",{"cx":"12","cy":"12","r":"10","key":"1mglay"}],["path",{"d":"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3","key":"1u773s"}],["path",{"d":"M12 17h.01","key":"p32p05"}]],
  transformOrigin: "center",
  variants: {
    normal: { rotate: 0, scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      rotate: [0, -15, 5, 0],
      scale: [1, 1.12, 1],
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }
});

export const Copy = createAnimatedIcon({
  name: "Copy",
  paths: [["rect",{"width":"14","height":"14","x":"8","y":"8","rx":"2","ry":"2","key":"17jyea"}],["path",{"d":"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2","key":"zix9uf"}]],
  transformOrigin: "center",
  variants: {
    normal: { scale: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      scale: [1, 0.9, 1.18, 1],
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }
});

export const Monitor = createAnimatedIcon({
  name: "Monitor",
  paths: [["rect",{"width":"20","height":"14","x":"2","y":"3","rx":"2","key":"48i651"}],["line",{"x1":"8","x2":"16","y1":"21","y2":"21","key":"1svkeh"}],["line",{"x1":"12","x2":"12","y1":"17","y2":"21","key":"vw1qmm"}]],
  transformOrigin: "center",
  variants: {
    normal: { scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      scale: [1, 1.14, 1],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const ShieldAlert = createAnimatedIcon({
  name: "ShieldAlert",
  paths: [["path",{"d":"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z","key":"oel41y"}],["path",{"d":"M12 8v4","key":"1got3b"}],["path",{"d":"M12 16h.01","key":"1drbdi"}]],
  transformOrigin: "center",
  variants: {
    normal: { rotate: 0, x: 0, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      rotate: [0, -8, 8, -4, 4, 0],
      x: [0, -2, 2, -1, 1, 0],
      transition: { duration: 0.32, ease: "easeOut" }
    }
  }
});

export const ArrowLeft = createAnimatedIcon({
  name: "ArrowLeft",
  paths: [["path",{"d":"m12 19-7-7 7-7","key":"1l729n"}],["path",{"d":"M19 12H5","key":"x3x0zl"}]],
  transformOrigin: "center",
  variants: {
    normal: { x: 0, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      x: [0, -3, 0],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const Search = createAnimatedIcon({
  name: "Search",
  paths: [["circle",{"cx":"11","cy":"11","r":"8","key":"4ej97u"}],["path",{"d":"m21 21-4.3-4.3","key":"1qie3q"}]],
  transformOrigin: "center",
  variants: {
    normal: { rotate: 0, scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      rotate: [0, -10, 10, 0],
      scale: [1, 1.15, 1],
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }
});

export const Power = createAnimatedIcon({
  name: "Power",
  paths: [["path",{"d":"M12 2v10","key":"mnfbl"}],["path",{"d":"M18.4 6.6a9 9 0 1 1-12.77.04","key":"obofu9"}]],
  transformOrigin: "center",
  variants: {
    normal: { scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      scale: [1, 1.14, 1],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const MonitorX = createAnimatedIcon({
  name: "MonitorX",
  paths: [["path",{"d":"m14.5 12.5-5-5","key":"1jahn5"}],["path",{"d":"m9.5 12.5 5-5","key":"1k2t7b"}],["rect",{"width":"20","height":"14","x":"2","y":"3","rx":"2","key":"48i651"}],["path",{"d":"M12 17v4","key":"1riwvh"}],["path",{"d":"M8 21h8","key":"1ev6f3"}]],
  transformOrigin: "center",
  variants: {
    normal: { rotate: 0, x: 0, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      rotate: [0, -8, 8, -4, 4, 0],
      x: [0, -2, 2, -1, 1, 0],
      transition: { duration: 0.32, ease: "easeOut" }
    }
  }
});

export const Gauge = createAnimatedIcon({
  name: "Gauge",
  paths: [["path",{"d":"m12 14 4-4","key":"9kzdfg"}],["path",{"d":"M3.34 19a10 10 0 1 1 17.32 0","key":"19p75a"}]],
  transformOrigin: "center",
  variants: {
    normal: { rotate: 0, transition: { duration: 0.25, ease: "easeOut" } },
    animate: {
      rotate: [-15, 25, -8, 0],
      transition: { duration: 0.35, ease: "easeOut" }
    }
  }
});

export const WifiOff = createAnimatedIcon({
  name: "WifiOff",
  paths: [["path",{"d":"M12 20h.01","key":"zekei9"}],["path",{"d":"M8.5 16.429a5 5 0 0 1 7 0","key":"1bycff"}],["path",{"d":"M5 12.859a10 10 0 0 1 5.17-2.69","key":"1dl1wf"}],["path",{"d":"M19 12.859a10 10 0 0 0-2.007-1.523","key":"4k23kn"}],["path",{"d":"M2 8.82a15 15 0 0 1 4.177-2.643","key":"1grhjp"}],["path",{"d":"M22 8.82a15 15 0 0 0-11.288-3.764","key":"z3jwby"}],["path",{"d":"m2 2 20 20","key":"1ooewy"}]],
  transformOrigin: "center",
  variants: {
    normal: { rotate: 0, x: 0, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      rotate: [0, -8, 8, -4, 4, 0],
      x: [0, -2, 2, -1, 1, 0],
      transition: { duration: 0.32, ease: "easeOut" }
    }
  }
});

export const Smartphone = createAnimatedIcon({
  name: "Smartphone",
  paths: [["rect",{"width":"14","height":"20","x":"5","y":"2","rx":"2","ry":"2","key":"1yt0o3"}],["path",{"d":"M12 18h.01","key":"mhygvu"}]],
  transformOrigin: "center",
  variants: {
    normal: { rotate: 0, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      rotate: [-5, 5, -3, 3, 0],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const Layers = createAnimatedIcon({
  name: "Layers",
  paths: [["path",{"d":"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z","key":"8b97xw"}],["path",{"d":"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65","key":"dd6zsq"}],["path",{"d":"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65","key":"ep9fru"}]],
  transformOrigin: "center",
  variants: {
    normal: { y: 0, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      y: [0, -3, 0],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const Play = createAnimatedIcon({
  name: "Play",
  paths: [["polygon",{"points":"6 3 20 12 6 21 6 3","key":"1oa8hb"}]],
  transformOrigin: "center",
  variants: {
    normal: { x: 0, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      x: [0, 3, 0],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const AlertCircle = createAnimatedIcon({
  name: "AlertCircle",
  paths: [["circle",{"cx":"12","cy":"12","r":"10","key":"1mglay"}],["line",{"x1":"12","x2":"12","y1":"8","y2":"12","key":"1pkeuh"}],["line",{"x1":"12","x2":"12.01","y1":"16","y2":"16","key":"4dfq90"}]],
  transformOrigin: "center",
  variants: {
    normal: { rotate: 0, x: 0, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      rotate: [0, -8, 8, -4, 4, 0],
      x: [0, -2, 2, -1, 1, 0],
      transition: { duration: 0.32, ease: "easeOut" }
    }
  }
});

export const Camera = createAnimatedIcon({
  name: "Camera",
  paths: [["path",{"d":"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z","key":"1tc9qg"}],["circle",{"cx":"12","cy":"13","r":"3","key":"1vg3eu"}]],
  transformOrigin: "center",
  variants: {
    normal: { scale: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      scale: [1, 0.9, 1.18, 1],
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }
});

export const Activity = createAnimatedIcon({
  name: "Activity",
  paths: [["path",{"d":"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2","key":"169zse"}]],
  transformOrigin: "center",
  variants: {
    normal: { scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      scale: [1, 1.14, 1],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const Clock = createAnimatedIcon({
  name: "Clock",
  paths: [["circle",{"cx":"12","cy":"12","r":"10","key":"1mglay"}],["polyline",{"points":"12 6 12 12 16 14","key":"68esgv"}]],
  transformOrigin: "center",
  variants: {
    normal: { rotate: 0, transition: { duration: 0.25, ease: "easeOut" } },
    animate: {
      rotate: 360,
      transition: { duration: 0.35, ease: "easeOut" }
    }
  }
});

export const Calculator = createAnimatedIcon({
  name: "Calculator",
  paths: [["rect",{"width":"16","height":"20","x":"4","y":"2","rx":"2","key":"1nb95v"}],["line",{"x1":"8","x2":"16","y1":"6","y2":"6","key":"x4nwl0"}],["line",{"x1":"16","x2":"16","y1":"14","y2":"18","key":"wjye3r"}],["path",{"d":"M16 10h.01","key":"1m94wz"}],["path",{"d":"M12 10h.01","key":"1nrarc"}],["path",{"d":"M8 10h.01","key":"19clt8"}],["path",{"d":"M12 14h.01","key":"1etili"}],["path",{"d":"M8 14h.01","key":"6423bh"}],["path",{"d":"M12 18h.01","key":"mhygvu"}],["path",{"d":"M8 18h.01","key":"lrp35t"}]],
  transformOrigin: "center",
  variants: {
    normal: { scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      scale: [1, 1.14, 1],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const Download = createAnimatedIcon({
  name: "Download",
  paths: [["path",{"d":"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4","key":"ih7n3h"}],["polyline",{"points":"7 10 12 15 17 10","key":"2ggqvy"}],["line",{"x1":"12","x2":"12","y1":"15","y2":"3","key":"1vk2je"}]],
  transformOrigin: "center",
  variants: {
    normal: { y: 0, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      y: [0, 4, -1, 0],
      transition: { duration: 0.32, ease: "easeOut" }
    }
  }
});

export const ExternalLink = createAnimatedIcon({
  name: "ExternalLink",
  paths: [["path",{"d":"M15 3h6v6","key":"1q9fwt"}],["path",{"d":"M10 14 21 3","key":"gplh6r"}],["path",{"d":"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6","key":"a6xqqp"}]],
  transformOrigin: "center",
  variants: {
    normal: { x: 0, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      x: [0, 2, 0],
      y: [0, -2, 0],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const Maximize2 = createAnimatedIcon({
  name: "Maximize2",
  paths: [["polyline",{"points":"15 3 21 3 21 9","key":"mznyad"}],["polyline",{"points":"9 21 3 21 3 15","key":"1avn1i"}],["line",{"x1":"21","x2":"14","y1":"3","y2":"10","key":"ota7mn"}],["line",{"x1":"3","x2":"10","y1":"21","y2":"14","key":"1atl0r"}]],
  transformOrigin: "center",
  variants: {
    normal: { scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      scale: [1, 1.22, 0.96, 1],
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }
});

export const BookOpen = createAnimatedIcon({
  name: "BookOpen",
  paths: [["path",{"d":"M12 7v14","key":"1akyts"}],["path",{"d":"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z","key":"ruj8y"}]],
  transformOrigin: "center",
  variants: {
    normal: { y: 0, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      y: [0, -3, 0],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const FileText = createAnimatedIcon({
  name: "FileText",
  paths: [["path",{"d":"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z","key":"1rqfz7"}],["path",{"d":"M14 2v4a2 2 0 0 0 2 2h4","key":"tnqrlb"}],["path",{"d":"M10 9H8","key":"b1mrlr"}],["path",{"d":"M16 13H8","key":"t4e002"}],["path",{"d":"M16 17H8","key":"z1uh3a"}]],
  transformOrigin: "center",
  variants: {
    normal: { x: 0, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      x: [0, 3, 0],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const ThumbsUp = createAnimatedIcon({
  name: "ThumbsUp",
  paths: [["path",{"d":"M7 10v12","key":"1qc93n"}],["path",{"d":"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z","key":"emmmcr"}]],
  transformOrigin: "center",
  variants: {
    normal: { rotate: 0, scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      rotate: [0, -15, 5, 0],
      scale: [1, 1.12, 1],
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }
});

export const History = createAnimatedIcon({
  name: "History",
  paths: [["path",{"d":"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8","key":"1357e3"}],["path",{"d":"M3 3v5h5","key":"1xhq8a"}],["path",{"d":"M12 7v5l4 2","key":"1fdv2h"}]],
  transformOrigin: "center",
  variants: {
    normal: { rotate: 0, transition: { duration: 0.25, ease: "easeOut" } },
    animate: {
      rotate: -360,
      transition: { duration: 0.35, ease: "easeOut" }
    }
  }
});

export const ChevronDown = createAnimatedIcon({
  name: "ChevronDown",
  paths: [["path",{"d":"m6 9 6 6 6-6","key":"qrunsl"}]],
  transformOrigin: "center",
  variants: {
    normal: { y: 0, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      y: [0, 3, 0],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const VolumeX = createAnimatedIcon({
  name: "VolumeX",
  paths: [["path",{"d":"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z","key":"uqj9uw"}],["line",{"x1":"22","x2":"16","y1":"9","y2":"15","key":"1ewh16"}],["line",{"x1":"16","x2":"22","y1":"9","y2":"15","key":"5ykzw1"}]],
  transformOrigin: "center",
  variants: {
    normal: { rotate: 0, x: 0, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      rotate: [0, -8, 8, -4, 4, 0],
      x: [0, -2, 2, -1, 1, 0],
      transition: { duration: 0.32, ease: "easeOut" }
    }
  }
});

export const HardDrive = createAnimatedIcon({
  name: "HardDrive",
  paths: [["line",{"x1":"22","x2":"2","y1":"12","y2":"12","key":"1y58io"}],["path",{"d":"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z","key":"oot6mr"}],["line",{"x1":"6","x2":"6.01","y1":"16","y2":"16","key":"sgf278"}],["line",{"x1":"10","x2":"10.01","y1":"16","y2":"16","key":"1l4acy"}]],
  transformOrigin: "center",
  variants: {
    normal: { scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      scale: [1, 1.14, 1],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const QrCode = createAnimatedIcon({
  name: "QrCode",
  paths: [["rect",{"width":"5","height":"5","x":"3","y":"3","rx":"1","key":"1tu5fj"}],["rect",{"width":"5","height":"5","x":"16","y":"3","rx":"1","key":"1v8r4q"}],["rect",{"width":"5","height":"5","x":"3","y":"16","rx":"1","key":"1x03jg"}],["path",{"d":"M21 16h-3a2 2 0 0 0-2 2v3","key":"177gqh"}],["path",{"d":"M21 21v.01","key":"ents32"}],["path",{"d":"M12 7v3a2 2 0 0 1-2 2H7","key":"8crl2c"}],["path",{"d":"M3 12h.01","key":"nlz23k"}],["path",{"d":"M12 3h.01","key":"n36tog"}],["path",{"d":"M12 16v.01","key":"133mhm"}],["path",{"d":"M16 12h1","key":"1slzba"}],["path",{"d":"M21 12v.01","key":"1lwtk9"}],["path",{"d":"M12 21v-1","key":"1880an"}]],
  transformOrigin: "center",
  variants: {
    normal: { scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      scale: [1, 1.14, 1],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const Video = createAnimatedIcon({
  name: "Video",
  paths: [["path",{"d":"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5","key":"ftymec"}],["rect",{"x":"2","y":"6","width":"14","height":"12","rx":"2","key":"158x01"}]],
  transformOrigin: "center",
  variants: {
    normal: { scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      scale: [1, 1.14, 1],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const Home = createAnimatedIcon({
  name: "Home",
  paths: [["path",{"d":"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8","key":"5wwlr5"}],["path",{"d":"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z","key":"1d0kgt"}]],
  transformOrigin: "center",
  variants: {
    normal: { y: 0, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      y: [0, -3, 0],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const FileQuestion = createAnimatedIcon({
  name: "FileQuestion",
  paths: [["path",{"d":"M12 17h.01","key":"p32p05"}],["path",{"d":"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z","key":"1mlx9k"}],["path",{"d":"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3","key":"mhlwft"}]],
  transformOrigin: "center",
  variants: {
    normal: { rotate: 0, scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      rotate: [0, -15, 5, 0],
      scale: [1, 1.12, 1],
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }
});

export const Lightbulb = createAnimatedIcon({
  name: "Lightbulb",
  paths: [["path",{"d":"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5","key":"1gvzjb"}],["path",{"d":"M9 18h6","key":"x1upvd"}],["path",{"d":"M10 22h4","key":"ceow96"}]],
  transformOrigin: "center",
  variants: {
    normal: { scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      scale: [1, 1.14, 1],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const Square = createAnimatedIcon({
  name: "Square",
  paths: [["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2","key":"afitv7"}]],
  transformOrigin: "center",
  variants: {
    normal: { scale: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      scale: [1, 0.9, 1.18, 1],
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }
});

export const Tv = createAnimatedIcon({
  name: "Tv",
  paths: [["rect",{"width":"20","height":"15","x":"2","y":"7","rx":"2","ry":"2","key":"10ag99"}],["polyline",{"points":"17 2 12 7 7 2","key":"11pgbg"}]],
  transformOrigin: "center",
  variants: {
    normal: { scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      scale: [1, 1.14, 1],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const Keyboard = createAnimatedIcon({
  name: "Keyboard",
  paths: [["path",{"d":"M10 8h.01","key":"1r9ogq"}],["path",{"d":"M12 12h.01","key":"1mp3jc"}],["path",{"d":"M14 8h.01","key":"1primd"}],["path",{"d":"M16 12h.01","key":"1l6xoz"}],["path",{"d":"M18 8h.01","key":"emo2bl"}],["path",{"d":"M6 8h.01","key":"x9i8wu"}],["path",{"d":"M7 16h10","key":"wp8him"}],["path",{"d":"M8 12h.01","key":"czm47f"}],["rect",{"width":"20","height":"16","x":"2","y":"4","rx":"2","key":"18n3k1"}]],
  transformOrigin: "center",
  variants: {
    normal: { scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      scale: [1, 1.14, 1],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const Minimize2 = createAnimatedIcon({
  name: "Minimize2",
  paths: [["polyline",{"points":"4 14 10 14 10 20","key":"11kfnr"}],["polyline",{"points":"20 10 14 10 14 4","key":"rlmsce"}],["line",{"x1":"14","x2":"21","y1":"10","y2":"3","key":"o5lafz"}],["line",{"x1":"3","x2":"10","y1":"21","y2":"14","key":"1atl0r"}]],
  transformOrigin: "center",
  variants: {
    normal: { scale: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      scale: [1, 0.9, 1.18, 1],
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }
});

export const Filter = createAnimatedIcon({
  name: "Filter",
  paths: [["polygon",{"points":"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3","key":"1yg77f"}]],
  transformOrigin: "center",
  variants: {
    normal: { rotate: 0, scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      rotate: [0, -15, 5, 0],
      scale: [1, 1.12, 1],
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }
});

export const ArrowUpRight = createAnimatedIcon({
  name: "ArrowUpRight",
  paths: [["path",{"d":"M7 7h10v10","key":"1tivn9"}],["path",{"d":"M7 17 17 7","key":"1vkiza"}]],
  transformOrigin: "center",
  variants: {
    normal: { x: 0, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      x: [0, 2, 0],
      y: [0, -2, 0],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const ArrowUp = createAnimatedIcon({
  name: "ArrowUp",
  paths: [["path",{"d":"m5 12 7-7 7 7","key":"hav0vg"}],["path",{"d":"M12 19V5","key":"x0mq9r"}]],
  transformOrigin: "center",
  variants: {
    normal: { y: 0, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      y: [0, -3, 0],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const ThumbsDown = createAnimatedIcon({
  name: "ThumbsDown",
  paths: [["path",{"d":"M17 14V2","key":"8ymqnk"}],["path",{"d":"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z","key":"m61m77"}]],
  transformOrigin: "center",
  variants: {
    normal: { rotate: 0, scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      rotate: [0, 15, -5, 0],
      scale: [1, 1.12, 1],
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }
});

export const Image = createAnimatedIcon({
  name: "Image",
  paths: [["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2","ry":"2","key":"1m3agn"}],["circle",{"cx":"9","cy":"9","r":"2","key":"af1f0g"}],["path",{"d":"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21","key":"1xmnt7"}]],
  transformOrigin: "center",
  variants: {
    normal: { scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      scale: [1, 1.14, 1],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const Trash2 = createAnimatedIcon({
  name: "Trash2",
  paths: [["path",{"d":"M3 6h18","key":"d0wm0j"}],["path",{"d":"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6","key":"4alrt4"}],["path",{"d":"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2","key":"v07s0e"}],["line",{"x1":"10","x2":"10","y1":"11","y2":"17","key":"1uufr5"}],["line",{"x1":"14","x2":"14","y1":"11","y2":"17","key":"xtxkd"}]],
  transformOrigin: "center",
  variants: {
    normal: { y: 0, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      y: [0, -3, 0],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const Plus = createAnimatedIcon({
  name: "Plus",
  paths: [["path",{"d":"M5 12h14","key":"1ays0h"}],["path",{"d":"M12 5v14","key":"s699le"}]],
  transformOrigin: "center",
  variants: {
    normal: { rotate: 0, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      rotate: 90,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  }
});

export const Loader2 = createAnimatedIcon({
  name: "Loader2",
  paths: [["path",{"d":"M21 12a9 9 0 1 1-6.219-8.56","key":"13zald"}]],
  transformOrigin: "center",
  variants: {
    normal: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: { duration: 1, repeat: Infinity, ease: "linear" }
    }
  }
});

export const Info = createAnimatedIcon({
  name: "Info",
  paths: [["circle",{"cx":"12","cy":"12","r":"10","key":"1mglay"}],["path",{"d":"M12 16v-4","key":"1dtifu"}],["path",{"d":"M12 8h.01","key":"e9boi3"}]],
  transformOrigin: "center",
  variants: {
    normal: { scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      scale: [1, 1.14, 1],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const Wifi = createAnimatedIcon({
  name: "Wifi",
  paths: [["path",{"d":"M12 20h.01","key":"zekei9"}],["path",{"d":"M2 8.82a15 15 0 0 1 20 0","key":"dnpr2z"}],["path",{"d":"M5 12.859a10 10 0 0 1 14 0","key":"1x1e6c"}],["path",{"d":"M8.5 16.429a5 5 0 0 1 7 0","key":"1bycff"}]],
  transformOrigin: "center",
  variants: {
    normal: { scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      scale: [1, 1.14, 1],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const ZoomIn = createAnimatedIcon({
  name: "ZoomIn",
  paths: [["circle",{"cx":"11","cy":"11","r":"8","key":"4ej97u"}],["line",{"x1":"21","x2":"16.65","y1":"21","y2":"16.65","key":"13gj7c"}],["line",{"x1":"11","x2":"11","y1":"8","y2":"14","key":"1vmskp"}],["line",{"x1":"8","x2":"14","y1":"11","y2":"11","key":"durymu"}]],
  transformOrigin: "center",
  variants: {
    normal: { rotate: 0, scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      rotate: [0, -10, 10, 0],
      scale: [1, 1.15, 1],
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }
});

export const Eye = createAnimatedIcon({
  name: "Eye",
  paths: [["path",{"d":"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0","key":"1nclc0"}],["circle",{"cx":"12","cy":"12","r":"3","key":"1v7zrd"}]],
  transformOrigin: "center",
  variants: {
    normal: { scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      scale: [1, 1.14, 1],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const Menu = createAnimatedIcon({
  name: "Menu",
  paths: [["line",{"x1":"4","x2":"20","y1":"12","y2":"12","key":"1e0a9i"}],["line",{"x1":"4","x2":"20","y1":"6","y2":"6","key":"1owob3"}],["line",{"x1":"4","x2":"20","y1":"18","y2":"18","key":"yk5zj1"}]],
  transformOrigin: "center",
  variants: {
    normal: { x: 0, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      x: [0, 3, 0],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const Moon = createAnimatedIcon({
  name: "Moon",
  paths: [["path",{"d":"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z","key":"a7tn18"}]],
  transformOrigin: "center",
  variants: {
    normal: { rotate: 0, scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      rotate: [0, -15, 5, 0],
      scale: [1, 1.12, 1],
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }
});

export const Sun = createAnimatedIcon({
  name: "Sun",
  paths: [["circle",{"cx":"12","cy":"12","r":"4","key":"4exip2"}],["path",{"d":"M12 2v2","key":"tus03m"}],["path",{"d":"M12 20v2","key":"1lh1kg"}],["path",{"d":"m4.93 4.93 1.41 1.41","key":"149t6j"}],["path",{"d":"m17.66 17.66 1.41 1.41","key":"ptbguv"}],["path",{"d":"M2 12h2","key":"1t8f8n"}],["path",{"d":"M20 12h2","key":"1q8mjw"}],["path",{"d":"m6.34 17.66-1.41 1.41","key":"1m8zz5"}],["path",{"d":"m19.07 4.93-1.41 1.41","key":"1shlcs"}]],
  transformOrigin: "center",
  variants: {
    normal: { rotate: 0, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      rotate: 90,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  }
});

export const CornerDownLeft = createAnimatedIcon({
  name: "CornerDownLeft",
  paths: [["polyline",{"points":"9 10 4 15 9 20","key":"r3jprv"}],["path",{"d":"M20 4v7a4 4 0 0 1-4 4H4","key":"6o5b7l"}]],
  transformOrigin: "center",
  variants: {
    normal: { x: 0, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      x: [0, -3, 0],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const Share2 = createAnimatedIcon({
  name: "Share2",
  paths: [["circle",{"cx":"18","cy":"5","r":"3","key":"gq8acd"}],["circle",{"cx":"6","cy":"12","r":"3","key":"w7nqdw"}],["circle",{"cx":"18","cy":"19","r":"3","key":"1xt0gg"}],["line",{"x1":"8.59","x2":"15.42","y1":"13.51","y2":"17.49","key":"47mynk"}],["line",{"x1":"15.41","x2":"8.59","y1":"6.51","y2":"10.49","key":"1n3mei"}]],
  transformOrigin: "center",
  variants: {
    normal: { scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      scale: [1, 1.14, 1],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const Printer = createAnimatedIcon({
  name: "Printer",
  paths: [["path",{"d":"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2","key":"143wyd"}],["path",{"d":"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6","key":"1itne7"}],["rect",{"x":"6","y":"14","width":"12","height":"8","rx":"1","key":"1ue0tg"}]],
  transformOrigin: "center",
  variants: {
    normal: { y: 0, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      y: [0, 3, 0],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const Globe = createAnimatedIcon({
  name: "Globe",
  paths: [["circle",{"cx":"12","cy":"12","r":"10","key":"1mglay"}],["path",{"d":"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20","key":"13o1zl"}],["path",{"d":"M2 12h20","key":"9i4pu4"}]],
  transformOrigin: "center",
  variants: {
    normal: { rotate: 0, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      rotate: 90,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  }
});

export const Cable = createAnimatedIcon({
  name: "Cable",
  paths: [["path",{"d":"M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1","key":"10bnsj"}],["path",{"d":"M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9","key":"1eqmu1"}],["path",{"d":"M21 21v-2h-4","key":"14zm7j"}],["path",{"d":"M3 5h4V3","key":"z442eg"}],["path",{"d":"M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3","key":"ebdjd7"}]],
  transformOrigin: "center",
  variants: {
    normal: { scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      scale: [1, 1.14, 1],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const Gamepad2 = createAnimatedIcon({
  name: "Gamepad2",
  paths: [["line",{"x1":"6","x2":"10","y1":"11","y2":"11","key":"1gktln"}],["line",{"x1":"8","x2":"8","y1":"9","y2":"13","key":"qnk9ow"}],["line",{"x1":"15","x2":"15.01","y1":"12","y2":"12","key":"krot7o"}],["line",{"x1":"18","x2":"18.01","y1":"10","y2":"10","key":"1lcuu1"}],["path",{"d":"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z","key":"mfqc10"}]],
  transformOrigin: "center",
  variants: {
    normal: { rotate: 0, scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      rotate: [0, -15, 5, 0],
      scale: [1, 1.12, 1],
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }
});

export const ChevronUp = createAnimatedIcon({
  name: "ChevronUp",
  paths: [["path",{"d":"m18 15-6-6-6 6","key":"153udz"}]],
  transformOrigin: "center",
  variants: {
    normal: { y: 0, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      y: [0, -3, 0],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const DollarSign = createAnimatedIcon({
  name: "DollarSign",
  paths: [["line",{"x1":"12","x2":"12","y1":"2","y2":"22","key":"7eqyqh"}],["path",{"d":"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6","key":"1b0p4s"}]],
  transformOrigin: "center",
  variants: {
    normal: { y: 0, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      y: [0, -3, 0],
      transition: { duration: 0.28, ease: "easeOut" }
    }
  }
});

export const AlertOctagon = createAnimatedIcon({
  name: "AlertOctagon",
  paths: [["path",{"d":"M12 16h.01","key":"1drbdi"}],["path",{"d":"M12 8v4","key":"1got3b"}],["path",{"d":"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z","key":"1fd625"}]],
  transformOrigin: "center",
  variants: {
    normal: { rotate: 0, x: 0, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      rotate: [0, -8, 8, -4, 4, 0],
      x: [0, -2, 2, -1, 1, 0],
      transition: { duration: 0.32, ease: "easeOut" }
    }
  }
});

export const CheckCircle2 = createAnimatedIcon({
  name: "CheckCircle2",
  paths: [["circle",{"cx":"12","cy":"12","r":"10","key":"1mglay"}],["path",{"d":"m9 12 2 2 4-4","key":"dzmm74"}]],
  transformOrigin: "center",
  variants: {
    normal: { scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    animate: {
      scale: [1, 1.22, 0.96, 1],
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }
});
