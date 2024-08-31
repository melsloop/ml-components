import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { getIcon } from "../../icons";
import List from "../../List";
import ListItem from "../../ListItem";
import Button from "../../Button";
import NavItem from "../NavItem/NavItem";
import c from "classnames";
import styles from "./MenuBar.module.scss";
import { NavProps, NavItemProps } from "./types";
import "./styles.scss";

const renderItems = (items: NavItemProps[], currentPath: string) =>
  items?.map((item) => {
    return (
      <NavigationMenu.Link key={`list-item-${item.id}`} asChild>
        <ListItem isSelected={currentPath !== "/" && item?.data?.url?.includes(currentPath)} className={styles.menuListItem}>
          <NavItem
            title={item.data?.title || ''}
            description={item.data?.description}
            author={item.data?.author}
            icon={item.data?.icon}
            url={item.data?.url}
            className={styles.navItem}
          />
        </ListItem>
      </NavigationMenu.Link>
    );
  });

export const renderSections = (sections: NavItemProps[], currentPath: string) => {
  return sections?.map((section) => (
    <NavigationMenu.Item key={`item-${section.id}`} asChild>
      <>
        <Button asChild>
          <NavigationMenu.Trigger aria-hidden>
            {section.data?.title || ''}
            {getIcon("caretDown", styles.caret)}
          </NavigationMenu.Trigger>
        </Button>
        <NavigationMenu.Content className={styles.content}>
          <List className={styles.sectionItemsList}>{renderItems(section.data?.items || [], currentPath)}</List>
        </NavigationMenu.Content>
      </>
    </NavigationMenu.Item>
  ));
};

const MenuBar = ({ data, direction, className, currentPath}: NavProps) => {
  return (
    <NavigationMenu.Root className={c(styles.root, className)} dir={direction}>
      <NavigationMenu.List className={styles.menuSectionTriggers}>
        {renderSections(data, currentPath)}
        <NavigationMenu.Indicator className={styles.indicator}>
          <div className={styles.arrow} />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>
      <div className={styles.viewportPosition}>
        <NavigationMenu.Viewport className={styles.viewport} />
      </div>
    </NavigationMenu.Root>
  );
};

export default MenuBar;
