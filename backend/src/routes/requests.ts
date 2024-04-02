import Router from 'express';
import {client} from '../db';

const db = client.db('IcePanel');
const collection = db.collection('Requests');

const router = Router();

router.get('/verifyName', async (req, res) => {
    const name = req.query.name as string;

    const user = await collection.findOne({techName: name.toLowerCase()});

    if(user) {
        return res.json({
            status: true
        })
    } else {
        return res.json({
            status: false
        })
    }
})

router.post('/submit', async (req, res) => {
    const {techName, description, fileUrl, websiteUrl, docsUrl, changelogUrl, brandColorName, brandColorHex, availability} = req.body;

    const toBeStoredAvailability = availability === 'no' ? false : true;

    const request = {
        techName: techName.toLowerCase(),
        description,
        fileUrl,
        websiteUrl,
        docsUrl,
        changelogUrl,
        brandColorName,
        brandColorHex,
        availability: toBeStoredAvailability
    }

    const result = await collection.insertOne(request);

    return res.json({
        status: true,
        id: result.insertedId
    });
});

router.get('/all', async (req, res) => {
    const requests = await collection.find({}).toArray();

    return res.json(requests);
});

export default router;