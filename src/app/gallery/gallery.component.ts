import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"],
})
export class GalleryComponent implements OnInit {
  imageGallery = [
    { id: 1, src: "/assets/image1.jpg" },
    { id: 2, src: "/assets/image2.jpg" },
    { id: 3, src: "/assets/image3.jpg" },
    { id: 4, src: "/assets/image4.jpg" },
    { id: 5, src: "/assets/image5.jpg" },
    { id: 6, src: "/assets/image6.jpg" },
    { id: 7, src: "/assets/image7.jpg" },
    { id: 8, src: "/assets/image8.jpg" },
    { id: 9, src: "/assets/image9.jpg" },
  ];

  private _selectedImage = this.imageGallery[0].src;
  constructor() {
}

  ngOnInit(): void {}


  selectImage(image){
    console.log("hello")
    this._selectedImage = image.src + "?nf_resize=fit&w=800&h=800";

  }

  get selectedImage(){
    return this._selectedImage;
  }
}
