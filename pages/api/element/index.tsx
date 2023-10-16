import AWS from '../../../aws-config';
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const DynamoDB = new AWS.DynamoDB();

    try {
        const params = {
            TableName: 'elements',
        };
        const data = await DynamoDB.scan(params).promise();

        return res.status(200).json(data.Items);
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({message: 'Internal server error'});
    }
}
