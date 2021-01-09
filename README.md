# Persian React DatePicker :calendar:

#### you can see more examples in [here](https://davoodhobabi.github.io/persian-datepicker/)

## **usage**  : 
**install :**
```npm
npm install persian-react-datepicker
```
**use in component :**
```
import React from 'react'
import DatePicker from 'persian-react-datepicker'

function App() {
 return(
    <DatePicker />
 )
}

export default App;
```


## **API**  : 
props | type | default | description 
--- | --- | --- | --- 
className | string | undefined | default trigger's className
dateRenge | object | { end : current year ,start :"1371" } | End must be greater than Start 
value | string | current date in format YYYY-MM-DD |  
onChange | function |undefined |  
trigger | React Node | <input /> | change default trigger