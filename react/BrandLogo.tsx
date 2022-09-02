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
