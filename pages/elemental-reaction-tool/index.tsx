import {useEffect, useState} from "react";
import styles from "./index.module.css"
import {element} from "@/models/element";
import {elementalReaction} from "@/models/elementalReaction";

export default function ElementalReaction() {
    const [elements, setElements] = useState<element[]>([]);
    const [elementalReactions, setElementalReactions] = useState<elementalReaction[]>([]);
    const [reaction, setReaction] = useState("");
    const [selected, setSelected] = useState<String[]>([]);

    useEffect(() => {
        if (elements.length) return;
        getElements()
            .then((result) => {
                setElements(result);
                console.log(result);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [])

    useEffect(() => {
        if (elementalReactions.length) return;
        getElementalReactions()
            .then((result) => {
                setElementalReactions(result);
                console.log(result);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [elements])

    const getElements = async () => {
        try {
            const response = await fetch(
                `${new URL(window.location.href).origin}/api/element`,
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

    const getElementalReactions = async () => {
        try {
            const response = await fetch(
                `${new URL(window.location.href).origin}/api/elementalReaction`,
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

    const handleSelection = (element: string) => {
        if (selected.includes(element)) return;
        const newSelected = [...selected, element];
        setSelected(newSelected);

        const match = elementalReactions.find((reaction) => reaction.elements.L.every((element) => newSelected.includes(element.S)
            && reaction.elements.L.length === newSelected.length));

        if (match) {
            return setReaction(match.name.S);
        }
        setReaction("");
    }

    return (
        <div className={styles.base}>
            <div className={styles.container}>
                <div className={styles.tileContainer}>
                    {elements.length && elements.map((element, i) => {
                        return (
                            <div className={styles.tile}
                                 onClick={() => handleSelection(element.name.S)}
                                 key={i}
                            >
                                {element.name.S}
                            </div>
                        )
                    })}
                </div>
                <div className={styles.button} onClick={() => {
                    setSelected([]);
                    setReaction("")
                }}>Clear
                </div>
            </div>

            <hr/>

            <div className={styles.container}>
                <div className={styles.tileContainer}>
                    <div className={styles.tileContainer}>
                        {selected.map((element, i) => {
                            return (
                                <>
                                    <div className={styles.tile} key={i}>{element}</div>
                                    {(selected.length > 1 && i != selected.length - 1) &&
                                        <div className={styles.tile} key={i}>+</div>
                                    }
                                </>
                            )
                        })}
                    </div>
                </div>
                {Boolean(reaction.length) && <div className={styles.tile}>
                    =
                </div>}
                {Boolean(reaction.length) && <div className={styles.tile}>
                    {reaction}
                </div>}
            </div>
        </div>
    )
}
