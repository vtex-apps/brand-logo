import React from 'react'
import { useRuntime } from 'vtex.render-runtime';
import { useCssHandles } from 'vtex.css-handles'

const handles = ['position', 'imageSize']

const BrandLogo = () => {
  const runtime = useRuntime()
  const brandPath = runtime.route.canonicalPath
  const classes = useCssHandles(handles)
  console.log('Brand path: ', brandPath);

  function switchPictures(brandPath: string){
    if(brandPath.includes("dewalt")){
        return "https://ebricoshopeu.vteximg.com.br/arquivos/dewalt.png"
    } else if(brandPath.includes("ridgid")){
        return "https://ebricoshopeu.vteximg.com.br/arquivos/ridgid.png" 
    } else if(brandPath.includes("stanley")){
        return "https://ebricoshopeu.vteximg.com.br/arquivos/stanley.png"
    } else if(brandPath.includes("bosch")){
        return "https://ebricoshopeu.vteximg.com.br/arquivos/bosch.png"
    } else if(brandPath.includes("makita")){
        return "https://ebricoshopeu.vteximg.com.br/arquivos/makita.png"
    } else if(brandPath.includes("black+decker") || brandPath.includes("black%2520decker")){
        return "https://ebricoshopeu.vtexassets.com/assets/vtex.file-manager-graphql/images/a83b9490-6e88-46da-9fe4-2c07fb791ad7___9a3faa448908a467f9b3e829f980f590.png"
    } else if(brandPath.includes("milwaukee")){
        return "https://ebricoshopeu.vtexassets.com/assets/vtex.file-manager-graphql/images/c3e38198-3749-484c-8614-a9b0f756e5eb___337f5656d8f2e39f26a9ef54fc10b43d.png"
    } else if(brandPath.includes("metabo")){
        return "https://ebricoshopeu.vtexassets.com/assets/vtex.file-manager-graphql/images/0dcf3a57-b018-4408-bd16-32b7d15b2c76___c133db3422ff7a5cafb8409ec3bcb400.png"    
    } else if(brandPath.includes("dewalt")){
        return 
    } else{
        return '' 
    }
  }

  return (
    <div className={classes.position}>
        <img className={classes.imageSize} src={switchPictures(brandPath)}/>
    </div>
   
  )
}

export default BrandLogo
