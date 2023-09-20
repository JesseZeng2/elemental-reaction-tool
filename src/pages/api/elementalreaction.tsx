import {AWS} from 'aws-config';

export default async function handler(req, res) {

    const DynamoDB = new AWS.DynamoDB();

    try {
        const params = {
            TableName: 'elemental-reactions',
        };
        const data = await DynamoDB.scan(params).promise();

        return res.status(200).json(data.Items);
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({message: 'Internal server error'});
    }
}
