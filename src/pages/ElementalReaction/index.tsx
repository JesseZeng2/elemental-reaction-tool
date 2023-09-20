'use client'
import {useEffect, useState} from "react";

export default function ElementalReaction() {
    const [elementalReactions, setElementalReactions] = useState([]);

    useEffect(() => {
        getElementalReactions()
            .then((result) => {
                setElementalReactions(result);
                console.log(result);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [])

    const getElementalReactions = async () => {
        try {
            const response = await fetch(
                `${new URL(window.location.href).origin}/api/elementalreaction`,
                {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'},
                }
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Error:', error);
            return [];
        }
    }

    return (
        <div>
            Hello
            {`Number of items: ${elementalReactions.length}`}
        </div>
    )
}
