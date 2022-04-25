export interface FetchHawkRequest {
  filter?: string;
  page?: {
    size: string;
    token: string;
  };
  sort?: {
    direction: string;
    field: string;
  };
}

export interface Hawk {
  behaviorDescription: string;
  colorDescription: string;
  gender: 'MALE' | 'FEMALE';
  habitatDescription: string;
  id: number;
  lengthBegin: number;
  lengthEnd: number;
  name: string;
  pictureUrl: string;
  size: 'SMALL' | 'MEDIUM' | 'LARGE';
  weightBegin: number;
  weightEnd: number;
  wingspanBegin: number;
  wingspanEnd: number;
}

export interface FetchHawkResponse {
  hawks: Hawk[];
  pageToken: number;
}
