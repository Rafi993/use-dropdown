# use-dropdown

Simple hook that you can use to build dropdowns

## Why?

This hook provides boolean value dropdown which you can use to show dropdown and couple of
functions to change that value. It also set dropdown boolean to false when click outside or
when esc key is pressed. Since this functionality is needed by most dropdown this hook makes it
easier to build custom dropdowns.

## Usage

```javascript
import { useRef } from "react";
import useDropdown from "use-dropdown";

const outerRef = useRef(null);
const { dropdown, toggleDropdown } = useDropdown(outerRef);

const DropdownContainer = () => (
  <StyledOuterComponent ref={outerRef}>
    {dropdown && <Dropdown />}
  </StyledOuterComponent>
);

export default DropdownContainer;
```
