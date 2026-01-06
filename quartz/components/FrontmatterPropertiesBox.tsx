import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

// component function
const FrontmatterPropertiesBox: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  if (!fileData?.frontmatter) return null

  const props = fileData.frontmatter
const entries = Object.entries(props).filter(([_, value]) => {
// this section deletes properties with null values
  if (value === null) return false
  if (value === undefined) return false
  if (Array.isArray(value) && value.length === 0) return false
  if (typeof value === "string" && value.trim() === "") return false
  return true
})

  if (entries.length === 0) return null

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
