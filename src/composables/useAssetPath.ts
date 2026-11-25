export function useAssetPath(path: string): string {
  const baseURL = useRuntimeConfig().app.baseURL
  const normalizedBase = baseURL.endsWith("/") ? baseURL : baseURL + "/"
  return normalizedBase + path.replace(/^\/+/, "")
}

export function useAssetUrl(path: string): string {
  return "url(" + JSON.stringify(useAssetPath(path)) + ")"
}