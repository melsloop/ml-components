export type NavItemLocaleProps = Record<string, string>;

export type NavProps = {
  data: NavItemProps[];
  direction: "ltr" | "rtl";
  currentPath: string;
  className?: string;
};

export type NavItemDataProps = {
  id: string;
  type: string;
  url: string;
  locale: NavItemLocaleProps;
  icon?: string;
  target?: string;
};

export type NavSectionDataProps = {
  id: string;
  locale: NavItemLocaleProps;
  items: string[];
};

type NavItemData = {
  title?: string;
  description?: string;
  author?: string;
  icon?: string;
  url?: string;
  items?: NavItemProps[];
};

export type NavItemProps = {
  id: string;
  type: "section" | "article" | "link";
  data: NavItemData;
};

// const mockData = [
//   {
//     id: "section1",
//     type: "section",
//     data: {
//       title: "Articles",
//       items: [
//         {
//           id: "article1",
//           type: "article",
//           data: {
//             title: "Article 1",
//             author: "Author Name 1",
//             url: "#",
//             icon: "article",
//           },
//         },
//         {
//           id: "article2",
//           type: "article",
//           data: {
//             title: "Article 2",
//             author: "Author Name 2",
//             url: "#",
//             icon: "link",
//           },
//         },
//       ],
//     },
//   },
//   {
//     id: "section2",
//     type: "section",
//     data: {
//       title: "Articles",
//       items: [
//         {
//           id: "article3",
//           type: "article",
//           data: {
//             title: "Article 3",
//             author: "Author Name 3",
//             url: "#",
//             icon: "article",
//           },
//         },
//         {
//           id: "article4",
//           type: "article",
//           data: {
//             title: "Article 4",
//             author: "Author Name 4",
//             url: "#",
//             icon: "link",
//           },
//         },
//       ],
//     },
//   },
// ];

type ItemProps = {
  title?: string;
  author?: string;
  url?: string;
};

type NavSection = {
  type: "section";
  data: ItemProps & { items: ItemProps[] };
};

// export type ItemDataProps = {
//   title?: string;
//   author?: string;
//   url?: string;
// };

// export interface NavData extends Item {
//   data: ItemDataProps & { items: ItemDataProps[] };
// }

// type ItemType = "section" | "article";

// export type Item<T> = {
//   id: string;
//   type: T;
//   data: ItemDataProps & {
//     items?: ItemDataProps;
//   };
// };
