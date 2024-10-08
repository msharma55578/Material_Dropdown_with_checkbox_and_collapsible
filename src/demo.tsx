// Dropdown with collablible and checkbox

/* eslint-disable no-use-before-define */
// import React from "react";
// import TextField from "@material-ui/core/TextField";
// import Autocomplete from "@material-ui/lab/Autocomplete";

// export default function ComboBox() {
//   return (
//     <Autocomplete
//       id="combo-box-demo"
//       options={top100Films}
//       getOptionLabel={(option) => option.title}
//       style={{ width: 300 }}
//       renderInput={(params) => (
//         <TextField {...params} label="Combo box" variant="outlined" />
//       )}
//     />
//   );
// }

// import React, { useState } from "react";
// import {
//   MenuItem,
//   FormControl,
//   Select,
//   InputLabel,
//   Checkbox,
//   ListItemText,
//   ListSubheader,
// } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";

// // Sample data
// const categories = [
//   {
//     group: "Fruits",
//     options: [
//       { label: "Apple", value: "apple" },
//       { label: "Orange", value: "orange" },
//     ],
//   },
//   {
//     group: "Vegetables",
//     options: [
//       { label: "Carrot", value: "carrot" },
//       { label: "Lettuce", value: "lettuce" },
//     ],
//   },
//   {
//     group: "Grains",
//     options: [
//       { label: "Rice", value: "rice" },
//       { label: "Wheat", value: "wheat" },
//     ],
//   },
// ];

// // Styles for the component
// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 200,
//     maxWidth: 300,
//   },
//   selectMenu: {
//     maxHeight: 300,
//   },
// }));

// export default function GroupedCheckboxDropdown() {
//   const classes = useStyles();
//   const [selectedItems, setSelectedItems] = useState([]);

//   const handleChange = (event) => {
//     setSelectedItems(event.target.value);
//   };

//   return (
//     <FormControl className={classes.formControl}>
//       <InputLabel id="checkbox-grouped-dropdown-label">Select Items</InputLabel>
//       <Select
//         labelId="checkbox-grouped-dropdown-label"
//         multiple
//         value={selectedItems}
//         onChange={handleChange}
//         renderValue={(selected) => selected.join(", ")}
//         MenuProps={{
//           PaperProps: {
//             className: classes.selectMenu,
//           },
//         }}
//       >
//         {categories.map((category, index) => (
//           <React.Fragment key={index}>
//             <ListSubheader>{category.group}</ListSubheader>
//             {category.options.map((option) => (
//               <MenuItem key={option.value} value={option.value}>
//                 <Checkbox checked={selectedItems.indexOf(option.value) > -1} />
//                 <ListItemText primary={option.label} />
//               </MenuItem>
//             ))}
//           </React.Fragment>
//         ))}
//       </Select>
//     </FormControl>
//   );
// }

///////////////////////// checkbox heading ////////

// import React, { useState } from "react";
// import {
//   Select,
//   MenuItem,
//   Checkbox,
//   ListItemText,
//   FormControl,
//   InputLabel,
//   Input,
//   ListSubheader,
// } from "@material-ui/core";

// const options = [
//   {
//     category: "Fruits",
//     items: [
//       { id: 1, name: "Apple" },
//       { id: 2, name: "Banana" },
//       { id: 3, name: "Orange" },
//     ],
//   },
//   {
//     category: "Vegetables",
//     items: [
//       { id: 4, name: "Carrot" },
//       { id: 5, name: "Broccoli" },
//       { id: 6, name: "Spinach" },
//     ],
//   },
// ];

// const GroupedCheckboxDropdown = () => {
//   const [selectedItems, setSelectedItems] = useState([]);

//   const handleItemChange = (item) => {
//     const isSelected = selectedItems.includes(item.id);
//     setSelectedItems(
//       (prevSelected) =>
//         isSelected
//           ? prevSelected.filter((id) => id !== item.id) // Uncheck
//           : [...prevSelected, item.id] // Check
//     );
//   };

//   const handleSelectAll = (categoryItems) => {
//     const allSelected = categoryItems.every((item) =>
//       selectedItems.includes(item.id)
//     );
//     if (allSelected) {
//       // Uncheck all in this category
//       setSelectedItems((prevSelected) =>
//         prevSelected.filter(
//           (id) => !categoryItems.some((item) => item.id === id)
//         )
//       );
//     } else {
//       // Check all in this category
//       setSelectedItems((prevSelected) => [
//         ...prevSelected,
//         ...categoryItems
//           .filter((item) => !prevSelected.includes(item.id))
//           .map((item) => item.id),
//       ]);
//     }
//   };

//   const isAllSelected = (categoryItems) =>
//     categoryItems.every((item) => selectedItems.includes(item.id));

//   return (
//     <FormControl fullWidth>
//       <InputLabel>Choose Options</InputLabel>
//       <Select
//         multiple
//         value={selectedItems}
//         input={<Input />}
//         renderValue={(selected) => `Selected ${selected.length} items`}
//       >
//         {options.map((group, index) => (
//           <div key={group.category}>
//             {/* Group Header with Select All */}
//             <ListSubheader>
//               <Checkbox
//                 checked={isAllSelected(group.items)}
//                 indeterminate={
//                   group.items.some((item) => selectedItems.includes(item.id)) &&
//                   !isAllSelected(group.items)
//                 }
//                 onChange={() => handleSelectAll(group.items)}
//               />
//               {group.category}
//             </ListSubheader>
//             {/* Group Items */}
//             {group.items.map((item) => (
//               <MenuItem key={item.id} value={item.id}>
//                 <Checkbox
//                   checked={selectedItems.includes(item.id)}
//                   onChange={() => handleItemChange(item)}
//                 />
//                 <ListItemText primary={item.name} />
//               </MenuItem>
//             ))}
//           </div>
//         ))}
//       </Select>
//     </FormControl>
//   );
// };

// export default GroupedCheckboxDropdown;

///////////////////////. ----- haeding with gap ----- //////

// import React, { useState } from "react";
// import {
//   Select,
//   MenuItem,
//   Checkbox,
//   ListItemText,
//   FormControl,
//   InputLabel,
//   Input,
//   ListSubheader,
// } from "@material-ui/core";

// const options = [
//   {
//     category: "Fruits",
//     items: [
//       { id: 1, name: "Apple" },
//       { id: 2, name: "Banana" },
//       { id: 3, name: "Orange" },
//     ],
//   },
//   {
//     category: "Vegetables",
//     items: [
//       { id: 4, name: "Carrot" },
//       { id: 5, name: "Broccoli" },
//       { id: 6, name: "Spinach" },
//     ],
//   },
// ];

// const GroupedCheckboxDropdown = () => {
//   const [selectedItems, setSelectedItems] = useState([]);

//   const handleItemChange = (item) => {
//     const isSelected = selectedItems.includes(item.id);
//     setSelectedItems(
//       (prevSelected) =>
//         isSelected
//           ? prevSelected.filter((id) => id !== item.id) // Uncheck
//           : [...prevSelected, item.id] // Check
//     );
//   };

//   const handleSelectAll = (categoryItems) => {
//     const allSelected = categoryItems.every((item) =>
//       selectedItems.includes(item.id)
//     );
//     if (allSelected) {
//       // Uncheck all in this category
//       setSelectedItems((prevSelected) =>
//         prevSelected.filter(
//           (id) => !categoryItems.some((item) => item.id === id)
//         )
//       );
//     } else {
//       // Check all in this category
//       setSelectedItems((prevSelected) => [
//         ...prevSelected,
//         ...categoryItems
//           .filter((item) => !prevSelected.includes(item.id))
//           .map((item) => item.id),
//       ]);
//     }
//   };

//   const isAllSelected = (categoryItems) =>
//     categoryItems.every((item) => selectedItems.includes(item.id));

//   return (
//     <FormControl fullWidth>
//       <InputLabel>Choose Options</InputLabel>
//       <Select
//         multiple
//         value={selectedItems}
//         input={<Input />}
//         renderValue={(selected) => `Selected ${selected.length} items`}
//       >
//         {options.map((group, index) => (
//           <div key={group.category}>
//             {/* Group Header with Select All */}
//             <ListSubheader>
//               <Checkbox
//                 checked={isAllSelected(group.items)}
//                 indeterminate={
//                   group.items.some((item) => selectedItems.includes(item.id)) &&
//                   !isAllSelected(group.items)
//                 }
//                 onChange={() => handleSelectAll(group.items)}
//               />
//               {group.category}
//             </ListSubheader>
//             {/* Group Items with added margin */}
//             {group.items.map((item) => (
//               <MenuItem
//                 key={item.id}
//                 value={item.id}
//                 style={{ paddingLeft: "40px" }}
//               >
//                 <Checkbox
//                   checked={selectedItems.includes(item.id)}
//                   onChange={() => handleItemChange(item)}
//                 />
//                 <ListItemText primary={item.name} />
//               </MenuItem>
//             ))}
//           </div>
//         ))}
//       </Select>
//     </FormControl>
//   );
// };

// export default GroupedCheckboxDropdown;

//////////// --------- heading with checkbox and Collapsible ----//////////

// import React, { useState } from "react";
// import {
//   Select,
//   MenuItem,
//   Checkbox,
//   ListItemText,
//   FormControl,
//   InputLabel,
//   Input,
//   ListSubheader,
//   IconButton,
//   Collapse,
// } from "@material-ui/core";
// import { ExpandLess, ExpandMore } from "@material-ui/icons";

// const options = [
//   {
//     category: "Fruits",
//     items: [
//       { id: 1, name: "Apple" },
//       { id: 2, name: "Banana" },
//       { id: 3, name: "Orange" },
//     ],
//   },
//   {
//     category: "Vegetables",
//     items: [
//       { id: 4, name: "Carrot" },
//       { id: 5, name: "Broccoli" },
//       { id: 6, name: "Spinach" },
//     ],
//   },
// ];

// const GroupedCheckboxDropdown = () => {
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [expandedGroups, setExpandedGroups] = useState({});

//   const handleItemChange = (item) => {
//     const isSelected = selectedItems.includes(item.id);
//     setSelectedItems(
//       (prevSelected) =>
//         isSelected
//           ? prevSelected.filter((id) => id !== item.id) // Uncheck
//           : [...prevSelected, item.id] // Check
//     );
//   };

//   const handleSelectAll = (categoryItems) => {
//     const allSelected = categoryItems.every((item) =>
//       selectedItems.includes(item.id)
//     );
//     if (allSelected) {
//       // Uncheck all in this category
//       setSelectedItems((prevSelected) =>
//         prevSelected.filter(
//           (id) => !categoryItems.some((item) => item.id === id)
//         )
//       );
//     } else {
//       // Check all in this category
//       setSelectedItems((prevSelected) => [
//         ...prevSelected,
//         ...categoryItems
//           .filter((item) => !prevSelected.includes(item.id))
//           .map((item) => item.id),
//       ]);
//     }
//   };

//   const isAllSelected = (categoryItems) =>
//     categoryItems.every((item) => selectedItems.includes(item.id));

//   const toggleGroupExpand = (category) => {
//     setExpandedGroups((prevExpandedGroups) => ({
//       ...prevExpandedGroups,
//       [category]: !prevExpandedGroups[category],
//     }));
//   };

//   return (
//     <FormControl fullWidth>
//       <InputLabel>Choose Options</InputLabel>
//       <Select
//         multiple
//         value={selectedItems}
//         input={<Input />}
//         renderValue={(selected) => `Selected ${selected.length} items`}
//       >
//         {options.map((group) => (
//           <div key={group.category}>
//             {/* Group Header with Select All and Collapse/Expand Button */}
//             <ListSubheader>
//               <Checkbox
//                 checked={isAllSelected(group.items)}
//                 indeterminate={
//                   group.items.some((item) => selectedItems.includes(item.id)) &&
//                   !isAllSelected(group.items)
//                 }
//                 onChange={() => handleSelectAll(group.items)}
//               />
//               {group.category}
//               <IconButton
//                 edge="end"
//                 onClick={() => toggleGroupExpand(group.category)}
//                 size="small"
//               >
//                 {expandedGroups[group.category] ? (
//                   <ExpandLess />
//                 ) : (
//                   <ExpandMore />
//                 )}
//               </IconButton>
//             </ListSubheader>
//             {/* Collapsible Group Items with added margin */}
//             <Collapse
//               in={expandedGroups[group.category]}
//               timeout="auto"
//               unmountOnExit
//             >
//               {group.items.map((item) => (
//                 <MenuItem
//                   key={item.id}
//                   value={item.id}
//                   style={{ paddingLeft: "40px" }}
//                 >
//                   <Checkbox
//                     checked={selectedItems.includes(item.id)}
//                     onChange={() => handleItemChange(item)}
//                   />
//                   <ListItemText primary={item.name} />
//                 </MenuItem>
//               ))}
//             </Collapse>
//           </div>
//         ))}
//       </Select>
//     </FormControl>
//   );
// };

// export default GroupedCheckboxDropdown;

//////////// ----- left side Collapsible without checkbox heading --- ///

// import React, { useState } from "react";
// import {
//   Select,
//   MenuItem,
//   Checkbox,
//   ListItemText,
//   FormControl,
//   InputLabel,
//   Input,
//   ListSubheader,
//   IconButton,
//   Collapse,
// } from "@material-ui/core";
// import { ExpandLess, ExpandMore } from "@material-ui/icons";

// const options = [
//   {
//     category: "Fruits",
//     items: [
//       { id: 1, name: "Apple" },
//       { id: 2, name: "Banana" },
//       { id: 3, name: "Orange" },
//     ],
//   },
//   {
//     category: "Vegetables",
//     items: [
//       { id: 4, name: "Carrot" },
//       { id: 5, name: "Broccoli" },
//       { id: 6, name: "Spinach" },
//     ],
//   },
// ];

// const GroupedCheckboxDropdown = () => {
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [expandedGroups, setExpandedGroups] = useState({});

//   const handleItemChange = (item) => {
//     const isSelected = selectedItems.includes(item.id);
//     setSelectedItems(
//       (prevSelected) =>
//         isSelected
//           ? prevSelected.filter((id) => id !== item.id) // Uncheck
//           : [...prevSelected, item.id] // Check
//     );
//   };

//   const toggleGroupExpand = (category) => {
//     setExpandedGroups((prevExpandedGroups) => ({
//       ...prevExpandedGroups,
//       [category]: !prevExpandedGroups[category],
//     }));
//   };

//   return (
//     <FormControl fullWidth>
//       <InputLabel>Choose Options</InputLabel>
//       <Select
//         multiple
//         value={selectedItems}
//         input={<Input />}
//         renderValue={(selected) => `Selected ${selected.length} items`}
//       >
//         {options.map((group) => (
//           <div key={group.category}>
//             {/* Group Header with Collapse/Expand Button on the Left */}
//             <ListSubheader>
//               <IconButton
//                 edge="start"
//                 onClick={() => toggleGroupExpand(group.category)}
//                 size="small"
//                 style={{ marginRight: "8px" }}
//               >
//                 {expandedGroups[group.category] ? (
//                   <ExpandLess />
//                 ) : (
//                   <ExpandMore />
//                 )}
//               </IconButton>
//               {group.category}
//             </ListSubheader>
//             {/* Collapsible Group Items with added margin */}
//             <Collapse
//               in={expandedGroups[group.category]}
//               timeout="auto"
//               unmountOnExit
//             >
//               {group.items.map((item) => (
//                 <MenuItem
//                   key={item.id}
//                   value={item.id}
//                   style={{ paddingLeft: "20px" }}
//                 >
//                   <Checkbox
//                     checked={selectedItems.includes(item.id)}
//                     onChange={() => handleItemChange(item)}
//                   />
//                   <ListItemText primary={item.name} />
//                 </MenuItem>
//               ))}
//             </Collapse>
//           </div>
//         ))}
//       </Select>
//     </FormControl>
//   );
// };

// export default GroupedCheckboxDropdown;

/////////// ------ Collapsible with select all option in dropdown -----//////

// import React, { useState } from "react";
// import {
//   Select,
//   MenuItem,
//   Checkbox,
//   ListItemText,
//   FormControl,
//   InputLabel,
//   Input,
//   ListSubheader,
//   IconButton,
//   Collapse,
// } from "@material-ui/core";
// import { ExpandLess, ExpandMore } from "@material-ui/icons";

// const options = [
//   {
//     category: "Fruits",
//     items: [
//       { id: 1, name: "Apple" },
//       { id: 2, name: "Banana" },
//       { id: 3, name: "Orange" },
//     ],
//   },
//   {
//     category: "Vegetables",
//     items: [
//       { id: 4, name: "Carrot" },
//       { id: 5, name: "Broccoli" },
//       { id: 6, name: "Spinach" },
//     ],
//   },
// ];

// const GroupedCheckboxDropdown = () => {
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [expandedGroups, setExpandedGroups] = useState({});

//   const handleItemChange = (item) => {
//     const isSelected = selectedItems.includes(item.id);
//     setSelectedItems(
//       (prevSelected) =>
//         isSelected
//           ? prevSelected.filter((id) => id !== item.id) // Uncheck
//           : [...prevSelected, item.id] // Check
//     );
//   };

//   const handleSelectAll = (groupItems) => {
//     const allSelected = groupItems.every((item) =>
//       selectedItems.includes(item.id)
//     );

//     if (allSelected) {
//       // If all are selected, uncheck all
//       setSelectedItems((prevSelected) =>
//         prevSelected.filter((id) => !groupItems.some((item) => item.id === id))
//       );
//     } else {
//       // If not all are selected, check all
//       const newSelections = groupItems
//         .filter((item) => !selectedItems.includes(item.id))
//         .map((item) => item.id);
//       setSelectedItems((prevSelected) => [...prevSelected, ...newSelections]);
//     }
//   };

//   const toggleGroupExpand = (category) => {
//     setExpandedGroups((prevExpandedGroups) => ({
//       ...prevExpandedGroups,
//       [category]: !prevExpandedGroups[category],
//     }));
//   };

//   return (
//     <FormControl fullWidth>
//       <InputLabel>Choose Options</InputLabel>
//       <Select
//         multiple
//         value={selectedItems}
//         input={<Input />}
//         renderValue={(selected) => `Selected ${selected.length} items`}
//       >
//         {options.map((group) => {
//           const allSelected = group.items.every((item) =>
//             selectedItems.includes(item.id)
//           );
//           return (
//             <div key={group.category}>
//               {/* Group Header with Collapse/Expand Button on the Left */}
//               <ListSubheader>
//                 <IconButton
//                   edge="start"
//                   onClick={() => toggleGroupExpand(group.category)}
//                   size="small"
//                   style={{ marginRight: "8px" }}
//                 >
//                   {expandedGroups[group.category] ? (
//                     <ExpandLess />
//                   ) : (
//                     <ExpandMore />
//                   )}
//                 </IconButton>
//                 {group.category}
//               </ListSubheader>
//               {/* Collapsible Group Items */}
//               <Collapse
//                 in={expandedGroups[group.category]}
//                 timeout="auto"
//                 unmountOnExit
//               >
//                 <MenuItem
//                   onClick={() => handleSelectAll(group.items)}
//                   style={{ paddingLeft: "20px" }}
//                 >
//                   <Checkbox
//                     checked={allSelected}
//                     indeterminate={
//                       !allSelected &&
//                       group.items.some((item) =>
//                         selectedItems.includes(item.id)
//                       )
//                     }
//                   />
//                   <ListItemText primary="Select All" />
//                 </MenuItem>
//                 {group.items.map((item) => (
//                   <MenuItem
//                     key={item.id}
//                     value={item.id}
//                     style={{ paddingLeft: "20px" }}
//                   >
//                     <Checkbox
//                       checked={selectedItems.includes(item.id)}
//                       onChange={() => handleItemChange(item)}
//                     />
//                     <ListItemText primary={item.name} />
//                   </MenuItem>
//                 ))}
//               </Collapse>
//             </div>
//           );
//         })}
//       </Select>
//     </FormControl>
//   );
// };

// export default GroupedCheckboxDropdown;

//////// ------ collablible at left and with count of selected items -- ////

// import React, { useState } from "react";
// import {
//   Select,
//   MenuItem,
//   Checkbox,
//   ListItemText,
//   FormControl,
//   InputLabel,
//   Input,
//   ListSubheader,
//   IconButton,
//   Collapse,
// } from "@material-ui/core";
// import { ExpandLess, ExpandMore } from "@material-ui/icons";

// const options = [
//   {
//     category: "Fruits",
//     items: [
//       { id: 1, name: "Apple" },
//       { id: 2, name: "Banana" },
//       { id: 3, name: "Orange" },
//     ],
//   },
//   {
//     category: "Vegetables",
//     items: [
//       { id: 4, name: "Carrot" },
//       { id: 5, name: "Broccoli" },
//       { id: 6, name: "Spinach" },
//     ],
//   },
// ];

// const GroupedCheckboxDropdown = () => {
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [expandedGroups, setExpandedGroups] = useState({});

//   const handleItemChange = (item) => {
//     const isSelected = selectedItems.includes(item.id);
//     setSelectedItems(
//       (prevSelected) =>
//         isSelected
//           ? prevSelected.filter((id) => id !== item.id) // Uncheck
//           : [...prevSelected, item.id] // Check
//     );
//   };

//   const handleSelectAll = (groupItems) => {
//     const allSelected = groupItems.every((item) =>
//       selectedItems.includes(item.id)
//     );

//     if (allSelected) {
//       // If all are selected, uncheck all
//       setSelectedItems((prevSelected) =>
//         prevSelected.filter((id) => !groupItems.some((item) => item.id === id))
//       );
//     } else {
//       // If not all are selected, check all
//       const newSelections = groupItems
//         .filter((item) => !selectedItems.includes(item.id))
//         .map((item) => item.id);
//       setSelectedItems((prevSelected) => [...prevSelected, ...newSelections]);
//     }
//   };

//   const toggleGroupExpand = (category) => {
//     setExpandedGroups((prevExpandedGroups) => ({
//       ...prevExpandedGroups,
//       [category]: !prevExpandedGroups[category],
//     }));
//   };

//   const getSelectedCountForGroup = (groupItems) => {
//     return groupItems.filter((item) => selectedItems.includes(item.id)).length;
//   };

//   return (
//     <FormControl fullWidth>
//       <InputLabel>Choose Options</InputLabel>
//       <Select
//         multiple
//         value={selectedItems}
//         input={<Input />}
//         renderValue={(selected) => `Selected ${selected.length} items`}
//       >
//         {options.map((group) => {
//           const allSelected = group.items.every((item) =>
//             selectedItems.includes(item.id)
//           );
//           const selectedCount = getSelectedCountForGroup(group.items);

//           return (
//             <div key={group.category}>
//               {/* Group Header with Collapse/Expand Button on the Left */}
//               <ListSubheader>
//                 <IconButton
//                   edge="start"
//                   onClick={() => toggleGroupExpand(group.category)}
//                   size="small"
//                   style={{ marginRight: "8px" }}
//                 >
//                   {expandedGroups[group.category] ? (
//                     <ExpandLess />
//                   ) : (
//                     <ExpandMore />
//                   )}
//                 </IconButton>
//                 {group.category} ({selectedCount} selected)
//               </ListSubheader>
//               {/* Collapsible Group Items */}
//               <Collapse
//                 in={expandedGroups[group.category]}
//                 timeout="auto"
//                 unmountOnExit
//               >
//                 <MenuItem
//                   onClick={() => handleSelectAll(group.items)}
//                   style={{ paddingLeft: "20px" }}
//                 >
//                   <Checkbox
//                     checked={allSelected}
//                     indeterminate={
//                       !allSelected &&
//                       group.items.some((item) =>
//                         selectedItems.includes(item.id)
//                       )
//                     }
//                   />
//                   <ListItemText primary="Select All" />
//                 </MenuItem>
//                 {group.items.map((item) => (
//                   <MenuItem
//                     key={item.id}
//                     value={item.id}
//                     style={{ paddingLeft: "20px" }}
//                   >
//                     <Checkbox
//                       checked={selectedItems.includes(item.id)}
//                       onChange={() => handleItemChange(item)}
//                     />
//                     <ListItemText primary={item.name} />
//                   </MenuItem>
//                 ))}
//               </Collapse>
//             </div>
//           );
//         })}
//       </Select>
//     </FormControl>
//   );
// };

// export default GroupedCheckboxDropdown;

////////////------- checkbox, collapse and count of items ---- ///////

// import React, { useState } from "react";
// import {
//   Select,
//   MenuItem,
//   Checkbox,
//   ListItemText,
//   FormControl,
//   InputLabel,
//   Input,
//   ListSubheader,
//   IconButton,
//   Collapse,
// } from "@material-ui/core";
// import { ExpandLess, ExpandMore } from "@material-ui/icons";

// const options = [
//   {
//     category: "Fruits",
//     items: [
//       { id: 1, name: "Apple" },
//       { id: 2, name: "Banana" },
//       { id: 3, name: "Orange" },
//     ],
//   },
//   {
//     category: "Vegetables",
//     items: [
//       { id: 4, name: "Carrot" },
//       { id: 5, name: "Broccoli" },
//       { id: 6, name: "Spinach" },
//     ],
//   },
// ];

// const GroupedCheckboxDropdown = () => {
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [expandedGroups, setExpandedGroups] = useState({});

//   const handleItemChange = (item) => {
//     const isSelected = selectedItems.includes(item.id);
//     setSelectedItems(
//       (prevSelected) =>
//         isSelected
//           ? prevSelected.filter((id) => id !== item.id) // Uncheck
//           : [...prevSelected, item.id] // Check
//     );
//   };

//   const handleSelectAll = (groupItems) => {
//     const allSelected = groupItems.every((item) =>
//       selectedItems.includes(item.id)
//     );

//     if (allSelected) {
//       // If all are selected, uncheck all
//       setSelectedItems((prevSelected) =>
//         prevSelected.filter((id) => !groupItems.some((item) => item.id === id))
//       );
//     } else {
//       // If not all are selected, check all
//       const newSelections = groupItems
//         .filter((item) => !selectedItems.includes(item.id))
//         .map((item) => item.id);
//       setSelectedItems((prevSelected) => [...prevSelected, ...newSelections]);
//     }
//   };

//   const toggleGroupExpand = (category) => {
//     setExpandedGroups((prevExpandedGroups) => ({
//       ...prevExpandedGroups,
//       [category]: !prevExpandedGroups[category],
//     }));
//   };

//   const getSelectedCountForGroup = (groupItems) => {
//     return groupItems.filter((item) => selectedItems.includes(item.id)).length;
//   };

//   return (
//     <FormControl fullWidth>
//       <InputLabel>Choose Options</InputLabel>
//       <Select
//         multiple
//         value={selectedItems}
//         input={<Input />}
//         renderValue={(selected) => `Selected ${selected.length} items`}
//       >
//         {options.map((group) => {
//           const allSelected = group.items.every((item) =>
//             selectedItems.includes(item.id)
//           );
//           const selectedCount = getSelectedCountForGroup(group.items);

//           return (
//             <div key={group.category}>
//               <ListSubheader>
//                 {/* Select All Checkbox on the Left */}
//                 <Checkbox
//                   checked={allSelected}
//                   onChange={() => handleSelectAll(group.items)}
//                   style={{ marginRight: "8px" }}
//                 />
//                 {group.category} ({selectedCount} selected)
//                 {/* Collapsible Group Indicator on the Right */}
//                 <IconButton
//                   edge="end"
//                   onClick={() => toggleGroupExpand(group.category)}
//                   size="small"
//                   style={{ marginLeft: "auto" }}
//                 >
//                   {expandedGroups[group.category] ? (
//                     <ExpandLess />
//                   ) : (
//                     <ExpandMore />
//                   )}
//                 </IconButton>
//               </ListSubheader>
//               {/* Collapsible Group Items */}
//               <Collapse
//                 in={expandedGroups[group.category]}
//                 timeout="auto"
//                 unmountOnExit
//               >
//                 {group.items.map((item) => (
//                   <MenuItem
//                     key={item.id}
//                     value={item.id}
//                     style={{ paddingLeft: "40px" }}
//                   >
//                     <Checkbox
//                       checked={selectedItems.includes(item.id)}
//                       onChange={() => handleItemChange(item)}
//                     />
//                     <ListItemText primary={item.name} />
//                   </MenuItem>
//                 ))}
//               </Collapse>
//             </div>
//           );
//         })}
//       </Select>
//     </FormControl>
//   );
// };

// export default GroupedCheckboxDropdown;

////////------ collpible, checkbox and show city name --/////

// import React, { useState } from "react";
// import {
//   Select,
//   MenuItem,
//   Checkbox,
//   ListItemText,
//   FormControl,
//   InputLabel,
//   Input,
//   ListSubheader,
//   IconButton,
//   Collapse,
// } from "@material-ui/core";
// import { ExpandLess, ExpandMore } from "@material-ui/icons";

// const options = [
//   {
//     category: "Fruits",
//     items: [
//       { id: 1, name: "Apple" },
//       { id: 2, name: "Banana" },
//       { id: 3, name: "Orange" },
//     ],
//   },
//   {
//     category: "Vegetables",
//     items: [
//       { id: 4, name: "Carrot" },
//       { id: 5, name: "Broccoli" },
//       { id: 6, name: "Spinach" },
//     ],
//   },
// ];

// const GroupedCheckboxDropdown = () => {
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [expandedGroups, setExpandedGroups] = useState({});

//   const handleItemChange = (item) => {
//     const isSelected = selectedItems.includes(item.id);
//     setSelectedItems(
//       (prevSelected) =>
//         isSelected
//           ? prevSelected.filter((id) => id !== item.id) // Uncheck
//           : [...prevSelected, item.id] // Check
//     );
//   };

//   const handleSelectAll = (groupItems) => {
//     const allSelected = groupItems.every((item) =>
//       selectedItems.includes(item.id)
//     );

//     if (allSelected) {
//       // If all are selected, uncheck all
//       setSelectedItems((prevSelected) =>
//         prevSelected.filter((id) => !groupItems.some((item) => item.id === id))
//       );
//     } else {
//       // If not all are selected, check all
//       const newSelections = groupItems
//         .filter((item) => !selectedItems.includes(item.id))
//         .map((item) => item.id);
//       setSelectedItems((prevSelected) => [...prevSelected, ...newSelections]);
//     }
//   };

//   const toggleGroupExpand = (category) => {
//     setExpandedGroups((prevExpandedGroups) => ({
//       ...prevExpandedGroups,
//       [category]: !prevExpandedGroups[category],
//     }));
//   };

//   const getCityNames = () => {
//     const selectedNames = options
//       .flatMap((group) => group.items)
//       .filter((item) => selectedItems.includes(item.id))
//       .map((item) => item.name);
//     return selectedNames.join(", ") || "None selected";
//   };

//   return (
//     <FormControl fullWidth>
//       <InputLabel>Choose Options</InputLabel>
//       <Select
//         multiple
//         value={selectedItems}
//         input={<Input />}
//         renderValue={getCityNames}
//       >
//         {options.map((group) => {
//           const allSelected = group.items.every((item) =>
//             selectedItems.includes(item.id)
//           );
//           const selectedCount = group.items.filter((item) =>
//             selectedItems.includes(item.id)
//           ).length;

//           return (
//             <div key={group.category}>
//               <ListSubheader>
//                 {/* Select All Checkbox on the Left */}
//                 <Checkbox
//                   checked={allSelected}
//                   onChange={() => handleSelectAll(group.items)}
//                   style={{ marginRight: "8px" }}
//                 />
//                 {group.category} ({selectedCount} selected)
//                 {/* Collapsible Group Indicator on the Right */}
//                 <IconButton
//                   edge="end"
//                   onClick={() => toggleGroupExpand(group.category)}
//                   size="small"
//                   style={{ marginLeft: "auto" }}
//                 >
//                   {expandedGroups[group.category] ? (
//                     <ExpandLess />
//                   ) : (
//                     <ExpandMore />
//                   )}
//                 </IconButton>
//               </ListSubheader>
//               {/* Collapsible Group Items */}
//               <Collapse
//                 in={expandedGroups[group.category]}
//                 timeout="auto"
//                 unmountOnExit
//               >
//                 {group.items.map((item) => (
//                   <MenuItem
//                     key={item.id}
//                     value={item.id}
//                     style={{ paddingLeft: "20px" }}
//                   >
//                     <Checkbox
//                       checked={selectedItems.includes(item.id)}
//                       onChange={() => handleItemChange(item)}
//                     />
//                     <ListItemText primary={item.name} />
//                   </MenuItem>
//                 ))}
//               </Collapse>
//             </div>
//           );
//         })}
//       </Select>
//     </FormControl>
//   );
// };

// export default GroupedCheckboxDropdown;

///////-------

import React, { useState } from "react";
import {
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  FormControl,
  InputLabel,
  Input,
  ListSubheader,
  IconButton,
  Collapse,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

const options = [
  {
    category: "Fruits",
    items: [
      { id: 1, name: "Apple" },
      { id: 2, name: "Banana" },
      { id: 3, name: "Orange" },
    ],
  },
  {
    category: "Vegetables",
    items: [
      { id: 4, name: "Carrot" },
      { id: 5, name: "Broccoli" },
      { id: 6, name: "Spinach" },
    ],
  },
];

const GroupedCheckboxDropdown = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [expandedGroups, setExpandedGroups] = useState({});

  const handleItemChange = (item) => {
    const isSelected = selectedItems.includes(item.id);
    setSelectedItems(
      (prevSelected) =>
        isSelected
          ? prevSelected.filter((id) => id !== item.id) // Uncheck
          : [...prevSelected, item.id] // Check
    );
  };

  const handleSelectAll = (groupItems) => {
    const allSelected = groupItems.every((item) =>
      selectedItems.includes(item.id)
    );

    if (allSelected) {
      // If all are selected, uncheck all
      setSelectedItems((prevSelected) =>
        prevSelected.filter((id) => !groupItems.some((item) => item.id === id))
      );
    } else {
      // If not all are selected, check all
      const newSelections = groupItems
        .filter((item) => !selectedItems.includes(item.id))
        .map((item) => item.id);
      setSelectedItems((prevSelected) => [...prevSelected, ...newSelections]);
    }
  };

  const toggleGroupExpand = (category) => {
    setExpandedGroups((prevExpandedGroups) => ({
      ...prevExpandedGroups,
      [category]: !prevExpandedGroups[category],
    }));
  };

  const getCityNames = () => {
    const selectedNames = options
      .flatMap((group) => group.items)
      .filter((item) => selectedItems.includes(item.id))
      .map((item) => item.name);
    return selectedNames.join(", ") || "None selected";
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Choose Options</InputLabel>
      <Select
        multiple
        value={selectedItems}
        input={<Input />}
        renderValue={getCityNames}
      >
        {options.map((group) => {
          const allSelected = group.items.every((item) =>
            selectedItems.includes(item.id)
          );
          const selectedCount = group.items.filter((item) =>
            selectedItems.includes(item.id)
          ).length;

          return (
            <div key={group.category}>
              <ListSubheader>
                {/* Select All Checkbox on the Left */}
                <Checkbox
                  checked={allSelected}
                  onChange={() => handleSelectAll(group.items)}
                  style={{ marginRight: "8px" }}
                />
                {group.category} ({selectedCount} selected)
                {/* Collapsible Group Indicator on the Right */}
                <IconButton
                  edge="end"
                  onClick={() => toggleGroupExpand(group.category)}
                  size="small"
                  style={{ marginLeft: "auto" }}
                >
                  {expandedGroups[group.category] ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )}
                </IconButton>
              </ListSubheader>
              {/* Collapsible Group Items */}
              <Collapse
                in={expandedGroups[group.category]}
                timeout="auto"
                unmountOnExit
              >
                {group.items.map((item) => (
                  <MenuItem
                    key={item.id}
                    value={item.id}
                    style={{ paddingLeft: "20px" }}
                  >
                    <Checkbox
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleItemChange(item)}
                    />
                    <ListItemText primary={item.name} />
                  </MenuItem>
                ))}
              </Collapse>
            </div>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default GroupedCheckboxDropdown;

////////// extras. ////////////////

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
