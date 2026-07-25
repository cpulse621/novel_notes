import { componentRegistry } from "../../quartz/components/registry"

export { AspectCSS, AspectKey, ThemeModule, CALLOUT_ALIASES, CALLOUT_ICON_MAP, CHECKBOX_ICON_MAP, ThemeData, ThemeMeta, ThemeOptions, generateCalloutIconCSS, generateCheckboxIconCSS, getAvailableThemes, getThemeMeta, loadTheme, registerTheme, resolveCalloutIcon, resolveCheckboxIcon, resolveThemeId } from "./quartz-themes"

export const plugins: Record<string, Record<string, (...args: unknown[]) => void>> = {
  "quartz-themes": {
    QuartzTheme: (...args: unknown[]) => { componentRegistry.setOptionOverrides("quartz-themes", args[0] as Record<string, unknown>); },
    QuartzThemes: (...args: unknown[]) => { componentRegistry.setOptionOverrides("quartz-themes", args[0] as Record<string, unknown>); },
    quartzThemes: (...args: unknown[]) => { componentRegistry.setOptionOverrides("quartz-themes", args[0] as Record<string, unknown>); },
    transformer: (...args: unknown[]) => { componentRegistry.setOptionOverrides("quartz-themes", args[0] as Record<string, unknown>); },
  },
}

export const QuartzTheme = plugins["quartz-themes"].QuartzTheme
export const QuartzThemes = plugins["quartz-themes"].QuartzThemes
export const quartzThemes = plugins["quartz-themes"].quartzThemes
export const transformer = plugins["quartz-themes"].transformer
