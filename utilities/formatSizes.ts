import { Type as MediaType } from '../collections/Media'

const formatSizes = (image: MediaType) : string => {

    let sizes = ''
    
    if (image.sizes.thumbnail) {
        sizes += '(max-width: 290px) 160px, '
    }
    
    if (image.sizes.card) {
        sizes += '(max-width: 800px) 640px, '
    }
    
    if (image.sizes.feature) {
        sizes += '(max-width: 1280px) 1024px, '
    }
    
    sizes += `${image.width}px`
    
    return sizes
    
}

export default formatSizes