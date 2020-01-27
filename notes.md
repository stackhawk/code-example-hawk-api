# StackHawk Code Exercise

### Steps to complete

1. Setup environment. Build API docker and run server. Install node modules on client.
2. Configure React with TypeScript (this was a new concept to me, as I have never used React with TypeScript). Hit API endpoints with Postman.
3. Determine component hierarchy from designs. Plan out and implement CSS grid to achieve design for hawk table.
4. Setup proxy express server to hit API from client (NOTE: will need to run server with the following command from the `ui` directory: `node server.js` as noted in [README](./README.md).
5. Render results from API call when component is mounted. Provide default message if no results are returned.
6. Refactor to give parent component state to share between table and details form.
7. Create CSS grid for details form, wire details form to hawk selected hawk stored in state.
8. Post new hawk to database and retrieve new list on add.
9. Apply styles according to provided specifications.
10. Add documentation

### Improvements

1. Implement filter functionality on table headings, and when interacting with filter text input.
2. Add Sass or Less to improve CSS efficiency, or styled-components for React.
3. Dial in CSS, not pixel perfect in current state - most notably is the display of the filter input of the hawk table when the details form is visible
4. Refactor CSS grid, instead of using grid-template-areas, use grid-column-start, grid-row-end, etc. Display form grid is hard to understand due to so many grid cells.
5. Implement idiomatic CSS.
6. Form validation - can send empty values but will not display any errors.
7. Be able to update hawk when an existing hawk in the reference table is selected in the details pane.
8. Plan out file structure, currently all files live on same directory level.
