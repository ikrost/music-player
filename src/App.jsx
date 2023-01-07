import { useState } from 'react';
import './App.css';

import defaultImage from './assets/image.png'

let tracks = [
  {
    "name": "I Was Never There",
    "author": "The Weeknd",
    "file": 'https://rr17---sn-pmcg-bg0e.googlevideo.com/videoplayback?expire=1673076057&ei=-Mi4Y-jzOIuRW76mq6gD&ip=216.131.88.141&id=o-AO6y63nz34aCUEfg1L3rNKrn-R2PdOOFclizLlarGRju&itag=18&source=youtube&requiressl=yes&spc=zIddbBOmru-ZxxBVvAcGBJ-sAgXzDUw&vprv=1&xtags=heaudio%3Dtrue&mime=video%2Fmp4&ns=h2ecTjJF_djzETK3oxSt9VUK&cnr=14&ratebypass=yes&dur=241.487&lmt=1665138367096764&fexp=24007246&c=WEB&txp=5538434&n=wgmcde4kIhHIqg&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cxtags%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAKdIHqmP3HCzDeAsAsEFrziOaxslMlDGc4qEHuddV5ZSAiEAznt1Dk14MJqnMZw9rmy0k8z9ZTUbJUBI0TrlfPX5vvc%3D&rm=sn-5hnelz7z,sn-pnph2axncg-qp9e7l&req_id=17041f70c6c8a3ee&ipbypass=yes&redirect_counter=2&cms_redirect=yes&cmsv=e&mh=Ms&mip=170.239.159.168&mm=29&mn=sn-pmcg-bg0e&ms=rdu&mt=1673057872&mv=m&mvi=17&pcm2cms=yes&pl=25&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pcm2cms,pl&lsig=AG3C_xAwRgIhAOp6QRJSOUTTUMzqAYcQSNdRZphox4oTvHykbNHO_JqbAiEA89UKHxZQryQcR19aLeqiu5bs8BN7HqjGNCamvAawLJ0%3D',
    "image": "https://i.ytimg.com/vi/OlStmta0Vh4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCW2ffg4A-uRy-RA7QJxGB7yegSgA",
  },
  {
    "name": "After Hours",
    "author": "The Weeknd",
    "file": 'https://rr4---sn-pmcg-bg0r.googlevideo.com/videoplayback?expire=1673079613&ei=3da4Y9GIE7Tm1sQP4PaJiA8&ip=177.130.169.205&id=o-AIg7rwvOfE8s22xMEiKc1sHwrEtVUyqzFZMu2EeGVbRM&itag=18&source=youtube&requiressl=yes&gcr=br&spc=zIddbMuxeUyqNTKDqErtqAa3wvLNBbc&vprv=1&xtags=heaudio%3Dtrue&mime=video%2Fmp4&ns=ILROOGLvt52A9Ah9CluHmkEK&cnr=14&ratebypass=yes&dur=361.160&lmt=1671664729439476&fexp=24007246,24432615&beids=24432615&c=WEB&txp=4538434&n=Tk4EOrNIg-9EuQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cspc%2Cvprv%2Cxtags%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgDYNYT-UJJzCEi_VyY49Y1u6yQFmahTYjPWqBu7tBYnkCIFjlMWshYsYxhxOk500Y5kIvqtlx5O3NEsC6Rt8npG1O&rm=sn-8p5hvj-jo4e7s,sn-bg0rd7l&req_id=11b3e2b7d596a3ee&redirect_counter=2&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=lj&mip=170.239.159.168&mm=29&mn=sn-pmcg-bg0r&ms=rdu&mt=1673057872&mv=m&mvi=4&pcm2cms=yes&pl=25&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pcm2cms,pl&lsig=AG3C_xAwRgIhANQuGTFdZcUOcf69slert7rX5x8y2PpMi1iZlEjWBK88AiEAhlAPbP7zRD8TYSg5uP-yGFXCREn5Tk3DipP4YdYDOFo%3D',
    "image": "https://i.ytimg.com/vi/ygTZZpVkmKg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAWpsbXAxTp3_KvsX-RByaXVmDbvg",
  },
  {
    "name": "Future",
    "author": "Maroon 5",
    "file": 'https://rr16---sn-pmcg-bg0r.googlevideo.com/videoplayback?expire=1673079481&ei=Wda4Y4K9MsKLobIPze-CoAo&ip=177.92.250.111&id=o-AFymIemEg8jRA19SR-eMpr0SUp2mC_TA-buv0bnX47Un&itag=18&source=youtube&requiressl=yes&gcr=br&spc=zIddbNuqsgbLctcfEz3XlVfzfsrnunY&vprv=1&xtags=heaudio%3Dtrue&mime=video%2Fmp4&ns=D_11q9F6d0snerMA-tc72FsK&cnr=14&ratebypass=yes&dur=410.575&lmt=1665615162922216&fexp=24007246&c=WEB&txp=4530434&n=3PMnMhE01OwH0g&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cspc%2Cvprv%2Cxtags%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAM0yMwDJRvKwlhl9bjBRmVDTt-bS6aE9-OsOX_4_NGP1AiEA1VgSbbzO4kCD3u_AGoJ5s6AnOQ-YE5XF3-u1E6ZaDKc%3D&redirect_counter=1&rm=sn-hpbvuxaxjvcg-5g0e7e&req_id=f3150e8ef823a3ee&cms_redirect=yes&cmsv=e&mh=q7&mm=29&mn=sn-pmcg-bg0r&ms=rdu&mt=1673058090&mv=m&mvi=16&pl=24&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgDoM-5hqm_qkXJgOHTiRBJHaf1_fOmK1FN1kKBXupDssCIQDlpzbfN5dPbsRTSo6BJzYMudvIRyZESaDs5P-YISTVRw%3D%3D',
    "image": "https://i.ytimg.com/vi/XatXy6ZhKZw/maxresdefault.jpg",
  },
]

let currentPlaying = 0

const audio = new Audio();
audio.src = tracks[currentPlaying].file

function App() {

  const [title, setTitle] = useState("Nenhum")
  const [author, setAuthor] = useState("Nenhum")
  const [image, setImage] = useState(defaultImage)

  const [currentTime, setCurrentTime] = useState("00:00")
  const [duration, setDuration] = useState("00:00")
  const [width, setWidth] = useState(0)

  const [settings, setSettings] = useState({
    playing: false,
  })

  function clickPlay() {

    console.log(audio)

    if(settings.playing == false) {

      audio.play()
      setSettings(settings => ({...settings, ...{playing: true}}));

      setTitle(tracks[currentPlaying].name)
      setAuthor(tracks[currentPlaying].author)
      setImage(tracks[currentPlaying].image)

    } else {

      setSettings(settings => ({...settings, ...{playing: false}}));
      audio.pause();

    }
  }

  function clickSkip() {

    if(currentPlaying == tracks.length - 1) {
      currentPlaying = 0
    } else {
      currentPlaying++
    }

    setTitle(tracks[currentPlaying].name)
    setAuthor(tracks[currentPlaying].author)
    setImage(tracks[currentPlaying].image)

    setWidth(0)
    setCurrentTime("00:00")
    setDuration("00:00")

    audio.src = tracks[currentPlaying].file
    audio.play()
    setSettings(settings => ({...settings, ...{playing: true}}));

  }

  function clickBack() {

    if(currentPlaying == 0) {
      currentPlaying = tracks.length - 1
    } else {
      currentPlaying--
    }

    setTitle(tracks[currentPlaying].name)
    setAuthor(tracks[currentPlaying].author)
    setImage(tracks[currentPlaying].image)

    setWidth(0)
    setCurrentTime("00:00")
    setDuration("00:00")

    audio.src = tracks[currentPlaying].file
    audio.play()
    setSettings(settings => ({...settings, ...{playing: true}}));

  }

  audio.ontimeupdate = function () {
    if (audio.duration) {

        let durmin = Math.floor(audio.duration / 60);
        let dursec = Math.floor(audio.duration - durmin * 60);
        let curmin = Math.floor(audio.currentTime / 60);
        let cursec = Math.floor(audio.currentTime - curmin * 60);

        if (durmin < 10) durmin = "0" + durmin;

        if (dursec < 10) dursec = "0" + dursec;

        if (curmin < 10) curmin = "0" + curmin;

        if (cursec < 10) cursec = "0" + cursec;

        setWidth((100 / audio.duration) * audio.currentTime)
        setCurrentTime(curmin + ":" + cursec)
        setDuration(durmin + ":" + dursec)

        if(((100 / audio.duration) * audio.currentTime) == 100) {

          clickSkip()

        }

    }
  };

  return (
    <>
      <div className='container'>
        <div className='player'>

          <div className='sectionTop'>
            <img src={image} alt="img"></img>

            <div className='texts'>
              <a className='title'>{title}</a>
              <a className='author'>{author}</a>
            </div>
          </div>

          <div className='icons'>
            
            <svg onClick={clickBack} className='playBack' width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.43569 7.55512L12.0629 1.19691C12.3258 1.03694 12.6269 0.950508 12.9346 0.946647C13.2423 0.942787 13.5454 1.02164 13.8123 1.17496C14.1018 1.34356 14.3415 1.58578 14.5072 1.87701C14.6728 2.16825 14.7584 2.49813 14.7553 2.83316V7.2811L24.9239 1.19522C25.1869 1.03525 25.4879 0.94882 25.7956 0.944959C26.1033 0.941099 26.4065 1.01995 26.6733 1.17327C26.9628 1.34187 27.2026 1.58409 27.3682 1.87533C27.5338 2.16656 27.6194 2.49645 27.6163 2.83147V15.2666C27.6196 15.6017 27.5341 15.9317 27.3684 16.2231C27.2028 16.5144 26.9629 16.7567 26.6733 16.9253C26.4065 17.0787 26.1033 17.1575 25.7956 17.1536C25.4879 17.1498 25.1869 17.0634 24.9239 16.9034L14.7553 10.8147V15.2643C14.759 15.5998 14.6736 15.9303 14.508 16.2221C14.3423 16.5139 14.1022 16.7565 13.8123 16.9253C13.5454 17.0787 13.2423 17.1575 12.9346 17.1536C12.6269 17.1498 12.3258 17.0634 12.0629 16.9034L1.43569 10.5452C1.18305 10.3869 0.974762 10.1671 0.830378 9.90624C0.685995 9.64542 0.610249 9.3522 0.610249 9.05408C0.610249 8.75597 0.685995 8.46274 0.830378 8.20193C0.974762 7.94111 1.18305 7.72126 1.43569 7.563V7.55512Z" fill="#E1E1E6"/></svg>
            <svg onClick={clickPlay} className='play' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.4179 25.4014C8.07243 25.4007 7.73308 25.3102 7.43322 25.1386C6.75801 24.756 6.33826 24.0133 6.33826 23.2069V6.8894C6.33826 6.08084 6.75801 5.34036 7.43322 4.95774C7.74022 4.7813 8.08897 4.69057 8.44303 4.69503C8.79708 4.69948 9.14344 4.79896 9.4459 4.98306L23.3918 13.3309C23.6824 13.5131 23.922 13.7662 24.0881 14.0664C24.2542 14.3666 24.3413 14.704 24.3413 15.047C24.3413 15.3901 24.2542 15.7275 24.0881 16.0277C23.922 16.3279 23.6824 16.581 23.3918 16.7632L9.44365 25.1133C9.13412 25.3004 8.77959 25.4 8.4179 25.4014Z" fill="#E1E1E6"/></svg>
            <svg onClick={clickSkip} className='playerForward' width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_91)"><path d="M27.2392 13.5551L16.6119 7.19691C16.349 7.03694 16.048 6.95051 15.7403 6.94665C15.4325 6.94279 15.1294 7.02164 14.8626 7.17496C14.5731 7.34356 14.3333 7.58578 14.1677 7.87701C14.002 8.16825 13.9164 8.49813 13.9196 8.83316V13.2811L3.75091 7.19522C3.488 7.03525 3.18696 6.94882 2.87923 6.94496C2.57151 6.9411 2.26839 7.01995 2.00155 7.17327C1.71203 7.34187 1.47227 7.58409 1.30664 7.87533C1.14101 8.16656 1.0554 8.49645 1.05851 8.83147V21.2666C1.0553 21.6017 1.14086 21.9317 1.3065 22.223C1.47213 22.5144 1.71194 22.7567 2.00155 22.9253C2.26839 23.0787 2.57151 23.1575 2.87923 23.1536C3.18696 23.1498 3.488 23.0634 3.75091 22.9034L13.9196 16.8147V21.2643C13.9159 21.5998 14.0013 21.9303 14.167 22.2221C14.3326 22.5138 14.5726 22.7565 14.8626 22.9253C15.1294 23.0787 15.4325 23.1575 15.7403 23.1536C16.048 23.1498 16.349 23.0634 16.6119 22.9034L27.2392 16.5452C27.4918 16.3869 27.7001 16.1671 27.8445 15.9062C27.9889 15.6454 28.0646 15.3522 28.0646 15.0541C28.0646 14.756 27.9889 14.4627 27.8445 14.2019C27.7001 13.9411 27.4918 13.7213 27.2392 13.563V13.5551Z" fill="#E1E1E6"/></g><defs><clipPath id="clip0_1_91"><rect width="28.8089" height="28.8089" fill="white" transform="translate(0.157761 0.643784)"/></clipPath></defs></svg>

          </div>

          <div className='duration'>

              <div className="progressBar"></div>
              <div style={{ width: width + "%" }} className="progressHead"></div>

          </div>

          <div className='durationTexts'>
              <a className='currentTime'>{currentTime}</a>
              <a className='durationTime'>{duration}</a>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
