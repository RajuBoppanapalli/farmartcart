import { createContext, useEffect, useState } from "react";
import { getCompare } from "./compare.service";
import axios from "axios";


export const CompareContext = createContext();
export const CompareProvider = ({ children }) => {
    const [compareList, setCompareList] = useState([]);
    const [compareCount, setCompareCount] = useState(0);
    const [userData, setUserData] = useState(null);
   

    useEffect(() => {
        const data = localStorage.getItem("userdata");
        if (data) {
            setUserData(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
       
        if (userData && userData.length > 0) {
            const cid = userData[0].customerid;
            axios.get(`http://localhost:4002/getcomparedata/${cid}`).then((res) => {
            setCompareList(res.data);
            setCompareCount(res.data.length);
        });
    }
    }, [userData]);

    
    const addToCompare = (item) => {
       
        if (!compareList.some(compareItem => compareItem.id === item.id)) {
            setCompareList([...compareList, item]);
            setCompareCount(compareCount + 1);
        }
    };

    
    const removeFromCompare = (id) => {
        const updatedCompareList = compareList.filter((item) => item.id !== id);
        setCompareList(updatedCompareList);
        setCompareCount(compareCount - 1);
    };

    return (
        <CompareContext.Provider
            value={{
                compareList,
                compareCount,
                addToCompare,
                removeFromCompare,
            }}
        >
            {children}
        </CompareContext.Provider>
    );
};

