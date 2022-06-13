import { Type as MediaType } from '../collections/Media'

const formatSrcSet = (image: MediaType) : string => {

    let srcsetStr = ''
    
    // for (let size of ['thumbnail', 'card', 'feature']) {
    //   if (image.sizes[size]) {
    //     srcsetStr += `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${encodeURIComponent(image.sizes[size].filename)} ${image.sizes[size].width}w, `
    //   }
    // }
  
    srcsetStr += `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${image.filename} ${image.width}w`
  
    return srcsetStr
}

export default formatSrcSet