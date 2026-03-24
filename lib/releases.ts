import releases from "@/data/releases.json";
import type { Release } from "@/types/changelog";

/**
 * 最新リリース取得（常に先頭）
 */
export function getLatestRelease(): Release {
  return (releases as Release[])[0];
}

/**
 * 要約生成（最初の有意味なitemを拾う）
 */
export function getReleaseSummary(release: Release): string {
  for (const section of release.sections) {
    for (const item of section.items) {
      if (item.text && item.text.trim().length > 0) {
        return item.text;
      }
    }
  }
  return "";
}
