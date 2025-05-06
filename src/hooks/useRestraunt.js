import { useState, useEffect } from "react";


const useRestruant = (id) => {
    const [RestruantMenu, SetRestrauntMenu] = useState([]);
    const [RestruantMenuItems, SetRestrauntMenuItems] = useState([]);
    const [loading, setLoading] = useState(true); // <-- add this

    async function Apicall() {
        try {
            const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=14.4595042&lng=75.9094179&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
            const json = await data.json();

            SetRestrauntMenu(json.data.cards[2].card.card.info);
            SetRestrauntMenuItems(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
        } catch (error) {
            console.error("Fetch failed:", error);
        } finally {
            setLoading(false); // <-- set loading to false
        }
    }

    useEffect(() => {
        Apicall();
    }, []);

    return { RestruantMenu, RestruantMenuItems, loading }; // <-- return loading
};

export default useRestruant;