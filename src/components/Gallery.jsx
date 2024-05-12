import React, { useRef } from 'react'
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { Link } from 'react-router-dom'

//photo
import photo1 from '../assets/img/photo-1.jpg'
import photo2 from '../assets/img/photo-2.jpg'
import photo3 from '../assets/img/photo-3.jpg'
import photo4 from '../assets/img/photo-4.jpg'

const GalleryPage = () => {
  const options = {
    bgOpacity: 0.7,
    zoom: true,
    close: true,
    counter: true,
  }

  const layoutRef = useRef()

  return (
    <div className='py-9'>

      <div className="content-container">

        <div className='mb-6'>
          <h2 className='text-22 font-extrabold sm:text-26 md:text-3xl mb-3 lg:text-4xl xl:text-44'>3000 dan ortiq derazalar o&apos;rnatilgan</h2>
          <p className='text-sm font-montserrat font-medium text-textGrey sm:text-base'>Mahsulotlarimizni ishlab chiqarish uchun biz faqat eng yuqori sifatli original Yevropa komponentlaridan foydalanamiz.</p>
        </div>

        <div className='mb-6 md:mb-8 xl:mb-10 grid gap-10 grid-cols-1 md:grid-cols-2'>

          <Gallery layoutRef={layoutRef} options={options} id="my-gallery" withDownloadButton>

            <div className='cursor-zoom-in overflow-hidden rounded-xl'>
              <Item
                id="first-pic"
                original={photo1}
                thumbnail={photo1}
                width="915"
                height="600"
              >
                {({ ref, open }) => (
                  <img ref={ref} className='rounded-xl w-full h-full hover:scale-110 transition-all duration-300 object-cover' alt='birinchi rasm' onClick={open} src={photo1} />
                )}
              </Item>
            </div>

            <div className="cursor-zoom-in overflow-hidden rounded-xl">
              <Item
                id="second-pic"
                original={photo2}
                thumbnail={photo2}
                width="915"
                height="600"
              >
                {({ ref, open }) => (
                  <img ref={ref} className='rounded-xl w-full h-full hover:scale-110 transition-all duration-300 object-cover' onClick={open} alt='ikkinchi rasm' src={photo2} />
                )}
              </Item>
            </div>

            <div className="cursor-zoom-in overflow-hidden rounded-xl">
              <Item
                id='third-pic'
                original={photo3}
                thumbnail={photo3}
                width="915"
                height="600"
              >
                {({ ref, open }) => (
                  <img ref={ref} className='rounded-xl w-full h-full hover:scale-110 transition-all duration-300 object-cover' onClick={open} alt='uchinchi rasm' src={photo3} />
                )}
              </Item>
            </div>

            <div className='cursor-zoom-in overflow-hidden rounded-xl'>
              <Item
                id='four-pic'
                original={photo4}
                thumbnail={photo4}
                width="915"
                height="600"
              >
                {({ ref, open }) => (
                  <img ref={ref} className='rounded-xl w-full h-full hover:scale-110 transition-all duration-300 object-cover' onClick={open} alt="to'rtinchi rasm" src={photo4} />
                )}
              </Item>
            </div>

          </Gallery>

        </div>

        <Link to='/blog' className='inline-block font-montserrat pt-6 font-semibold text-base underline underline-offset-8 text-textGrey transition-all duration-300 hover:no-underline hover:text-mainBlack'>barcha fotosuratlarni ko&apos;rish</Link>

      </div>

    </div>
  )
}

export default GalleryPage