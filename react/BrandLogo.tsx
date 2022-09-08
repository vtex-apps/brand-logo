import React from 'react'
import { useRuntime } from 'vtex.render-runtime';
import { useCssHandles } from 'vtex.css-handles'

const handles = ['position', 'imageSize']

const BrandLogo = () => {
  const runtime = useRuntime()
  const brandPath = runtime.route.canonicalPath
  const classes = useCssHandles(handles)

  function switchPictures(brandPath: string){
    switch(brandPath){
        case "/dewalt":
            return "https://ebricoshopeu.vteximg.com.br/arquivos/dewalt.png"
        case "/ridgid":
            return "https://ebricoshopeu.vteximg.com.br/arquivos/ridgid.png" 
        case "/dewalt":
            return "https://ebricoshopeu.vteximg.com.br/arquivos/dewalt.png"
        case "/stanley":
            return "https://ebricoshopeu.vteximg.com.br/arquivos/stanley.png"
        case "/bosch":
            return "https://ebricoshopeu.vteximg.com.br/arquivos/bosch.png"
        case "/makita":
            return "https://ebricoshopeu.vteximg.com.br/arquivos/makita.png"
        case "/black+decker":
            return "https://ebricoshopeu.vtexassets.com/assets/vtex.file-manager-graphql/images/a83b9490-6e88-46da-9fe4-2c07fb791ad7___9a3faa448908a467f9b3e829f980f590.png"
        case "/milwaukee":
            return "https://ebricoshopeu.vtexassets.com/assets/vtex.file-manager-graphql/images/c3e38198-3749-484c-8614-a9b0f756e5eb___337f5656d8f2e39f26a9ef54fc10b43d.png"
        case "/metabo":
            return "https://ebricoshopeu.vtexassets.com/assets/vtex.file-manager-graphql/images/0dcf3a57-b018-4408-bd16-32b7d15b2c76___c133db3422ff7a5cafb8409ec3bcb400.png"    
        default:
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
