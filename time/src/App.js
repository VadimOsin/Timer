import React, {useState} from 'react';
import Time from "./Components/Time";
import Edit from "./Components/Edit";


const App = () => {
    const [data, setData] = useState(120)

    const updateData = (value) => {
        setData(value)
    }

    return (
        <div>
            <Time sec={data}/>
            <Edit updateData={updateData}/>
        </div>
    );
};

export default App;