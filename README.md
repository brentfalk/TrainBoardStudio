# Train Board Studio

Design printable train route boards with a self-contained browser editor. Open [map-editor.html](map-editor.html) directly to start. It works offline without installation or third-party packages.

## Build a board

1. Enter a name and click **Add City**. Drag the city dot to move it, or drag its label to reposition the text.
2. Select two cities, choose one to three tracks and a train length, then click a color. Select a track to edit it or add water and tunnel requirements. Drag a track to curve the connection.
3. Select two cities and click **Create Ticket** to add a destination ticket. Edit its points or remove it in the list below the map.
4. Use **Board setup** to choose Letter, 11 × 17, or A3 in portrait or landscape, adjust the map and element sizes, or upload an SVG background. **Use full map canvas** hides the heading, train counters, and route scoring reference.

Use **Save** to download your project as JSON and **Open** to resume it. The JSON includes any uploaded background. The editor also restores your last board when browser storage is available.

## Print and export

| Output | Toolbar controls |
| --- | --- |
| Map | **Export SVG** downloads an editable vector map. **Print map** uses the selected paper size and orientation. |
| Destination tickets | **Export tickets** downloads a printable HTML file. **Print tickets** fits eight 82.9 × 57.5 mm inserts on each Letter portrait sheet. Leave 3 mm of clear film on each side for a finished 3.5 × 2.5 in card. |
| Scoreboard | **View scoreboard** opens the built-in preview. **Print tracking** prints one Letter portrait sheet with five 45-train counters and five score lanes from 0 to 300. **Export tracking** downloads a printable HTML copy. |

Print at **100% / actual size** with browser headers and footers off. Choose **Save as PDF** in the print dialog for a PDF copy.

## Repository files

- [map-editor.html](map-editor.html) contains the interface and all map, ticket, and scoreboard generators.
- [serve-editor.mjs](serve-editor.mjs) is an optional local preview server. Run `node serve-editor.mjs` and open `http://127.0.0.1:8787`.
