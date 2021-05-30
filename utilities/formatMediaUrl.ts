import { Type as MediaType } from '../collections/Media'

const formatMediaUrl = (media: MediaType): string => {
    if (!media) {
        return null
    }
    
    return `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${media.filename}`
}

export default formatMediaUrl