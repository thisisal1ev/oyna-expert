import React from 'react'
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

//photo
import sertifikaty from '../assets/img/sertifikaty.webp'

const Sertific = () => {
  const options = {
    bgOpacity: 1,
    zoom: true,
    close: true,
    counter: true,
  }

  return (
    <div className='py-9'>

      <div className="w-full max-w-base mx-auto px-5">

        <h1 className='mb-6 font-extrabold text-22 sm:text-2xl md:3xl lg:text-4xl xl:text-5xl sm:mb-8 lg:mb-9 xl:mb-11'>Sertifikatlar</h1>

        <div className='grid gap-5 grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>

          <Gallery options={options} id="my-gallery" withDownloadButton withCaption>

            <div className='cursor-zoom-in'>
              <Item
                id="first-pic"
                original={sertifikaty}
                thumbnail={sertifikaty}
                width="430"
                height="606"
                caption='Sertifikat 1'
                alt='birinchi sertifikat'
              >
                {({ ref, open }) => (
                  <img ref={ref} onClick={open} src={sertifikaty} />
                )}
              </Item>
            </div>

            <div className="cursor-zoom-in">
              <Item
                id="second-pic"
                original={sertifikaty}
                thumbnail={sertifikaty}
                width="430"
                height="606"
                caption='Sertifikat 2'
                alt='ikkinchi sertifikat'
              >
                {({ ref, open }) => (
                  <img ref={ref} onClick={open} src={sertifikaty} />
                )}
              </Item>
            </div>

            <div className="cursor-zoom-in">
              <Item
                id='third-pic'
                original={sertifikaty}
                thumbnail={sertifikaty}
                width="430"
                height="606"
                caption='Sertifikat 3'
                alt='uchinchi sertifikat'
              >
                {({ ref, open }) => (
                  <img ref={ref} onClick={open} src={sertifikaty} />
                )}
              </Item>
            </div>

            <div className='cursor-zoom-in'>
              <Item
                id='four-pic'
                original={sertifikaty}
                thumbnail={sertifikaty}
                width="430"
                height="606"
                caption='Sertifikat 4'
                alt="to'rtinchi sertifikat"
              >
                {({ ref, open }) => (
                  <img ref={ref} onClick={open} src={sertifikaty} />
                )}
              </Item>
            </div>

          </Gallery>

        </div>

      </div>

    </div>
  )
}

export default Sertific