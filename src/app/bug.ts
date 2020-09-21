export interface Bug {

  id: string;
  title: string;
  description: string;
  priority: number;
  reporter: string;
  status: string;
  updatedAt: string;
  createdAt: string;
  comments: Comment[];

}
