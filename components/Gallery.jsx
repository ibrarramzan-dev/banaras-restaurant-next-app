"use client";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import "@/styles/Gallery.css";

function Gallery() {
  return (
    <section className="Gallery-container">
      <PhotoProvider>
        <div className="Gallery-wrapper">
          <PhotoView src="https://livedemo00.template-help.com/wt_prod-15612/images/image-original-1-1200x800.jpg">
            <img
              src="https://livedemo00.template-help.com/wt_prod-15612/images/image-original-1-1200x800.jpg"
              alt="Gallery Image 1"
              className="Gallery-img"
              title="Click to view"
            />
          </PhotoView>

          <PhotoView src="https://livedemo00.template-help.com/wt_prod-15612/images/image-original-2-1200x800.jpg">
            <img
              src="https://livedemo00.template-help.com/wt_prod-15612/images/image-original-2-1200x800.jpg"
              alt="Gallery Image 2"
              className="Gallery-img"
              title="Click to view"
            />
          </PhotoView>

          <PhotoView src="https://livedemo00.template-help.com/wt_prod-15612/images/image-original-3-1200x800.jpg">
            <img
              src="https://livedemo00.template-help.com/wt_prod-15612/images/image-original-3-1200x800.jpg"
              alt="Gallery Image 3"
              className="Gallery-img"
              title="Click to view"
            />
          </PhotoView>

          <PhotoView src="https://livedemo00.template-help.com/wt_prod-15612/images/image-original-4-1200x800.jpg">
            <img
              src="https://livedemo00.template-help.com/wt_prod-15612/images/image-original-4-1200x800.jpg"
              alt="Gallery Image 4"
              className="Gallery-img"
              title="Click to view"
            />
          </PhotoView>

          <PhotoView src="https://livedemo00.template-help.com/wt_prod-15612/images/image-original-5-1200x800.jpg">
            <img
              src="https://livedemo00.template-help.com/wt_prod-15612/images/image-original-5-1200x800.jpg"
              alt="Gallery Image 5"
              className="Gallery-img"
              title="Click to view"
            />
          </PhotoView>

          <PhotoView src="https://livedemo00.template-help.com/wt_prod-15612/images/image-original-6-1200x800.jpg">
            <img
              src="https://livedemo00.template-help.com/wt_prod-15612/images/image-original-6-1200x800.jpg"
              alt="Gallery Image 6"
              className="Gallery-img"
              title="Click to view"
            />
          </PhotoView>

          <PhotoView src="https://livedemo00.template-help.com/wt_prod-15612/images/image-original-7-1200x800.jpg">
            <img
              src="https://livedemo00.template-help.com/wt_prod-15612/images/image-original-7-1200x800.jpg"
              alt="Gallery Image 7"
              className="Gallery-img"
              title="Click to view"
            />
          </PhotoView>

          <PhotoView src="https://livedemo00.template-help.com/wt_prod-15612/images/image-original-8-1200x800.jpg">
            <img
              src="https://livedemo00.template-help.com/wt_prod-15612/images/image-original-8-1200x800.jpg"
              alt="Gallery Image 8"
              className="Gallery-img"
              title="Click to view"
            />
          </PhotoView>
        </div>
      </PhotoProvider>
    </section>
  );
}

export default Gallery;
