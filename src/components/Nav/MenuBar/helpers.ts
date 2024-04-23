import { NavItemDataProps, NavItemLocaleProps, NavItemProps, NavSectionDataProps } from "./types";

const translateKeys = (keys: NavItemLocaleProps, translateFn: (s: string) => string) =>
  Object.fromEntries(Object.keys(keys).map((key) => [key, translateFn(keys[key])]));

const getSectionItems = (section: NavSectionDataProps, items: NavItemDataProps[]) => {
  return section.items ? section.items.map((itemId) => items.filter((item) => item.id === itemId)[0]) : [];
};

export const parseMenuItems = (sections: NavSectionDataProps[], items: NavItemDataProps[], translate: (s: string) => string): NavItemProps[] => {
  const res = sections.map((section) => {
    return Object.assign({}, section, {
      locale: translateKeys(section.locale, translate),
      items: getSectionItems(section, items).map((item) => {
        return Object.assign({}, item, {
          locale: translateKeys(item.locale, translate),
        });
      }),
    });
  });
  return res;
};
