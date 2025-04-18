export type ComponentSize = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type SpacingSize = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type RadiusSize = 'none' | 'sm' | 'md' | 'lg';
export type ShadowSize = 'none' | 'sm' | 'md' | 'lg';
export type BorderSize = 'none' | 'xs' | 'sm' | 'md' | 'lg';

export type ThemeComponentSize = Record<ComponentSize, string>;
export type ThemeShadow = Record<ShadowSize, string>;
export type ThemeRadius = Record<RadiusSize, string>;
export type ThemeSpacing = Record<SpacingSize, string>;
export type ThemeBorder = Record<BorderSize, string>;

export type ThemeOptions = {
	omitGlobals?: boolean;
};
