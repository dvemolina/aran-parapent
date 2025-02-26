import type { PageServerLoad } from "./$types";
import 'dotenv/config'

const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
const PLACE_ID = 'ChIJPWVVTMuRqBIRmw1nAwK8y-g';

export const load: PageServerLoad = async ({ request }) => {
    
    const acceptLanguage = request.headers.get('accept-language') || 'en';
    const language = acceptLanguage.split(',')[0].split('-')[0]; // Extract language code (e.g., 'es' from 'es-ES')
    
    
    try {
        const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&language=${language}&key=${API_KEY}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
    
        return {
            reviews: data.result?.reviews || []
        };
    } catch (error) {
        console.error('Error fetching reviews:', error);
        return {
            reviews: []
        };
    }
};
