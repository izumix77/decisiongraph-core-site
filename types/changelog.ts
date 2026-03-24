export type Package = {
  name: string;
  version: string;
};

export type Item = {
  text: string;
  packages?: Package[];
  children?: string[];
};

export type Section = {
  title: string;
  items: Item[];
};

export type Release = {
  version: string;
  date: string;
  sections: Section[];
};
