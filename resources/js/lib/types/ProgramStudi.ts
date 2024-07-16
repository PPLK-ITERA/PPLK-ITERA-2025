interface Kk {
    title: string;
    description: string;
}

interface Achievement {
    title: string;
    description: string;
    imageUrl?: string;
}

interface HmpsActivities {
    title: string;
    description: string;
    imageUrl?: string;
}

interface ProgramStudi {
    name: string;
    imageUrl: string;
    description: string;
    history: string;
    accreditation: string;
    vision: string;
    mission: string;
    coordinatorName: string;
    kk: Kk[];
    achievements: Achievement[];
    instagramUrl: string;
    youtubeUrl: string;
    websiteUrl: string;
    tiktokUrl: string;
    hmpsName: string;
    hmpsAcronym: string;
    hmpsDescrption: string;
    hmpsCoordinatorName: string;
    hmpsActivities: HmpsActivities[];
    hmpsInstagramUrl: string;
    hmpsYoutubeUrl: string;
    hmpsWebsiteUrl: string;
    hmpsTiktokUrl: string;
}