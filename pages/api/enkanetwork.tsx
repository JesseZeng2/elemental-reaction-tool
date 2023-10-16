import {AssetFinder} from "enkanetwork.js";
import {NextApiRequest, NextApiResponse} from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const imageName = String(req.query.imageName);
    if (!imageName) return res.status(400);

    const finder = new AssetFinder();
    const link = finder.toLink(imageName);
    console.log(link);
    return res.status(200).json(link);
}

