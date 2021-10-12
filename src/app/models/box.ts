export interface Boxes {
  boxes: BoxConnection;
}
export interface BoxConnection {
  edges: BoxEdge[];
}

export interface BoxEdge {
  node: Box;
}

export interface BoxDetails {
  box: Box;
}

export interface Box {
  id: string;
  name: string;
  iconUrl: string;
  cost: number;
}
