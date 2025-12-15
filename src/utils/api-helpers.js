// ./frontend/src/app/[lang]/utils/api-helpers.ts
import { STRAPI_API_URL } from "../../config";

export function getStrapiURL(path = '') {
    return `${STRAPI_API_URL}${path}`;
}

export function getStrapiMedia(url) {
    if (url == null) {
        return null;
    }

    if (url.startsWith('http') || url.startsWith('//')) {
        return url;
    }

    return `${getStrapiURL()}${url}`;
}

export function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-MX', options);
}