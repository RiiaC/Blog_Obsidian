import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

// component function
const FrontmatterPropertiesBox: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  if (!fileData?.frontmatter) return null

  const props = fileData.frontmatter
const entries = Object.entries(props).filter(([_, value]) => {
 // --- New line added 2026-02-18 to skip the "date created" property---
  if (key.toLowerCase() === "date created") return false
// this section deletes properties with null values
  if (value === null) return false
  if (value === undefined) return false
  if (Array.isArray(value) && value.length === 0) return false
  if (typeof value === "string" && value.trim() === "") return false
  return true
})

  if (entries.length === 0) return null


  // Helper provided by AI to turn [[Link]] into a clickable string or link
  const renderValue = (val: any) => {
    if (Array.isArray(val)) {
      return val.map(v => renderValue(v)).reduce((prev, curr) => [prev, ", ", curr])
    }
    
    const strVal = String(val)
    // Check for [[Wikilink]] format
    const wikiMatch = strVal.match(/^\[\[(.*?)\]\]$/)
    if (wikiMatch) {
      const linkText = wikiMatch[1]
      // Quartz uses lowercase hyphenated slugs for URLs
      const url = "/" + linkText.toLowerCase().replace(/\s+/g, "-")
      return <a href={url}>{linkText}</a>
    }
    
    return strVal
  }
  // end of the AI Helper code to  to turn [[Link]] into a clickable string or link
  return (
    <div class="frontmatter-box">
      <h3>Properties</h3>
      <ul>
        {entries.map(([key, value]) => (
//this next line tells it to have a space after the comma when showing properties that contain a list
          <li><strong>{key}:</strong> {Array.isArray(value) ? value.join(", ") : String(value)}</li>
        ))}
      </ul>
    </div>
  )
}

// export correctly
export default (() => FrontmatterPropertiesBox) satisfies QuartzComponentConstructor
