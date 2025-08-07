export interface Kk {
  title: string;
  description: string;
}

export interface ProdiActivities {
  title: string;
  description: string;
  imageUrl?: string;
  documentation?: any;
}

export interface HmpsActivities {
  title: string;
  description: string;
  imageUrl?: string;
  documentation?: any;
}

export interface ProgramStudi {
  key: string;
  name?: string;
  imageUrl?: any;
  description?: string;
  history?: string;
  accreditation?: string;
  accreditationNo?: string;
  vision?: string;
  mission?: string[];
  coordinatorName?: string;
  coordinatorPhoto?: any;
  kk?: Kk[];
  prodiActivities?: ProdiActivities[];
  // achievements?: Achievement[];
  instagramUrl?: string;
  kahim?: string;
  kahimPhoto?: any;
  youtubeUrl?: string;
  websiteUrl?: string;
  tiktokUrl?: string;
  hmpsName?: string;
  hmpsImageUrl?: any;
  hmpsAcronym?: string;
  hmpsDescrption?: string;
  hmpsCoordinatorName?: string;
  hmpsActivities: HmpsActivities[];
  hmpsInstagramUrl?: string;
  hmpsYoutubeUrl?: string;
  hmpsWebsiteUrl?: string;
  hmpsTiktokUrl?: string;
}