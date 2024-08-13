// Function to format a cocktails name to become a readable url
export function formatCocktailName(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "");
}
