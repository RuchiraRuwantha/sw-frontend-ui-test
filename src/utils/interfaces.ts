export interface iPerson {
  id: Number,
  name: string,
  avatar: string
}

export interface iCurrentUser {
  id: Number,
  name: string,
  avatar: string,
  notifications_count: number
}

export interface iActivity {
  id: Number,
  person: iPerson,
  action: string,
  target: string,
  created_at: string
}

export interface iTeam {
  name: string;
  campaigns_count: string;
  created_at: string;
  description: string;
  id: Number;
  image: string;
  is_archived: boolean;
  is_favorited: boolean;
  leads_count: string;
}