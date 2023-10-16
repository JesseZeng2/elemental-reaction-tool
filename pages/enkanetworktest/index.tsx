import {useEffect, useState} from "react";
import styles from "./index.module.css"

export default function EnkaNetworkTest() {
    const [link, setLink] = useState("");

    useEffect(() => {
        getAssetImageLink("UI_AvatarIcon_Hutao").then((link) => setLink(link));
    }, []);

    const getAssetImageLink = async (imageName: string) => {
        return fetch(
            `${new URL(window.location.href).origin}/api/enkanetwork?imageName=${imageName}`,
            {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            }
        ).then((res) => res.json());
    }

    return (
        <div className={styles.base}>
            Hello
            <img src={link} alt={""}/>
        </div>

    )
}
