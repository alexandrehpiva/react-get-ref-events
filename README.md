# react-get-ref-events
Get events from element reference.

![npm](https://img.shields.io/npm/dy/react-get-ref-events)


# Installation
```
yarn add react-get-ref-events
```

## Example

```js
import { getInputEvents } from 'react-get-ref-events'

// TODO: fazer react functional component com input de exemplo
const searchField = getInputEvents(searchProductRef);
searchField.focus();

const product = searchList?.find(
  (p) => p.idProduct === activeFeatureItem?.idProduct ?? ''
);

searchField.setValue(product?.name ?? '');
searchField.select();
```