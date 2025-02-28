import { json } from '@sveltejs/kit';
import 'dotenv/config'

const API_KEY = process.env.GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY';
const PLACE_ID = 'ChIJPWVVTMuRqBIRmw1nAwK8y-g';

export async function GET({ url }) {
    const language = url.searchParams.get('lang') || 'es'; // Default to English
    console.log('Language: ', language)

    try {
        const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&language=${language}&key=${API_KEY}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.result?.reviews) {
            return json(data.result.reviews);
        } else {
            return json({ message: 'No reviews found' }, { status: 404 });
        }
    } catch (error) {
        console.error('Error fetching reviews:', error);
        return json({ message: 'Error fetching reviews' }, { status: 500 });
    }
}