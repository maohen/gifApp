
export const GetGifs=  async (category)=>{
    //encodeURI elimina los espacios
    const url= `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=rqB2Fowc1ya7OKMBMcnZcGdyxhPSs9AI`
    const resp= await fetch(url);
    const {data} = await resp.json();

    const imagesGif= data.map(img=>{
        return{
            id: img.id,
            title: img.title,
            imageUrl: img.images.downsized_medium.url
        }
        
    })
    
    return imagesGif
}