
export interface TimelineItem {
  id: string;
  year: number;
  title: string;
  description: string;
  imageSrc?: string;
  category: 'microsoft' | 'windows-released' | 'windows-unreleased';
  details: string[];
}

export const timelineData: TimelineItem[] = [
  {
    id: "microsoft-founding",
    year: 1975,
    title: "Microsoft Founded",
    description: "Bill Gates and Paul Allen founded Microsoft in Albuquerque, New Mexico.",
    category: "microsoft",
    details: [
      "Microsoft was initially founded to develop and sell BASIC interpreters for the Altair 8800 microcomputer.",
      "The company name is a portmanteau of 'microcomputer' and 'software'.",
      "Gates and Allen's vision was 'a computer on every desk and in every home'.",
    ],
  },
  {
    id: "ms-dos",
    year: 1981,
    title: "MS-DOS",
    description: "Microsoft released MS-DOS, which became the dominant operating system for IBM PCs.",
    category: "windows-released",
    details: [
      "Microsoft acquired QDOS (Quick and Dirty Operating System) from Seattle Computer Products and renamed it MS-DOS.",
      "IBM's adoption of MS-DOS as the operating system for their personal computers cemented Microsoft's position in the industry.",
      "MS-DOS was a command-line operating system that required users to type commands to perform tasks.",
    ],
  },
  {
    id: "windows-1",
    year: 1985,
    title: "Windows 1.0",
    description: "Microsoft released Windows 1.0, its first graphical user interface operating environment.",
    category: "windows-released",
    details: [
      "Windows 1.0 was Microsoft's first attempt at a graphical user interface (GUI).",
      "It featured simple graphics, pull-down menus, scroll bars, and icons.",
      "Windows 1.0 was not widely adopted due to performance issues and limited software compatibility.",
    ],
  },
  {
    id: "windows-2",
    year: 1987,
    title: "Windows 2.0",
    description: "Windows 2.0 introduced overlapping windows and improved graphics.",
    category: "windows-released",
    details: [
      "Windows 2.0 allowed windows to overlap, unlike Windows 1.0 which only allowed tiled windows.",
      "It introduced desktop icons and expanded memory usage.",
      "Microsoft Word and Excel were introduced as applications for Windows.",
    ],
  },
  {
    id: "windows-3",
    year: 1990,
    title: "Windows 3.0",
    description: "Windows 3.0 became the first widely successful version of Windows.",
    category: "windows-released",
    details: [
      "Windows 3.0 offered significant improvements in user interface, memory management, and multitasking capabilities.",
      "It sold 10 million copies in the first two years, becoming a commercial success.",
      "Windows 3.0 supported 16-color VGA graphics and introduced Program Manager and File Manager.",
    ],
  },
  {
    id: "neptune-odyssey",
    year: 1999,
    title: "Neptune & Odyssey",
    description: "Unreleased consumer and business versions of Windows that were meant to follow Windows 2000.",
    category: "windows-unreleased",
    details: [
      "Project Neptune was intended to be a consumer-oriented operating system based on Windows 2000 technology.",
      "Odyssey was planned as the business-oriented counterpart to Neptune.",
      "Both projects were eventually merged into the Whistler project, which became Windows XP.",
      "Some Neptune builds were leaked, showing early concepts that would later appear in Windows XP.",
    ],
  },
  {
    id: "windows-xp",
    year: 2001,
    title: "Windows XP",
    description: "Windows XP became one of Microsoft's most popular and long-lasting operating systems.",
    category: "windows-released",
    details: [
      "Windows XP unified the consumer and business Windows lines under a single NT-based code.",
      "It introduced a redesigned user interface called Luna with a more colorful appearance.",
      "XP was known for its stability and usability improvements over previous versions.",
      "It remained in widespread use for over a decade, with support ending in 2014.",
    ],
  },
  {
    id: "longhorn",
    year: 2003,
    title: "Longhorn",
    description: "The ambitious but unreleased version of Windows that eventually became Windows Vista.",
    category: "windows-unreleased",
    details: [
      "Project Longhorn was initially conceived as a minor update to Windows XP, scheduled for release in 2003.",
      "It gradually expanded in scope to include radical changes to the Windows architecture, file system, and user interface.",
      "Features included a new file system called WinFS, a 3D user interface called Aero, and a new programming model.",
      "Development problems led to a 'reset' in 2004, abandoning much of the code and starting fresh for what would become Windows Vista.",
      "Several Longhorn builds were leaked, showing features that never made it to release.",
    ],
  },
  {
    id: "windows-vista",
    year: 2007,
    title: "Windows Vista",
    description: "Windows Vista introduced a redesigned UI and improved security, but faced criticism for performance issues.",
    category: "windows-released",
    details: [
      "Windows Vista featured the Aero interface with translucent glass-like effects.",
      "It introduced User Account Control (UAC) for improved security.",
      "Vista faced criticism for high system requirements, performance issues, and compatibility problems.",
      "Many features originally planned for Longhorn were scaled back or removed from Vista.",
    ],
  },
  {
    id: "midori",
    year: 2008,
    title: "Midori",
    description: "Microsoft's research project to create a non-Windows operating system built from scratch.",
    category: "windows-unreleased",
    details: [
      "Midori was an ambitious research project to create a new operating system not based on Windows.",
      "It was designed to be highly componentized, secure, and focused on distributed and parallel computing.",
      "The project was led by former Microsoft Technical Fellow Eric Rudder.",
      "Midori was eventually canceled, but some of its technologies were integrated into other Microsoft products.",
      "The project remained internal to Microsoft with no public releases.",
    ],
  },
  {
    id: "windows-7",
    year: 2009,
    title: "Windows 7",
    description: "Windows 7 refined Vista's features and became widely praised for its performance and stability.",
    category: "windows-released",
    details: [
      "Windows 7 was positioned as an incremental upgrade to Vista that addressed many of its predecessor's issues.",
      "It introduced features like the redesigned taskbar, Aero Snap, and Aero Shake.",
      "Windows 7 was well-received by users and became one of the most popular Windows versions.",
      "It maintained compatibility with hardware and software that worked with Vista.",
    ],
  },
  {
    id: "windows-8",
    year: 2012,
    title: "Windows 8",
    description: "Windows 8 introduced a touch-friendly interface that received mixed reactions from users.",
    category: "windows-released",
    details: [
      "Windows 8 featured a dramatic redesign with a new Start screen using the Modern UI (formerly Metro) design language.",
      "It was optimized for touchscreens and included the Windows Store for apps.",
      "The removal of the traditional Start menu and emphasis on touch controls were controversial among desktop users.",
      "Windows 8 was designed to unify the experience across PCs, tablets, and smartphones.",
    ],
  },
  {
    id: "windows-blue",
    year: 2012,
    title: "Windows Blue",
    description: "The codename for the project that became Windows 8.1, an update to address Windows 8 criticisms.",
    category: "windows-unreleased",
    details: [
      "Windows Blue was the internal codename for what was eventually released as Windows 8.1.",
      "It was designed to address user feedback and criticism of Windows 8.",
      "While not fully unreleased (since it became 8.1), some planned features were cut before release.",
      "The project represented Microsoft's shift to a more rapid release cycle for Windows updates.",
    ],
  },
  {
    id: "windows-10",
    year: 2015,
    title: "Windows 10",
    description: "Windows 10 reconciled the traditional desktop experience with modern features.",
    category: "windows-released",
    details: [
      "Windows 10 reintroduced the Start menu while keeping aspects of the Modern UI from Windows 8.",
      "It was introduced as 'Windows as a Service' with a new development approach of continuous updates instead of major version releases.",
      "New features included the Microsoft Edge browser, Cortana virtual assistant, and virtual desktops.",
      "Windows 10 was offered as a free upgrade for Windows 7 and 8.1 users for the first year.",
    ],
  },
  {
    id: "windows-10x",
    year: 2019,
    title: "Windows 10X",
    description: "A canceled version of Windows designed for dual-screen and foldable devices.",
    category: "windows-unreleased",
    details: [
      "Windows 10X was announced in 2019 as an OS specifically for dual-screen devices like the Surface Neo.",
      "It featured a simplified interface, containerized applications for improved security, and a modular design.",
      "Microsoft later redirected the project to focus on single-screen devices to compete with Chromebooks.",
      "In May 2021, Microsoft officially canceled Windows 10X, but incorporated some of its features into Windows 11.",
      "The project demonstrated Microsoft's experimentation with new form factors and computing paradigms.",
    ],
  },
  {
    id: "windows-11",
    year: 2021,
    title: "Windows 11",
    description: "Windows 11 introduced a visual refresh and improved touch capabilities.",
    category: "windows-released",
    details: [
      "Windows 11 featured a centered Start menu and taskbar, rounded corners, and a new design language.",
      "It incorporated some features originally planned for Windows 10X, like a redesigned UI and improved touch controls.",
      "The new OS included improved virtual desktop support, Microsoft Teams integration, and better gaming features.",
      "Windows 11 faced some controversy over its system requirements, particularly the need for TPM 2.0.",
    ],
  },
  {
    id: "polaris",
    year: 2017,
    title: "Windows Core OS & Polaris",
    description: "An unreleased modular version of Windows designed to scale across different device types.",
    category: "windows-unreleased",
    details: [
      "Windows Core OS (WCOS) was a modular version of Windows designed to adapt to different device form factors.",
      "Polaris was a specific implementation of WCOS intended to replace Windows 10 on desktop and laptop devices.",
      "The project aimed to create a lightweight, modern computing experience with improved security and performance.",
      "Elements of WCOS eventually appeared in Windows 10X and later Windows 11, but Polaris itself was never released.",
      "The project represented Microsoft's efforts to modernize and streamline the Windows architecture.",
    ],
  },
];
